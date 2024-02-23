import MissionsMainPage from "@/components/MissionsMainPage";
import Navbar from "@/components/Navbar";
import { HStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <main>
      {/* <Navbar /> */}
      <HStack h="15rem" />
      <MissionsMainPage />
    </main>
  );
}
