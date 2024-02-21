import { Button, Flex, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";

type TItemsMissionsProps = {
  itemId: string;
  missionId: string;
  itemQuantity: any;
};

const HandleMissionItem: FC<TItemsMissionsProps> = ({
  itemId,
  itemQuantity,
  missionId,
}) => {
  const [increment, setIncrement] = useState<number>(0);

  useEffect(() => {
    const itemMission = localStorage.getItem("itemMission");
    const initialItemMission = itemMission ? JSON.parse(itemMission) : [];

    const mission = initialItemMission.find(
      (mission: any) => mission.missionId === missionId
    );

    const item = mission?.items.find((item: any) => item.id === itemId);

    if (mission && item) {
      setIncrement(item.count);
    } else {
      setIncrement(0);
    }
  }, [missionId, itemId]);

  const handleIncrementItemQuantity = (id: string) => {
    const itemMission = localStorage.getItem("itemMission");
    const initialItemMission = itemMission ? JSON.parse(itemMission) : [];

    const missionIndex = initialItemMission.findIndex(
      (item: any) => item.missionId === missionId
    );

    if (missionIndex !== -1) {
      const itemIndex = initialItemMission[missionIndex]?.items.findIndex(
        (item: any) => item.id === itemId
      );

      if (itemIndex !== -1) {
        const updatedStatusMissions = initialItemMission.map((item: any) =>
          item.missionId === missionId
            ? {
                ...item,
                items: item.items.map((missionItem: any) =>
                  missionItem.id === itemId
                    ? { ...missionItem, count: increment + 1 }
                    : missionItem
                ),
              }
            : item
        );

        localStorage.setItem(
          "itemMission",
          JSON.stringify(updatedStatusMissions)
        );
      } else {
        const updatedStatusMissions = initialItemMission.map((item: any) =>
          item.missionId === missionId
            ? {
                ...item,
                items: [...item.items, { id: itemId, count: 1 }],
              }
            : item
        );

        localStorage.setItem(
          "itemMission",
          JSON.stringify(updatedStatusMissions)
        );
      }
    } else {
      const updatedStatusMissions = [
        ...initialItemMission,
        { missionId, items: [{ id: itemId, count: 1 }] },
      ];

      localStorage.setItem(
        "itemMission",
        JSON.stringify(updatedStatusMissions)
      );
    }

    if (increment < itemQuantity) {
      setIncrement((prev) => prev + 1);
    }
  };

  const handleDecrementItemQuantity = (id: string) => {
    const itemMission = localStorage.getItem("itemMission");
    const initialItemMission = itemMission ? JSON.parse(itemMission) : [];

    const missionIndex = initialItemMission.findIndex(
      (item: any) => item.missionId === missionId
    );

    if (missionIndex !== -1) {
      const itemIndex = initialItemMission[missionIndex]?.items.findIndex(
        (item: any) => item.id === itemId
      );

      if (itemIndex !== -1) {
        const updatedStatusMissions = initialItemMission.map((item: any) =>
          item.missionId === missionId
            ? {
                ...item,
                items: item.items.map((missionItem: any) =>
                  missionItem.id === itemId
                    ? { ...missionItem, count: increment - 1 }
                    : missionItem
                ),
              }
            : item
        );

        localStorage.setItem(
          "itemMission",
          JSON.stringify(updatedStatusMissions)
        );
      } else {
        const updatedStatusMissions = initialItemMission.map((item: any) =>
          item.missionId === missionId
            ? {
                ...item,
                items: [...item.items, { id: itemId, count: 1 }],
              }
            : item
        );

        localStorage.setItem(
          "itemMission",
          JSON.stringify(updatedStatusMissions)
        );
      }
    } else {
      const updatedStatusMissions = [
        ...initialItemMission,
        { missionId, items: [{ id: itemId, count: 1 }] },
      ];

      localStorage.setItem(
        "itemMission",
        JSON.stringify(updatedStatusMissions)
      );
    }

    if (increment >= 1) {
      setIncrement((prev) => prev - 1);
    }
  };

  return (
    <Flex align="center" justify="space-between" w="65px">
      {increment === 0 ? (
        <Button
          isDisabled
          onClick={() => handleDecrementItemQuantity(itemId)}
          borderRadius="2px"
          minW="12px"
          h="12px"
          p={0}
        >
          <Text textAlign="center" fontSize="10px">
            -
          </Text>
        </Button>
      ) : (
        <Button
          onClick={() => handleDecrementItemQuantity(itemId)}
          borderRadius="2px"
          minW="12px"
          h="12px"
          p={0}
        >
          <Text textAlign="center" fontSize="10px">
            -
          </Text>
        </Button>
      )}

      <Flex>
        <Text>{increment}</Text>
        <Text>/</Text>
        <Text>{itemQuantity}</Text>
      </Flex>

      {increment === itemQuantity ? (
        <Button
          isDisabled
          onClick={() => handleIncrementItemQuantity(itemId)}
          borderRadius="2px"
          minW="12px"
          h="12px"
          p={0}
        >
          <Text textAlign="center" fontSize="10px">
            +
          </Text>
        </Button>
      ) : (
        <Button
          onClick={() => handleIncrementItemQuantity(itemId)}
          borderRadius="2px"
          minW="12px"
          h="12px"
          p={0}
        >
          <Text textAlign="center" fontSize="10px">
            +
          </Text>
        </Button>
      )}
    </Flex>
  );
};

export default HandleMissionItem;
