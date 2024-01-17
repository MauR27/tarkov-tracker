import Link from "next/link";
import React from "react";
import { TaskObjectiveType } from "../../types";

export interface ITreeData {
  name: string;
  attributes: {
    level: number;
    kappaRequired: boolean;
    wikiLink: string;
    objectives: any;
  };
  children?: ITreeData[];
}

// export const treeData: ITreeData = {
//   name: "Traders",
//   attributes: {
//     level: 0,
//     kappaRequired: false,
//     objectives: [],
//     wikiLink: "",
//   },
//   children: [],
// };

// Links that conect all nodes

export const pathFuncOptions = ({ target, source }: any) => {
  if (target.data.attributes.level <= 0) {
    return "";
  } else {
    return `M${source.x},${source.y} V${target.y} H${target.x} V${target.y}`;
  }
};

export const containerStyles = {
  width: "100%",
  height: "100vh",
};

// Edit all nodes and properties from customs nodes

const nodeSize = { x: 100, y: 200 };
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
}: any) => {
  // console.log(nodeDatum);
  return (
    <>
      <foreignObject {...foreignObjectProps} style={{ overflow: "visible" }}>
        {nodeDatum.attributes.level >= 0 && (
          <div>
            <div
              style={{
                border: "1px solid black",
                backgroundColor: "#CCC9A1",
                minWidth: "100%",
                minHeight: "100%",
              }}
            >
              <p style={{ textAlign: "center" }}>{nodeDatum.name}</p>
              {/* <Link href={nodeDatum.attributes.wikiLink} target="_blank">
                Wiki
              </Link> */}
              {nodeDatum.attributes.objectives.map((data: any) => (
                <div key={data.id}>
                  <div>
                    {/* <p style={{ fontSize: "10px" }}>{data.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
            {/* <button style={{ width: "100%" }}>complete</button> */}
          </div>
        )}
      </foreignObject>
    </>
  );
};
