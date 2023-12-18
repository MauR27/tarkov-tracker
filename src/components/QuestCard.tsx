"use client";

import React, { useEffect, useState, useContext } from "react";
import styles from "../app/page.module.css";
import { IQuests } from "../../types";
import Image from "next/image";
import Link from "next/link";
import GlobalContext from "@/context/GlobalContext";
import tarkovDataQuery from "@/util/tarkovDataQuery";

const QuestCard = () => {
  const [missions, setMissions] = useState<IQuests[]>([]);
  const { playerLevel } = useContext(GlobalContext);

  useEffect(() => {
    try {
      (async () => {
        const { tasks } = await tarkovDataQuery();

        const filteredMissions = tasks.filter(
          (data: IQuests) =>
            data.minPlayerLevel > 0 && data.minPlayerLevel <= playerLevel
        );

        setMissions(filteredMissions);
      })();
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error fetching missions", error.message);
      }
    }
  }, [playerLevel]);

  return (
    <div className={styles.grid}>
      {missions.map((task) => (
        <div key={task.id} className={styles.card}>
          <section className={styles.cardHeader}>
            <Image
              src={task.trader.imageLink}
              alt={task.trader.name}
              width={30}
              height={30}
            />
            <h3>{task.name}</h3>
            <p>{task.trader.name}</p>
            <Link href={task.wikiLink} target="_blank">
              Wiki
            </Link>
          </section>
          <section>
            <ul>
              {task.objectives.map((data) => (
                <div key={data.id}>
                  <li>{data.description}</li>
                  <p>{data.count}</p>
                </div>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
};

export default QuestCard;
