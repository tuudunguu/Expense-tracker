import { Navbar } from "@/components/Navbar";
import { Records } from "@/components/Records";
import { OverlayCard } from "@/components/OverlayCard";
import { AddCategory } from "@/components/OverlayAddCategory";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Records />
    </div>
  );
}
