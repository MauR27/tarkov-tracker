"use client";

import React, { useEffect, useContext } from "react";
import { IQuests } from "../../types";
import GlobalContext from "@/context/GlobalContext";
import tarkovDataQuery from "@/util/tarkovDataQuery";
import AvailableMissions from "./AvailableMissions";
import CompletedMissions from "./CompletedMissions";
import MissionsLocked from "./MissionsLocked";

const MissionsUpdater = () => {
  const {
    playerLevel,
    setAvailableMissions,
    setMissionsLocked,
    setCompleteMissions,
    handleUpdatedMissions,
    setHandleUpdatedMission,
    missionsSelector,
  } = useContext(GlobalContext);

  useEffect(() => {
    try {
      (async () => {
        if (playerLevel) {
          const { tasks } = await tarkovDataQuery();
          const activeMissions: any = {};

          const storedCompleteMissions =
            localStorage.getItem("completeMissions");
          const completeMissionsFromStorage = storedCompleteMissions
            ? JSON.parse(storedCompleteMissions)
            : [];
          const completedMissionIds = completeMissionsFromStorage.map(
            (mission: { id: string[] }) => mission.id
          );

          setCompleteMissions(completeMissionsFromStorage);

          // Function to filter missions based on their status, whether they are active, completed, or if the player meets the required level

          const filteredMissions = tasks.filter((currentTask: IQuests) => {
            const playerHasLevelRequirement =
              currentTask.minPlayerLevel > 0 &&
              currentTask.minPlayerLevel <= playerLevel;

            const hasTaskRequirements =
              currentTask.taskRequirements &&
              currentTask.taskRequirements.length > 0;

            if (!hasTaskRequirements) {
              if (playerHasLevelRequirement) {
                activeMissions[currentTask.id] = true;
                return true;
              }
              return false;
            }

            const passesTaskRequirements = currentTask.taskRequirements.every(
              (requirement) => {
                if (
                  requirement.status.includes("active") &&
                  activeMissions[requirement.task.id]
                ) {
                  return true;
                }

                return (
                  requirement.status.includes("complete") &&
                  completedMissionIds.includes(requirement.task.id)
                );
              }
            );

            if (playerHasLevelRequirement && passesTaskRequirements) {
              activeMissions[currentTask.id] = true;
              return true;
            }
            return false;
          });

          // Filtered missions availables

          const filteredAvailableMissions = filteredMissions.filter(
            (mission: any) =>
              !completeMissionsFromStorage.some(
                (completeMissions: any) => completeMissions.id === mission.id
              )
          );

          setAvailableMissions(filteredAvailableMissions);
          localStorage.setItem(
            "tasks",
            JSON.stringify(filteredAvailableMissions)
          );

          // filtered missions locked

          const missionsLocked = tasks.filter((mission: any) =>
            filteredMissions.every(
              (completeMissions: any) => completeMissions.id !== mission.id
            )
          );

          setMissionsLocked(missionsLocked);

          // For reload the useEffect when one mission is complete

          setHandleUpdatedMission(false);
        }
      })();
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error fetching missions", error.message);
      }
    }
  }, [
    playerLevel,
    handleUpdatedMissions,
    setAvailableMissions,
    setCompleteMissions,
    setHandleUpdatedMission,
    setMissionsLocked,
  ]);

  return (
    <>
      {missionsSelector === "available" && <AvailableMissions />}
      {missionsSelector === "completed" && <CompletedMissions />}
      {missionsSelector === "locked" && <MissionsLocked />}
    </>
  );
};

export default MissionsUpdater;
