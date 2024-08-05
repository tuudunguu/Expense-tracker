import { Cbf } from "@/components/CBF";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center pt-10 gap-y-[140px]">
      <Cbf background2="#E5E7EB" background3="#E5E7EB" />
      <div className="flex flex-col w-[382px] h-[308px] gap-y-8 justify-center items-center">
        <img src="/pictures/Frame 10.png" className="w-8 h-8"></img>
        <h4>Select base currency</h4>
        <Select className="w-384px h-64px bg-[#F3F4F6] border-2 border-[#D1D5DB] rounded-lg">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="MNT - Mongolian Tugrik" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <h6 className="text-xs text-[#475569]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </h6>
        <Link href="/Balance">
          <Button className="w-full bg-[#0166FF]">Comfirm</Button>
        </Link>
      </div>
    </div>
  );
}
