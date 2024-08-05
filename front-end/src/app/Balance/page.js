import { Cbf } from "@/components/CBF";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
      <Cbf background2="#0166FF" background3="#E5E7EB" color2="white" />
      <div className="flex flex-col w-[382px] h-[308px] gap-y-8 justify-center items-center">
        <img src="/pictures/Frame 10.png" className="w-8 h-8"></img>
        <h4>Set up your cash Balance</h4>
        <Input />

        <h6 className="text-xs text-[#475569]">
          How much cash do you have in your wallet?
        </h6>
        <Button className="w-full bg-[#0166FF]">Comfirm</Button>
      </div>
    </div>
  );
}
