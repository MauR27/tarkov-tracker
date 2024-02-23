"use client";

import React, { useEffect, useState } from "react";
import useCenteredTree from "@/lib/useCenteredTree";
import Tree, { RawNodeDatum } from "react-d3-tree";
import "./MissionsRD3Tree.css";
import {
  containerStyles,
  pathFuncOptions,
  foreignObjectProps,
  ITreeData,
  initialTreeData,
} from "@/lib/RenderForeignObject";
import { treeDataFunc } from "@/util/TreeMissionsDataFunc";
import { Box } from "@chakra-ui/react";
import RenderForeignObject from "@/lib/RenderForeignObject";

const MissionsRD3Tree = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [treeData, setTreeData] = useState<ITreeData>(initialTreeData);
  const [translate, containerRef] = useCenteredTree();

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
  // console.log(foreignObjectProps);

  // IN PROGRESS... ↓↓

  // const [searchValue, setSearchValue] = useState<string>("");
  // const [translate, setTranslate] = useState({ x: 0, y: 0 });
  // const [zoom, setZoom] = useState<number>(0.5);
  // const containerRef: any = useRef();

  // const searchAndZoomToNode = (nodeName: string) => {
  //   // each node has this data-node-name attribute set on creation with the name of the quest

  //   const regex = new RegExp(nodeName, "i");

  //   const element = Array.from(document.querySelectorAll("foreignObject"));
  //   const filterNameOfMission = element.filter(
  //     (node) => node.dataset.nodeName !== "Traders"
  //   );
  //   const nameOfMissions = filterNameOfMission.map(
  //     (name) => name.dataset.nodeName
  //   );

  //   const matchingNode = nameOfMissions.find((node) => regex.test(node!));
  //   const nodeElement = document.querySelector(
  //     `[data-node-name='${matchingNode}']`
  //   );

  //   if (!nodeElement) return;

  //   // get the coordinates for the node
  //   const nodeRect = nodeElement.getBoundingClientRect();

  //   const translateX = -nodeRect.left; // how much it moves from the left
  //   const translateY = -nodeRect.top; // how much it moves from the top

  //   const containerWidth = containerRef.current.clientWidth; // total width of SVG container
  //   const containerHeight = containerRef.current.clientHeight; // total height of SVG container

  //   const halfWidthContainer = containerWidth / 2.2;
  //   const halfHeightContainer = containerHeight / 2.2;

  //   // we cant just set the new coordinates because they are relative to the current position
  //   // so we need to add the new coordinates to the current ones

  //   setTranslate((prevState) => ({
  //     x: prevState.x + translateX + halfWidthContainer,
  //     y: prevState.y + translateY + halfHeightContainer,
  //   }));
  // };

  // const resetTranslate = () => {
  //   setTranslate({
  //     x: containerRef.current.clientWidth / 2.2,
  //     y: containerRef.current.clientHeight / 2.2,
  //   });
  // };
  // const changeInputHandler = (e: any) => {
  //   e.preventDefault;
  //   return setSearchValue(e.target.value);
  // };

  if (!loading) {
    return <h1>Loading</h1>;
  }
  return (
    <Box className="tree-container" style={containerStyles} ref={containerRef}>
      {/* IN PROGRESS... ↓↓ */}

      {/* <Box>
        <Input type="text" onChange={changeInputHandler} />
        <Button onClick={() => searchAndZoomToNode(searchValue)}>Search</Button>
        <Button onClick={() => resetTranslate()}>Reset</Button>
      </Box> */}
      <Tree
        data={treeData as RawNodeDatum}
        // data={treeData2}
        orientation="vertical"
        translate={translate}
        zoom={0.1}
        zoomable={true}
        // IN PROGRESS... ↓↓

        // bindZoomListener
        // onUpdate={(upd) => {
        //   console.log(upd);

        //   setTranslate(upd.translate);
        //   setZoom(upd.zoom);
        // }}
        scaleExtent={{ min: 0.1, max: 2 }}
        separation={{ siblings: 1, nonSiblings: 2 }}
        data-name="tree"
        collapsible={false}
        pathClassFunc={() => "link-quests"}
        pathFunc={pathFuncOptions}
        nodeSize={{ x: 400, y: 580 }}
        renderCustomNodeElement={(props) =>
          RenderForeignObject({
            ...props,
            foreignObjectProps,
          })
        }
      />
    </Box>
  );
};

export default MissionsRD3Tree;
