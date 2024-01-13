import GlobalContext from "@/context/GlobalContext";
import React, { useContext } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import HandleCompleteMissions from "../util/HandleCompleteMissions";

const AvailableMissionsPage = () => {
  const { availableMissions } = useContext(GlobalContext);

  const handleCompleteSingleMission = () => {};

  return (
    <div className={styles.flex}>
      {availableMissions.map((task) => (
        <div key={task.id} className={styles.card}>
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
              <HandleCompleteMissions id={task.id} />
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableMissionsPage;
