"use client";
import { Button } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { IQuests } from "../../../types";

type TIdNode = {
  id: string;
  forceRender: any;
};

const HandleCompleteMapMissions: FC<TIdNode> = ({ id, forceRender }) => {
  const [completedMissionsTree, setCompletedMissionsTree] =
    useState<boolean>(false);

  useEffect(() => {
    const currentID: string = id;
    const statusMissions = localStorage.getItem("mapMissionsStatus");
    const initialStatusMissions = statusMissions
      ? JSON.parse(statusMissions)
      : [];

    const mission = initialStatusMissions.find(
      (mission: IQuests) => mission.id === currentID
    );
    setCompletedMissionsTree(mission ? mission.completed : false);
  }, [id]);

  const handleClick = (id: string) => {
    const statusMissions = localStorage.getItem("mapMissionsStatus");
    const statusMissionsFromStorage = statusMissions
      ? JSON.parse(statusMissions)
      : [];

    const missionIndex = statusMissionsFromStorage.findIndex(
      (mission: IQuests) => mission.id === id
    );
    const updatedStatusMissions =
      missionIndex !== -1
        ? [
            ...statusMissionsFromStorage.slice(0, missionIndex),
            {
              id,
              completed: !statusMissionsFromStorage[missionIndex].completed,
            },
            ...statusMissionsFromStorage.slice(missionIndex + 1),
          ]
        : [...statusMissionsFromStorage, { id, completed: true }];

    localStorage.setItem(
      "mapMissionsStatus",
      JSON.stringify(updatedStatusMissions)
    );

    setCompletedMissionsTree((prev) => !prev);
    forceRender();
  };
  return (
    <>
      {!completedMissionsTree ? (
        <Button
          size="sm"
          minW="50%"
          fontWeight="xs"
          borderRadius="5px"
          onClick={() => handleClick(id)}
        >
          Completed
        </Button>
      ) : (
        <Button
          size="sm"
          minW="50%"
          fontWeight="xs"
          borderRadius="5px"
          bg="gray"
          _hover={{ bg: "rgb(99, 99, 99)" }}
          onClick={() => handleClick(id)}
        >
          Uncompleted
        </Button>
      )}
    </>
  );
};

export default HandleCompleteMapMissions;
