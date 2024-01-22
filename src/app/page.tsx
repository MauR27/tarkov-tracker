import MissionsMainPage from "@/components/MissionsMainPage";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import { HStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HStack h="15rem" />
      <MissionsMainPage />
    </main>
  );
}
