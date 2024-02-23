import MapMissionsPage from "@/components/missionsMapComponents/MapMissionsPage";
import { MapMissionsContextProvider } from "@/context/MissionsMapContext";

export default function MapPage() {
  return (
    <main>
      <MapMissionsContextProvider>
        <MapMissionsPage />
      </MapMissionsContextProvider>
    </main>
  );
}
