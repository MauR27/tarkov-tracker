import React from "react";
import "./ForeignObjectNode.css";
import ForeingObjectCard from "./ForeignObjectCard";

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

const RenderForeignObject = ({ nodeDatum, foreignObjectProps }: any) => {
  const nodeClassName = getTraderNodeClassName(nodeDatum.name);
  const traderTreeClassName = getTraderTreeClassName(nodeDatum.trader);

  return (
    <ForeingObjectCard
      nodeClassNameProp={nodeClassName}
      traderTreeClassNameProp={traderTreeClassName}
      nodeDatumProp={nodeDatum}
      foreignObjectProps={foreignObjectProps}
    />
  );
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

export default RenderForeignObject;
