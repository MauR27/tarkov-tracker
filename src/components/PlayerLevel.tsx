"use client";

import React, { useEffect, useContext } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import styles from "../app/page.module.css";
import GlobalContext from "@/context/GlobalContext";

const PlayerLevel = () => {
  const { playerLevel, setPlayerLevel } = useContext(GlobalContext);

  useEffect(() => {
    const storedLevel = localStorage.getItem("playerLevel");
    if (storedLevel) {
      setPlayerLevel(parseInt(storedLevel));
    }
    setPlayerLevel(parseInt(storedLevel || "1"));
  }, [setPlayerLevel]);

  const handlePlayerLevelUp = () => {
    if (!playerLevel) return;
    if (playerLevel < 79) {
      setPlayerLevel((prev) => {
        const newLevel = prev! + 1;
        localStorage.setItem("playerLevel", newLevel.toString());
        return newLevel;
      });
    }
  };
  const handlePlayerLevelDown = () => {
    if (!playerLevel) return;
    if (playerLevel > 1) {
      setPlayerLevel((prev) => {
        const newLevel = prev! - 1;
        localStorage.setItem("playerLevel", newLevel.toString());
        return newLevel;
      });
    }
  };

  if (!playerLevel) return <div>Loading...</div>;
  return (
    <div className={styles.playerLevel}>
      <section>
        <button onClick={handlePlayerLevelUp}>{<IoMdArrowDropup />}</button>
        <button onClick={handlePlayerLevelDown}>{<IoMdArrowDropdown />}</button>
      </section>
      <section>
        <h1>{playerLevel}</h1>
      </section>
    </div>
  );
};

export default PlayerLevel;
