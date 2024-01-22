"use client";

import React, { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";
import { Button, Flex } from "@chakra-ui/react";

const HandleMissionsSelector = () => {
  const { setMissionsSelector } = useContext(GlobalContext);

  return (
    <Flex
      minW="100%"
      justifyContent="center"
      align="center"
      gap={5}
      bg="#447c92"
    >
      <Button
        color="white"
        _hover={{ color: "black", bg: "white" }}
        variant="ghost"
        size={"sm"}
        minW="20%"
        onClick={() => setMissionsSelector("available")}
      >
        Available
      </Button>
      <Button
        color="white"
        _hover={{ color: "black", bg: "white" }}
        variant="ghost"
        size={"sm"}
        minW="20%"
        onClick={() => setMissionsSelector("completed")}
      >
        Completed
      </Button>
      <Button
        color="white"
        _hover={{ color: "black", bg: "white" }}
        variant="ghost"
        size={"sm"}
        minW="20%"
        onClick={() => setMissionsSelector("locked")}
      >
        Locked
      </Button>
    </Flex>
  );
};

export default HandleMissionsSelector;
