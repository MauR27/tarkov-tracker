"use client";

import React, { useEffect, useState, useContext } from "react";
import styles from "../app/page.module.css";
import { IQuests } from "../../types";
import Image from "next/image";
import Link from "next/link";
import GlobalContext from "@/context/GlobalContext";
import tarkovDataQuery from "@/util/tarkovDataQuery";

const QuestCard = () => {
  const [availableMissions, setAvailableMissions] = useState<IQuests[]>([]);
  const [completeMissions, setCompleteMissions] = useState<IQuests[]>([]);

  const { playerLevel } = useContext(GlobalContext);

  useEffect(() => {
    try {
      (async () => {
        if (playerLevel) {
          const { tasks } = await tarkovDataQuery();

          // console.log(tasks);

          const storedCompleteMissions =
            localStorage.getItem("completeMissions");
          const completeMissionsFromStorage = storedCompleteMissions
            ? JSON.parse(storedCompleteMissions)
            : [];
          const completedMissionIds = completeMissionsFromStorage.map(
            (mission: { id: string[] }) => mission.id
          );

          setCompleteMissions(completeMissionsFromStorage);

          const filteredMissions = tasks.filter((data: IQuests) => {
            const isLevelRequirement =
              data.minPlayerLevel > 0 && data.minPlayerLevel <= playerLevel;

            const hasTaskRequirements =
              data.taskRequirements && data.taskRequirements.length > 0;

            if (!hasTaskRequirements) {
              return isLevelRequirement;
            }

            const areTaskRequirements = data.taskRequirements.every((req) => {
              return (
                req.status.includes("complete") &&
                completedMissionIds.includes(req.task.id)
              );
            });

            return isLevelRequirement && areTaskRequirements;
          });

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
        }
      })();
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error fetching missions", error.message);
      }
    }
  }, [playerLevel]);

  const handleComplete = (id: string) => {
    const completedMission = availableMissions.find(
      (mission) => mission.id === id
    );

    if (completedMission) {
      const storedCompleteMissions = localStorage.getItem("completeMissions");
      const completeMissionsFromStorage = storedCompleteMissions
        ? JSON.parse(storedCompleteMissions)
        : [];

      const updatedCompleteMissions = [
        ...completeMissionsFromStorage,
        completedMission,
      ];

      setCompleteMissions(updatedCompleteMissions);
      localStorage.setItem(
        "completeMissions",
        JSON.stringify(updatedCompleteMissions)
      );

      const updatedAvailableMissions = availableMissions.filter(
        (mission) => mission.id !== id
      );
      setAvailableMissions(updatedAvailableMissions);
      localStorage.setItem("tasks", JSON.stringify(updatedAvailableMissions));
    }
  };

  return (
    <div className={styles.grid}>
      {availableMissions.map((task) => (
        <div key={task.id} className={styles.card}>
          <section className={styles.cardHeader}>
            <Image
              src={task.trader.imageLink}
              alt={task.trader.name}
              width={30}
              height={30}
            />
            <h3>{task.name}</h3>
            <p>{task.trader.name}</p>
            <Link href={task.wikiLink} target="_blank">
              Wiki
            </Link>
          </section>
          <section>
            <ul>
              {task.objectives.map((data) => (
                <div key={data.id}>
                  <li>{data.description}</li>
                  <p>{data.count}</p>
                </div>
              ))}
            </ul>
          </section>
          <section>
            <button
              onClick={() => {
                handleComplete(task.id);
              }}
            >
              Complete
            </button>
          </section>
        </div>
      ))}
    </div>
  );
};

export default QuestCard;
