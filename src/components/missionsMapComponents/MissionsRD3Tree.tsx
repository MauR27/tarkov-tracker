"use client";

import React, { useEffect, useState } from "react";
import useCenteredTree from "@/lib/useCenteredTree";
import Tree, { RawNodeDatum } from "react-d3-tree";
import "./MissionsRD3Tree.css";
import {
  renderForeignObjectNode,
  containerStyles,
  pathFuncOptions,
  foreignObjectProps,
  ITreeData,
  initialTreeData,
} from "@/lib/TreeObjectOptions";
import { treeDataFunc } from "@/util/TreeMissionsDataFunc";

const MissionsSchema: React.FC = () => {
  const [translate, containerRef]: any = useCenteredTree();
  const [loading, setLoading] = useState<boolean>(false);
  const [treeData, setTreeData] = useState<ITreeData>(initialTreeData);

  useEffect(() => {
    try {
      (async () => {
        const treeMissions = await treeDataFunc();

        setTreeData(treeMissions);
        setLoading(true);
      })();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }, []);

  if (!loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="tree-container" style={containerStyles} ref={containerRef}>
      <Tree
        data={treeData as RawNodeDatum}
        orientation="vertical"
        translate={translate}
        zoom={0.1}
        scaleExtent={{ min: 0.1, max: 2 }}
        separation={{ siblings: 1, nonSiblings: 2 }}
        collapsible={false}
        pathClassFunc={() => "link-quests"}
        pathFunc={pathFuncOptions}
        nodeSize={{ x: 400, y: 580 }}
        renderCustomNodeElement={(props) =>
          renderForeignObjectNode({ ...props, foreignObjectProps })
        }
      />
    </div>
  );
};

export default MissionsSchema;
