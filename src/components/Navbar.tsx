"use client";

import React from "react";
import PlayerLevel from "./PlayerLevel";
import HandleMissionsSelector from "@/util/HandleMissionsSelector";
import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Flex
      as="nav"
      bg="#1B2F33"
      minH="7rem"
      boxShadow="lg"
      minW="100%"
      p="10px"
      align="center"
      position="fixed"
      flexDir="column"
      gap={5}
      zIndex={1}
    >
      {pathname === "/" ? (
        <>
          <Flex
            minW="100%"
            minH="2rem"
            align="center"
            justify={"end"}
            pl="10px"
          >
            <Link
              as={NextLink}
              _hover={{ textDecoration: "none", bg: "gray.300" }}
              href="/map"
              bg="white"
              color="black"
              p="5px"
              borderRadius="3px"
            >
              Mission Tree
            </Link>
          </Flex>
          <PlayerLevel />
          <HandleMissionsSelector />
        </>
      ) : (
        <>
          <Flex
            minW="100%"
            minH="2rem"
            align="center"
            justify={"end"}
            pl="10px"
          >
            <Link
              as={NextLink}
              _hover={{ textDecoration: "none", bg: "gray.300" }}
              href="/"
              bg="white"
              color="black"
              p="5px"
              borderRadius="3px"
            >
              Go Home
            </Link>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
