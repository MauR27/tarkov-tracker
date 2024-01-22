import Link from "next/link";
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
} from "@chakra-ui/react";

const MissionsLocked = () => {
  const { missionsLocked } = useContext(GlobalContext);

  return (
    <Flex gap={1} m="0 5px 0 5px" flexDir="column">
      {missionsLocked.map((task) => (
        <Card
          as={Flex}
          bg="blue.500"
          key={task.id}
          overflow="hidden"
          variant="outline"
          borderRadius="none"
          p="1rem"
          flexDir="row"
          minH="250px"
        >
          <CardHeader
            bg="red"
            as={Flex}
            flexDir="column"
            justify="space-around"
            minW="25%"
          >
            <Flex gap={2}>
              <Image
                boxSize="30px"
                objectFit="cover"
                src={task.trader.imageLink}
                alt={task.trader.name}
              />
              <Text>{task.trader.name}</Text>
            </Flex>
            <Text>{task.name}</Text>
            <Link href={task.wikiLink} target="_blank">
              Wiki
            </Link>
          </CardHeader>
          <CardBody bg={"green"} as={Flex}>
            <List>
              {task.objectives.map((data) => (
                <Box key={data.id}>
                  <Box mb={3}>
                    <ListItem>{data.description}</ListItem>
                  </Box>
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
