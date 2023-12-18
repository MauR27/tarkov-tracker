import React from "react";
import styles from "../app/page.module.css";
import PlayerLevel from "./PlayerLevel";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <PlayerLevel />
    </div>
  );
};

export default Navbar;
