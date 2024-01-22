"use client";
import React, { FC, useEffect, useState } from "react";

type TIdNode = {
  id: string;
};

const HandleCompleteMapMissions: FC<TIdNode> = ({ id }) => {
  const [completeMission, setCompleteMission] = useState<boolean>(false);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const currentID: any = id;
    const statusMissions = localStorage.getItem("mapMissionsStatus");
    const initialStatusMissions = statusMissions
      ? JSON.parse(statusMissions)
      : [];

    const mission = initialStatusMissions.find(
      (mission: any) => mission.id === currentID
    );

    setCompleteMission(mission ? mission.completed : false);
  }, [id]);

  const handleClick = (id: string) => {
    const statusMissions = localStorage.getItem("mapMissionsStatus");
    const statusMissionsFromStorage = statusMissions
      ? JSON.parse(statusMissions)
      : [];

    const missionIndex = statusMissionsFromStorage.findIndex(
      (mission: any) => mission.id === id
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

    setCompleteMission((prev) => !prev);
  };

  return (
    <button onClick={() => handleClick(id)}>
      {!completeMission ? "complete" : "uncomplete"}
    </button>
  );
};

export default HandleCompleteMapMissions;