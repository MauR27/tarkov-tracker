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
      bg="#233E43"
    >
      <Button
        color="white"
        _hover={{ bg: "#1B2F33", borderRadius: "none" }}
        variant="ghost"
        size={"sm"}
        fontWeight="sm"
        minW="30%"
        onClick={() => setMissionsSelector("available")}
      >
        Available
      </Button>
      <Button
        color="white"
        _hover={{ bg: "#1B2F33", borderRadius: "none" }}
        variant="ghost"
        size={"sm"}
        fontWeight="sm"
        minW="30%"
        onClick={() => setMissionsSelector("completed")}
      >
        Completed
      </Button>
      <Button
        color="white"
        _hover={{ bg: "#1B2F33", borderRadius: "none" }}
        variant="ghost"
        size={"sm"}
        fontWeight="sm"
        minW="30%"
        onClick={() => setMissionsSelector("locked")}
      >
        Locked
      </Button>
    </Flex>
  );
};

export default HandleMissionsSelector;
