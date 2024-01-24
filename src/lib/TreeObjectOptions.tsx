import React from "react";
import "./ForeignObjectNode.css";
import HandleCompleteMapMissions from "@/components/missionsMapComponents/HandleCompleteMapMissions";
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
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { IoBookmarkOutline } from "react-icons/io5";
import {
  CloseIcon,
  LockIcon,
  NotAllowedIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
import { TbCircleLetterK } from "react-icons/tb";

export interface ITreeData<T = Record<string, unknown>> {
  taskRequired: string;
  id: string;
  trader: string;
  name: string;
  attributes: T;
  children?: ITreeData<T>[];
}

export const initialTreeData: ITreeData = {
  taskRequired: "",
  id: "",
  trader: "",
  name: "Traders",
  attributes: {
    level: 0,
    kappaRequired: false,
    objectives: [],
    wikiLink: "",
  },
  children: [],
};

// Change nodeClassName for all branches traders

const getTraderNodeClassName = (nodeName: any) => {
  switch (nodeName) {
    case "Therapist":
      return "quest-map-trader-card";
    case "Prapor":
      return "quest-map-trader-card";
    case "Skier":
      return "quest-map-trader-card";
    case "Mechanic":
      return "quest-map-trader-card";
    case "Ragman":
      return "quest-map-trader-card";
    case "Fence":
      return "quest-map-trader-card";
    case "Lightkeeper":
      return "quest-map-trader-card";
    case "Jaeger":
      return "quest-map-trader-card";
    case "Peacekeeper":
      return "quest-map-trader-card";

    default:
      return "default-node";
  }
};
const getTraderTreeClassName = (nodeName: any) => {
  switch (nodeName) {
    case "Therapist":
      return "quest-map-trader-card_Therapist";
    case "Prapor":
      return "quest-map-trader-card_Prapor";
    case "Skier":
      return "quest-map-trader-card_Skier";
    case "Mechanic":
      return "quest-map-trader-card_Mechanic";
    case "Ragman":
      return "quest-map-trader-card_Ragman";
    case "Fence":
      return "quest-map-trader-card_Fence";
    case "Lightkeeper":
      return "quest-map-trader-card_Lightkeeper";
    case "Jaeger":
      return "quest-map-trader-card_Jaeger";
    case "Peacekeeper":
      return "quest-map-trader-card_Peacekeeper";

    default:
      return "default-node";
  }
};

// Links that conect all nodes

export const pathFuncOptions = ({ target, source }: any) => {
  if (target.data.attributes.level <= 0) {
    return "";
  } else {
    return `M${source.x},${source.y} V${target.y - 70} H${target.x} V${
      target.y
    }`;
  }
};

export const containerStyles = {
  width: "100vw",
  height: "100vh",
};

// Edit all nodes and properties from customs nodes

const nodeSize = { x: 375, y: 480 };
export const foreignObjectProps = {
  width: nodeSize.x,
  height: nodeSize.y,
  y: -30,
  x: -190,
};

// Custom nodes objects

export const renderForeignObjectNode = ({
  nodeDatum,
  foreignObjectProps,
}: any) => {
  const nodeClassName = getTraderNodeClassName(nodeDatum.name);
  const traderTreeClassName = getTraderTreeClassName(nodeDatum.trader);

  return (
    <>
      {nodeDatum.attributes.level >= 0 &&
      nodeClassName !== "quest-map-trader-card" ? (
        <foreignObject {...foreignObjectProps} style={{ overflow: "visible" }}>
          <Card
            className={traderTreeClassName}
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
                      <LockIcon color="RGB(249, 16, 16)" />
                    </Tooltip>
                  )}
                </Flex>
                <Tooltip
                  hasArrow
                  label={`You must to be level ${nodeDatum.attributes.level} to unlock this quest`}
                  fontSize="xs"
                  placement="auto"
                >
                  <Text
                    textAlign="center"
                    fontSize="xs"
                    bg="white"
                    borderRadius="2px"
                    color="black"
                    p="0 2px 0 2px"
                    _hover={{ bg: "gray.200" }}
                  >
                    {nodeDatum.attributes.level} lvl
                  </Text>
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
              <HandleCompleteMapMissions id={nodeDatum.id} />
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
