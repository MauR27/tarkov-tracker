"use client";

import React, { useContext } from "react";
import styles from "../app/page.module.css";
import GlobalContext from "@/context/GlobalContext";

const HandleMissionsSelector = () => {
  const { setMissionsSelector } = useContext(GlobalContext);

  return (
    <section className={styles.missionsSelector}>
      <button onClick={() => setMissionsSelector("available")}>
        Available
      </button>
      <button onClick={() => setMissionsSelector("completed")}>
        Completed
      </button>
      <button onClick={() => setMissionsSelector("locked")}>Locked</button>
    </section>
  );
};

export default HandleMissionsSelector;
