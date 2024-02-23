import React, { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  Link,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const MissionsLocked = () => {
  const { missionsLocked } = useContext(GlobalContext);

  return (
    <Flex gap={1} m="0 5px 0 5px" flexDir="column">
      {missionsLocked.map((task) => (
        <Card
          as={Flex}
          bg="whiteAlpha.200"
          key={task.id}
          overflow="hidden"
          variant="outline"
          borderRadius="5px"
          p="1rem"
          flexDir="row"
          minH="250px"
          color="white"
          border="none"
          boxShadow="xl"
          _hover={{ bg: "whiteAlpha.100" }}
        >
          <CardHeader
            minW="25%"
            as={Flex}
            flexDir="column"
            justify="space-around"
          >
            <Flex gap={2}>
              <Image
                boxSize="30px"
                objectFit="cover"
                src={task.trader.imageLink}
                alt={task.trader.name}
              />
              <Text color="#00A3C4" fontSize="20px" fontWeight="bold">
                {task.name}
              </Text>
            </Flex>
            <Link
              href={task.wikiLink}
              target="_blank"
              bg="white"
              color="black"
              borderRadius={"3px"}
              w="30%"
              textAlign="center"
              _hover={{ textDecor: "none", bg: "gray.300", color: "black" }}
            >
              Wiki
            </Link>
          </CardHeader>
          <CardBody as={Flex}>
            <List>
              {task.objectives.map((data) => (
                <Box key={data.id}>
                  <Flex
                    m="10px 0 10px 0"
                    align="center"
                    gap={2}
                    _hover={{ bg: "gray.600" }}
                  >
                    <ArrowLeftIcon boxSize="10px" />

                    <ListItem>{data.description}</ListItem>
                  </Flex>
                  {data.type === "giveItem" && data.item && (
                    <Flex gap={2} align="center">
                      <Image
                        src={data.item.iconLink}
                        alt={data.item.name}
                        width={35}
                        height={35}
                      />
                      <Text>{data.count}</Text>
                      <Text>{data.item.shortName}</Text>
                    </Flex>
                  )}
                </Box>
              ))}
            </List>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default MissionsLocked;
