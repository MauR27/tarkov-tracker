import React from "react";
import styles from "../../app/page.module.css";
import MapMissionsPage from "@/components/missionsMapComponents/MapMissionsPage";
import MapNavbar from "@/components/missionsMapComponents/MapNavbar";

export default function MapPage() {
  return (
    <div>
      <main className={styles.mainMapPage}>
        {
          <>
            <MapNavbar />
            <MapMissionsPage />
          </>
        }
      </main>
    </div>
  );
}
