import GlobalContext from "@/context/GlobalContext";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";
import React, { useContext } from "react";
import RemoveCompletedMissions from "@/util/RemoveCompletedMissions";

const CompletedMissions = () => {
  const { completeMissions } = useContext(GlobalContext);
  return (
    <div className={styles.grid}>
      {completeMissions.map((task) => (
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
          <section>
            <RemoveCompletedMissions id={task.id} />
          </section>
        </div>
      ))}
    </div>
  );
};

export default CompletedMissions;
