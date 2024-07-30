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
  { icon: FaHouseChimney },
  { icon: FaBoxOpen },
  { icon: GiBoombox },
  { icon: FaParachuteBox },
  { icon: GiBoxingGloveSurprise },
  { icon: TbBoxMultiple7 },
  { icon: SiScrapbox },
  { icon: FaBridge },
  { icon: SiHomebridge },
  { icon: FaIcons },
  { icon: FaHouseChimney },
  { icon: FaBoxOpen },
  { icon: GiBoombox },
  { icon: FaParachuteBox },
  { icon: GiBoxingGloveSurprise },
  { icon: TbBoxMultiple7 },
  { icon: SiScrapbox },
  { icon: FaBridge },
  { icon: SiHomebridge },
  { icon: FaIcons },
  { icon: FaHouseChimney },
  { icon: FaBoxOpen },
  { icon: GiBoombox },
  { icon: FaParachuteBox },
  { icon: GiBoxingGloveSurprise },
  { icon: TbBoxMultiple7 },
  { icon: SiScrapbox },
  { icon: FaBridge },
  { icon: SiHomebridge },
  { icon: FaIcons },
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
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const SelectedIcon = icons[selectedIconIndex].icon;
  return (
    <Select className="w-[84px] h-[48px] border-2 border-[#D1D5D] rounded-[8px] flex flex-row justify-center items-center gap-x-1">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="h-fit  w-fit  flex flex-col justify-center gap-6 items-center"></SelectContent>
    </Select>
  );
};
