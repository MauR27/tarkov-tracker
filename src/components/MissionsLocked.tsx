import HandleCompleteMissions from "@/util/HandleCompleteMissions";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "../app/page.module.css";
import GlobalContext from "@/context/GlobalContext";
import RemoveCompletedMissions from "@/util/RemoveCompletedMissions";

const MissionsLocked = () => {
  const { missionsLocked } = useContext(GlobalContext);

  return (
    <div className={styles.grid}>
      {missionsLocked.map((task) => (
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
            {/* <HandleCompleteMissions id={task.id} /> */}
            {/* <RemoveCompletedMissions id={task.id} /> */}
          </section>
        </div>
      ))}
    </div>
  );
};

export default MissionsLocked;
