import { Navbar } from "@/components/Navbar";
import { Records } from "@/components/Records";
import { OverlayCard } from "@/components/OverlayCard";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Records />
      <OverlayCard />
    </div>
  );
}
