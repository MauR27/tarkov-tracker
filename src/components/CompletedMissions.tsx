import GlobalContext from "@/context/GlobalContext";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";
import React, { useContext } from "react";
import RemoveCompletedMissions from "@/util/RemoveCompletedMissions";

const CompletedMissions = () => {
  const { completeMissions } = useContext(GlobalContext);
  return (
    <div className={styles.flex}>
      {completeMissions.map((task) => (
        <div key={task.id} className={styles.missionsCompletedCard}>
          <div className={styles.cardFlex}>
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
            <section className={styles.sectionCardFlex}>
              <ul>
                {task.objectives.map((data) => (
                  <div key={data.id}>
                    <div className={styles.missionsDescription}>
                      <li>{data.description}</li>
                    </div>
                    {data.type === "giveItem" && data.item && (
                      <div className={styles.itemMissionDescription}>
                        <Image
                          src={data.item.iconLink}
                          alt={data.item.name}
                          width={35}
                          height={35}
                        />
                        <p>{data.count}</p>
                        <p>{data.item.shortName}</p>
                      </div>
                    )}
                  </div>
                ))}
              </ul>
            </section>
            <section className={styles.sectionCardFlex}>
              <RemoveCompletedMissions id={task.id} />
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedMissions;
