import GlobalContext from "@/context/GlobalContext";
import React, { FC, useContext } from "react";
import { Button, Flex } from "@chakra-ui/react";

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
    <Flex minW="100%" justify="center">
      <Button
        size="sm"
        minW="100%"
        bg="#233E43"
        color="white"
        fontWeight="xs"
        borderRadius="3px"
        _hover={{ bg: "gray.300", color: "black" }}
        onClick={() => {
          handleComplete(id);
        }}
      >
        Complete
      </Button>
    </Flex>
  );
};

export default HandleCompleteMissions;
