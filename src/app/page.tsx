import QuestCard from "@/components/QuestCard";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <QuestCard />
    </main>
  );
}
