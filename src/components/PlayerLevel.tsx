"use client";

import React, { useEffect, useContext } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import styles from "../app/page.module.css";
import GlobalContext from "@/context/GlobalContext";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";

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
        minH="40px"
        align="center"
        justifyContent="center"
      >
        Loading...
      </Flex>
    );
  return (
    <Flex minW="100%" justifyContent="center" bg="#447c92">
      <Flex align="center" gap={2}>
        <IconButton
          aria-label="arrow up"
          icon={<IoMdArrowDropup />}
          onClick={handlePlayerLevelUp}
        />
        <Text>{playerLevel}</Text>
        <IconButton
          aria-label="arrow down"
          icon={<IoMdArrowDropdown />}
          onClick={handlePlayerLevelDown}
        />
      </Flex>
    </Flex>
  );
};

export default PlayerLevel;
