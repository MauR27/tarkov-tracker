import Image from "next/image";
import React from "react";
import "./ForeignObjectNode.css";
import Link from "next/link";
import HandleCompleteMapMissions from "@/components/missionsMapComponents/HandleCompleteMapMissions";

export interface ITreeData<T = Record<string, unknown>> {
  id: string;
  trader: string;
  name: string;
  attributes: T;
  children?: ITreeData<T>[];
}

export const initialTreeData: ITreeData = {
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

const nodeSize = { x: 350, y: 480 };
export const foreignObjectProps = {
  width: nodeSize.x,
  height: nodeSize.y,
  y: -30,
  x: -175,
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
          <div className={traderTreeClassName}>
            <section className="quest-map-card_header">
              <Link href={nodeDatum.attributes.wikiLink} target="_blank">
                wiki
              </Link>
              <p style={{ textAlign: "center" }}>{nodeDatum.name}</p>
            </section>

            {nodeDatum.attributes.objectives.map((data: any) => (
              <section className="quest-map-card_body" key={data.id}>
                <div>
                  <p style={{ fontSize: "10px" }}>{data.description}</p>
                  {data.type === "giveItem" && data.item && (
                    <div>
                      <Image
                        src={data.item.iconLink}
                        alt={data.item.name}
                        width={35}
                        height={35}
                      />
                      <p>{data.count}</p>
                    </div>
                  )}
                </div>
              </section>
            ))}

            <section className="quest-map-card_footer">
              <HandleCompleteMapMissions id={nodeDatum.id} />
            </section>
          </div>
        </foreignObject>
      ) : (
        <>
          {nodeClassName !== "default-node" && (
            <foreignObject
              {...foreignObjectProps}
              style={{ overflow: "visible" }}
            >
              <div className={nodeClassName}>
                <Image
                  src={nodeDatum.attributes.traderImage}
                  alt={nodeDatum.name}
                  width={350}
                  height={300}
                />
              </div>
            </foreignObject>
          )}
        </>
      )}
    </>
  );
};
