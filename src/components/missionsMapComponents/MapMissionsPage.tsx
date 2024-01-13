import React from "react";
import MissionsSchema from "./MissionsSchema";
import { treeData } from "@/lib/TreeObjectOptions";

const MapMissionsPage = () => {
  return (
    <>
      <MissionsSchema data={treeData} />
    </>
  );
};

export default MapMissionsPage;
