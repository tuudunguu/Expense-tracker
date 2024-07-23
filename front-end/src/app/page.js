import { Navbar } from "@/components/Navbar";
import { Records } from "@/components/Records";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-y-20 items-center">
      <Navbar />
      <Records />
    </div>
  );
}
