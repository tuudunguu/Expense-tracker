import { Checkbox } from "@/components/ui/checkbox";
import { FaCamera } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { GiPizzaSlice } from "react-icons/gi";
import { GiHotDog } from "react-icons/gi";
import { GiDonut } from "react-icons/gi";
import { GiIceCreamCone } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { SiNintendo } from "react-icons/si";
import { SiPlaystation } from "react-icons/si";
import { SiXbox } from "react-icons/si";
import { SiSteam } from "react-icons/si";
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
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

const icons = [
  { icon: FaHouseChimney, label: "FaHouseChimney" },
  { icon: FaBoxOpen, label: "FaBoxOpen" },
  { icon: GiBoombox, label: "GiBoombox" },
  { icon: FaParachuteBox, label: "FaParachuteBox" },
  { icon: GiBoxingGloveSurprise, label: "GiBoxingGloveSurprise" },
  { icon: TbBoxMultiple7, label: "TbBoxMultiple7" },
  { icon: SiScrapbox, label: "SiScrapbox" },
  { icon: FaBridge, label: "FaBridge" },
  { icon: SiHomebridge, label: "SiHomebridge" },
  { icon: FaIcons, label: "FaIcons" },
  { icon: FaCamera, label: "FaCamera" },
  { icon: FaCoffee, label: "FaCoffee" },
  { icon: FaBeer, label: "FaBeer" },
  { icon: FaApple, label: "FaApple" },
  { icon: FaAndroid, label: "FaAndroid" },
  { icon: FaRocket, label: "FaRocket" },
  { icon: FaHeart, label: "FaHeart" },
  { icon: FaCar, label: "FaCar" },
  { icon: FaBicycle, label: "FaBicycle" },
  { icon: FaBus, label: "FaBus" },
  { icon: GiHamburger, label: "GiHamburger" },
  { icon: GiPizzaSlice, label: "GiPizzaSlice" },
  { icon: GiHotDog, label: "GiHotDog" },
  { icon: GiDonut, label: "GiDonut" },
  { icon: GiIceCreamCone, label: "GiIceCreamCone" },
  { icon: GiCakeSlice, label: "GiCakeSlice" },
  { icon: SiNintendo, label: "SiNintendo" },
  { icon: SiPlaystation, label: "SiPlaystation" },
  { icon: SiXbox, label: "SiXbox" },
  { icon: SiSteam, label: "SiSteam" },
];

export const InfoCard = ({
  icon,
  title,
  time,
  number,
  color,
  onDelete,
  status,
}) => {
  const [categoryName, iconName] = title.split(", ").map((item) => item.trim());

  // Find the icon component that matches the `icon` prop
  const IconComponent = icons.find((item) => item.label === iconName)?.icon;

  return (
    <div className="w-full h-[64px] px-6 py-3 flex flex-row justify-between items-center bg-[#FFF] border-1 border-[#E5E7EB] rounded-xl">
      <div className="w-fit h-full flex flex-row justify-center items-center gap-x-6">
        <Checkbox />
        {/* Render the dynamic icon */}
        {IconComponent && <IconComponent className="w-6 h-6" />}
        <div className="w-fit h-full flex flex-col justify-between items-start">
          <h6>{categoryName}</h6>
          <h3 className="text-xs font-normal text-[#6B7280]">{time}</h3>
        </div>
      </div>
      <div className="w-fit h-full flex flex-row justify-center items-center">
        <h5
          className={`${
            status === "expense" ? "text-red-700" : "text-green-700"
          }`}
        >
          {status === "expense" ? "-" : "+"} {number}
        </h5>
        <Button onClick={onDelete}>X</Button>
      </div>
    </div>
  );
};
