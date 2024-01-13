import React from "react";

export const treeData = {
  name: "Traders",
  attributes: {
    level: 0,
  },
  children: [
    {
      name: "Prapor",
      attributes: {
        level: 1,
      },
      children: [
        {
          name: "Debut",
          attributes: {
            level: 2,
          },
        },
        {
          name: "Mole",
          attributes: {
            level: 3,
          },
        },
      ],
    },
    {
      name: "Therapist",
      attributes: {
        level: 1,
      },
      children: [
        {
          name: "Shortage",
          attributes: {
            level: 2,
          },
        },
        {
          name: "Propital",
          attributes: {
            level: 3,
          },
        },
      ],
    },
  ],
};

// Links that conect all nodes

export const pathFuncOptions = ({ target, source }: any) => {
  if (target.data.attributes.level <= 1) {
    return "";
  }
  // const dy = target.y - source.y;
  // const a = source.x - target.x;
  // console.log(target.y - source.y + source.y);
  // console.log(a);

  return `M${source.x},${source.y} V${target.y} H${target.x} V${target.y}`;
};

export const containerStyles = {
  width: "100%",
  height: "100vh",
};

// Edit all nodes and properties from customs nodes

const nodeSize = { x: 100, y: 100 };
export const foreignObjectProps = {
  width: nodeSize.x,
  height: nodeSize.y,
  x: -50,
  y: -40,
};

// Custom nodes objects

export const RenderForeignObjectNode = ({
  nodeDatum,
  foreignObjectProps,
}: any) => (
  <>
    <foreignObject {...foreignObjectProps} style={{ overflow: "visible" }}>
      {nodeDatum.attributes.level >= 1 && (
        <>
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "#CCC9A1",
              minWidth: "100%",
              minHeight: "100%",
            }}
          >
            <p style={{ textAlign: "center" }}>{nodeDatum.name}</p>
          </div>
          <button style={{ width: "100%" }}>complete</button>
        </>
      )}
    </foreignObject>
  </>
);
