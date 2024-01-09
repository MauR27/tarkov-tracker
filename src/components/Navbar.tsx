import React from "react";
import styles from "../app/page.module.css";
import PlayerLevel from "./PlayerLevel";
import HandleMissionsSelector from "@/util/HandleMissionsSelector";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <PlayerLevel />
      <HandleMissionsSelector />
    </div>
  );
};

export default Navbar;
