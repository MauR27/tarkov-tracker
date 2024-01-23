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
} from "@chakra-ui/react";

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
            boxShadow="2px 2px 20px black"
            color="white"
          >
            <CardHeader
              className="quest-map-card_header"
              as={Flex}
              gap={4}
              p="10px"
            >
              <Link
                textDecoration="underline"
                fontSize="xs"
                href={nodeDatum.attributes.wikiLink}
                target="_blank"
                _hover={{ textDecoration: "none" }}
              >
                Wiki
              </Link>
              <Text>{nodeDatum.name}</Text>
              <Text>{nodeDatum.attributes.level} Lvl</Text>
              <Text>{nodeDatum.taskRequired}</Text>
            </CardHeader>
            <Divider />
            <CardBody
              className="quest-map-card_body"
              p="10px"
              fontSize="x-small"
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

            <CardFooter className="quest-map-card_footer" p={0}>
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
