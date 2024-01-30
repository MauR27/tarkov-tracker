import HandleCompleteMapMissions from "@/components/missionsMapComponents/HandleCompleteMapMissions";
import { LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Image,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";

type TPropsForeingCard = {
  nodeClassNameProp: any;
  traderTreeClassNameProp: any;
  foreignObjectProps: any;
  nodeDatumProp: any;
};

const ForeingObjectCard: FC<TPropsForeingCard> = ({
  nodeClassNameProp,
  traderTreeClassNameProp,
  foreignObjectProps,
  nodeDatumProp,
}) => {
  const nodeClassName = nodeClassNameProp;
  const traderTreeClassName = traderTreeClassNameProp;
  const nodeDatum = nodeDatumProp;

  const [forceRender, setForceRender] = useState<boolean>(false);
  let stateOfMissions;

  const handleForceRender = () => {
    setForceRender((prev) => !prev);
  };

  const getMissionFromStorage = localStorage.getItem("mapMissionsStatus");

  if (getMissionFromStorage) {
    const findMissionsById = JSON.parse(getMissionFromStorage).find(
      (data: any) => data.id === nodeDatum.id
    );

    stateOfMissions = findMissionsById && findMissionsById.completed;
  }

  return (
    <>
      {nodeDatum.attributes.level >= 0 &&
      nodeClassName !== "quest-map-trader-card" ? (
        <foreignObject {...foreignObjectProps} style={{ overflow: "visible" }}>
          <Card
            className={`${traderTreeClassName} ${
              stateOfMissions ? "completed" : "incomplete"
            }`}
            borderRadius="5px"
            boxShadow="1px 1px 10px black"
            color="white"
          >
            <CardHeader
              className="quest-map-card_header"
              as={Flex}
              gap={4}
              p="10px"
              justifyContent="space-between"
              boxShadow="md"
            >
              <Flex
                bg="white"
                color="black"
                h="20px"
                align="center"
                borderRadius="3px"
                p="2px"
                _hover={{ bg: "gray.200" }}
              >
                <Link
                  fontSize="xs"
                  href={nodeDatum.attributes.wikiLink}
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                >
                  Wiki
                </Link>
              </Flex>
              <Text>{nodeDatum.name}</Text>
              <Box w="43px">
                <Flex justifyContent="space-between" mb="4px" p="0 2px 0 2px">
                  {!nodeDatum.attributes.kappaRequired && (
                    <Tooltip
                      label="Is not required for kappa"
                      hasArrow
                      fontSize="xs"
                      placement="auto"
                    >
                      <Flex
                        bg="RGB(33, 33, 33)"
                        borderRadius="2px"
                        justify="center"
                        align="center"
                        w="18px"
                        h="18px"
                      >
                        <Text color="white" fontSize="lg">
                          K
                        </Text>
                        <Text
                          color="red"
                          fontSize="20px"
                          position="absolute"
                          top="-5px"
                        >
                          _
                        </Text>
                      </Flex>
                    </Tooltip>
                  )}
                  {nodeDatum.taskRequired !== "" && (
                    <Tooltip
                      hasArrow
                      label={nodeDatum.taskRequired}
                      fontSize="xs"
                      placement="auto"
                    >
                      <LockIcon
                        color="RGB(249, 16, 16)"
                        _hover={{ cursor: "pointer" }}
                      />
                    </Tooltip>
                  )}
                </Flex>
                <Tooltip
                  hasArrow
                  label={`You must to be level ${nodeDatum.attributes.level} to unlock this quest`}
                  fontSize="xs"
                  placement="auto"
                >
                  <Flex
                    align="center"
                    justify="space-around"
                    fontSize="xs"
                    bg="white"
                    borderRadius="2px"
                    color="black"
                    h="20px"
                    w="40px"
                    p="0 2px 0 2px"
                    _hover={{ bg: "gray.200", cursor: "pointer" }}
                  >
                    <Text>{nodeDatum.attributes.level}</Text>
                    <Text>lvl</Text>
                  </Flex>
                </Tooltip>
              </Box>
            </CardHeader>
            <Divider />
            <CardBody
              className="quest-map-card_body"
              p="10px"
              fontSize="x-small"
              boxShadow="lg"
            >
              {nodeDatum.attributes.objectives.map((data: any) => (
                <Flex key={data.id} align="center">
                  <Box w="80%" mb="10px">
                    <Text>{data.description}</Text>
                  </Box>
                  {data.type === "giveItem" && data.item && (
                    <Flex flexDir="row" gap={2} minH="100%" align="center">
                      <Image
                        src={data.item.iconLink}
                        alt={data.item.name}
                        width={30}
                        height={30}
                      />
                      <Text>{data.count}</Text>
                    </Flex>
                  )}
                </Flex>
              ))}
            </CardBody>

            <CardFooter
              className="quest-map-card_footer"
              p={2}
              as={Flex}
              justify="center"
            >
              <HandleCompleteMapMissions
                id={nodeDatum.id}
                forceRender={handleForceRender}
              />
            </CardFooter>
          </Card>
        </foreignObject>
      ) : (
        <>
          {nodeClassName !== "default-node" && (
            <foreignObject
              {...foreignObjectProps}
              style={{ overflow: "visible" }}
            >
              <Box className={nodeClassName}>
                <Image
                  src={nodeDatum.attributes.traderImage}
                  alt={nodeDatum.name}
                  width={350}
                  height={300}
                />
              </Box>
            </foreignObject>
          )}
        </>
      )}
    </>
  );
};

export default ForeingObjectCard;
