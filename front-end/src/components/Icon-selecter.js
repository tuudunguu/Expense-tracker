import React, { useState } from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { FaParachuteBox } from "react-icons/fa6";
import { GiBoombox } from "react-icons/gi";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { SiScrapbox } from "react-icons/si";
import { TbBoxMultiple7 } from "react-icons/tb";
import { FaBridge } from "react-icons/fa6";
import { SiHomebridge } from "react-icons/si";
import { FaIcons } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Item } from "@radix-ui/react-radio-group";

const icons = [
  { icon: FaHouseChimney, label: "FaHouseChimney" },
  { icon: FaBoxOpen, label: "FaBoxOpen" },
  { icon: GiBoombox, label: "GiBoombox" },
  { icon: FaParachuteBox, label: "FaParachuteBox " },
  { icon: GiBoxingGloveSurprise, label: "GiBoxingGloveSurprisy" },
  { icon: TbBoxMultiple7, label: "TbBoxMultiple7" },
  { icon: SiScrapbox, label: "SiScrapbox" },
  { icon: FaBridge, label: "FaBridge" },
  { icon: SiHomebridge, label: "SiHomebridge" },
  { icon: FaIcons, label: "aIcons" },
  { icon: FaHouseChimney, label: "FaHouseChimney" },
  { icon: FaBoxOpen, label: "FaBoxOpen" },
  { icon: GiBoombox, label: "GiBoombox" },
  { icon: FaParachuteBox, label: "FaParachuteBox " },
  { icon: GiBoxingGloveSurprise, label: "GiBoxingGloveSurprisy" },
  { icon: TbBoxMultiple7, label: "TbBoxMultiple7" },
  { icon: SiScrapbox, label: "SiScrapbox" },
  { icon: FaBridge, label: "FaBridge" },
  { icon: SiHomebridge, label: "SiHomebridge" },
  { icon: FaIcons, label: "aIcons" },
  { icon: FaHouseChimney, label: "FaHouseChimney" },
  { icon: FaBoxOpen, label: "FaBoxOpen" },
  { icon: GiBoombox, label: "GiBoombox" },
  { icon: FaParachuteBox, label: "FaParachuteBox " },
  { icon: GiBoxingGloveSurprise, label: "GiBoxingGloveSurprisy" },
  { icon: TbBoxMultiple7, label: "TbBoxMultiple7" },
  { icon: SiScrapbox, label: "SiScrapbox" },
  { icon: FaBridge, label: "FaBridge" },
  { icon: SiHomebridge, label: "SiHomebridge" },
  { icon: FaIcons, label: "aIcons" },
];

const colors = [
  "#4CAF50",
  "#FFEB3B",
  "#FF9800",
  "#F44336",
  "#9C27B0",
  "#3F51B5",
  "#03A9F4",
  "#00BCD4",
];

export const IconSelecter = ({}) => {
  return (
    <Select>
      <SelectTrigger className="w-[120px] border-2 border-[#D1D5DB]">
        <SelectValue placeholder={<FaHouseChimney />} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-5 justify-center">
            {icons.map((item) => {
              const Icon = item.icon;
              return (
                <SelectItem value={item.label}>
                  <Icon />
                </SelectItem>
              );
            })}
          </div>
        </div>
      </SelectContent>
    </Select>
  );
};
