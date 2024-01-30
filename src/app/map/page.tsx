import MapMissionsPage from "@/components/missionsMapComponents/MapMissionsPage";
import MapNavbar from "@/components/missionsMapComponents/MapNavbar";
import { MapMissionsContextProvider } from "@/context/MissionsMapContext";

export default function MapPage() {
  return (
    <main>
      <MapMissionsContextProvider>
        <MapNavbar />
        <MapMissionsPage />
      </MapMissionsContextProvider>
    </main>
  );
}
