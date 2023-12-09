"use client";

import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import { IQuests } from "../../types";

const QuestCard = () => {
  const [missions, setMissions] = useState<IQuests[]>([]);
  const [visibleMissions, setVisibleMissions] = useState<IQuests[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tarkov.dev/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `{
              tasks {
                  id
                  name
                  trader{
                      id
                      name
                  }
                  experience
                  kappaRequired
                  wikiLink
                  objectives{
                      id
                      description
                  }
                  map{
                      id
                      name
                  }
              }
          }`,
          }),
        });

        const json = await response.json();
        const { data } = await json;
        setMissions(data.tasks);
        setVisibleMissions(data.tasks.slice(0, itemsPerPage));
      } catch (error) {
        console.error("Error fetching missions:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        const nextPage = pageNumber + 1;
        const startIndex = (nextPage - 1) * itemsPerPage;
        const endIndex = nextPage * itemsPerPage;

        if (endIndex <= missions.length) {
          setVisibleMissions((prevMissions) => [
            ...prevMissions,
            ...missions.slice(startIndex, endIndex),
          ]);
          setPageNumber(nextPage);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [missions, pageNumber]);

  return (
    <div className={styles.grid}>
      {visibleMissions.map((task) => (
        <div key={task.id} className={styles.card}>
          <section className={styles.cardHeader}>
            <p>avatar</p>
            <h3>{task.name}</h3>
          </section>
          <section>
            <ul>
              {task.objectives.map((data) => (
                <li key={data.id}>{data.description}</li>
              ))}
            </ul>
          </section>

          {/* <p>{task.experience}</p>
          <p>{task.kappaRequired}</p>
          <p>{task.wikiLink}</p>
          <p>{task.map?.name}</p>
          <p>{task.trader.name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default QuestCard;
