"use client";

import React, { useContext, useEffect, useState } from "react";
import tarkovDataQuery from "@/util/tarkovDataQuery";
import useCenteredTree from "@/lib/useCenteredTree";
import Tree from "react-d3-tree";
import "./MissionsSchema.css";
import {
  RenderForeignObjectNode,
  containerStyles,
  pathFuncOptions,
  foreignObjectProps,
} from "@/lib/TreeObjectOptions";
import GlobalContext from "@/context/GlobalContext";

const MissionsSchema = ({ data }: any) => {
  const [translate, containerRef]: any = useCenteredTree();
  const [loading, setLoading]: any = useState(false);
  const [mission, setMission] = useState([]);
  const { availableMissions } = useContext(GlobalContext);

  useEffect(() => {
    try {
      (async () => {
        const { tasks } = await tarkovDataQuery();

        const filteredMission = tasks.filter((mission: any) => {
          return mission.trader.name === "Therapist";
        });
        const a = filteredMission.map((data: any) => {
          const s = {
            id: data.id,
            name: data.name,
            objectives: data.objectives,
            minPlayerLevel: data.minPlayerLevel,
            wikiLink: data.wikiLink,
          };
          return s;
        });
        console.log(a);
        // console.log(a);

        setLoading(true);
        setMission(filteredMission);
      })();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }, []);

  console.log(availableMissions);

  if (!loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="tree-container" style={containerStyles} ref={containerRef}>
      <Tree
        data={data}
        orientation="vertical"
        translate={translate}
        zoom={0.8}
        scaleExtent={{ min: 0.5, max: 2 }}
        separation={{ siblings: 1, nonSiblings: 2 }}
        collapsible={false}
        pathClassFunc={() => "link-quests"}
        pathFunc={pathFuncOptions}
        // pathFunc={"step"}
        renderCustomNodeElement={(props) =>
          RenderForeignObjectNode({ ...props, foreignObjectProps })
        }
      />
    </div>
  );
};

export default MissionsSchema;
