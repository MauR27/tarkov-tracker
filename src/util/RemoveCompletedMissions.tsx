import GlobalContext from "@/context/GlobalContext";
import React, { FC, useContext } from "react";

type TIdProps = {
  id: string;
};

const RemoveCompletedMissions: FC<TIdProps> = ({ id }) => {
  const {
    completeMissions,
    setCompleteMissions,
    setAvailableMissions,
    setHandleUpdatedMission,
  } = useContext(GlobalContext);

  const handleComplete = (id: string) => {
    const availableMission = completeMissions.find(
      (mission) => mission.id === id
    );

    if (availableMission) {
      const storedAvailableMissions = localStorage.getItem("tasks");
      const availableMissionsFromStorage = storedAvailableMissions
        ? JSON.parse(storedAvailableMissions)
        : [];

      const updatedAvailableMissions = [
        ...availableMissionsFromStorage,
        availableMission,
      ];

      setAvailableMissions(updatedAvailableMissions);
      localStorage.setItem("tasks", JSON.stringify(updatedAvailableMissions));

      const removeCompleteMissions = completeMissions.filter(
        (mission) => mission.id !== id
      );
      setCompleteMissions(removeCompleteMissions);

      localStorage.setItem(
        "completeMissions",
        JSON.stringify(removeCompleteMissions)
      );

      setHandleUpdatedMission(true);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          handleComplete(id);
        }}
      >
        Mark uncompleted
      </button>
    </div>
  );
};

export default RemoveCompletedMissions;
