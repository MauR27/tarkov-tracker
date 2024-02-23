"use client";

import React, { useEffect, useContext } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import GlobalContext from "@/context/GlobalContext";
import { Flex, Text } from "@chakra-ui/react";

const PlayerLevel = () => {
  const { playerLevel, setPlayerLevel } = useContext(GlobalContext);

  useEffect(() => {
    const storedLevel = localStorage.getItem("playerLevel");
    if (storedLevel) {
      setPlayerLevel(parseInt(storedLevel));
    }
    setPlayerLevel(parseInt(storedLevel || "1"));
  }, [setPlayerLevel]);

  const handlePlayerLevelUp = () => {
    if (!playerLevel) return;
    if (playerLevel < 79) {
      setPlayerLevel((prev) => {
        const newLevel = prev! + 1;
        localStorage.setItem("playerLevel", newLevel.toString());
        return newLevel;
      });
    }
  };
  const handlePlayerLevelDown = () => {
    if (!playerLevel) return;
    if (playerLevel > 1) {
      setPlayerLevel((prev) => {
        const newLevel = prev! - 1;
        localStorage.setItem("playerLevel", newLevel.toString());
        return newLevel;
      });
    }
  };

  if (!playerLevel)
    return (
      <Flex
        as="p"
        minW="100%"
        minH="54px"
        align="center"
        justifyContent="center"
      >
        Loading...
      </Flex>
    );
  return (
    <Flex minW="100%" justifyContent="center" align="center" flexDir="column">
      <Text>Level</Text>
      <Flex align="center" gap={2}>
        <IoMdArrowDropup size="30px" onClick={handlePlayerLevelUp} />
        <Text>{playerLevel}</Text>
        <IoMdArrowDropdown size="30px" onClick={handlePlayerLevelDown} />
      </Flex>
    </Flex>
  );
};

export default PlayerLevel;
