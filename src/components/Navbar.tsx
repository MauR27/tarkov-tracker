import React from "react";
import styles from "../app/page.module.css";
import PlayerLevel from "./PlayerLevel";
import HandleMissionsSelector from "@/util/HandleMissionsSelector";
import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="RGBA(0, 0, 0)"
      minH="7rem"
      minW="100%"
      p="10px"
      align="center"
      justifyContent="center"
      position="fixed"
      flexDir="column"
      gap={5}
    >
      {/* Header */}
      <Flex minW="100%" bg="#447c92" minH="2rem" align="center" pl="10px">
        <Link as={NextLink} _hover={{ textDecoration: "none" }} href="/map">
          Mission Tree
        </Link>
      </Flex>

      {/* Body */}
      <PlayerLevel />

      {/* Footer */}
      <HandleMissionsSelector />
    </Flex>
  );
};

export default Navbar;
