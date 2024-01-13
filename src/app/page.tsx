import MissionsMainPage from "@/components/MissionsMainPage";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <MissionsMainPage />
    </main>
  );
}
