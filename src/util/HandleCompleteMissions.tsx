import GlobalContext from "@/context/GlobalContext";
import React, { FC, useContext } from "react";

type TIdProps = {
  id: string;
};

const HandleCompleteMissions: FC<TIdProps> = ({ id }) => {
  const {
    setCompleteMissions,
    availableMissions,
    setAvailableMissions,
    setHandleUpdatedMission,
  } = useContext(GlobalContext);

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
        Complete
      </button>
    </div>
  );
};

export default HandleCompleteMissions;
