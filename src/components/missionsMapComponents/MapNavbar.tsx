import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const MapNavbar = () => {
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
      zIndex={1}
    >
      {/* Header */}
      <Flex minW="100%" bg="#447c92" minH="2rem" align="center" pl="10px">
        <Link as={NextLink} _hover={{ textDecoration: "none" }} href="/">
          Back to main page
        </Link>
      </Flex>
    </Flex>
  );
};

export default MapNavbar;
