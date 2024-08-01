"use client";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const colors = ["yellow", "black", "green", "orange", "purple", "red", "blue"];

export const IconSelector = ({ categoryIcon, setCategoryIcon }) => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <Select value={categoryIcon} onValueChange={setCategoryIcon}>
      <SelectTrigger className="w-[120px] border-2 border-[#D1D5DB]">
        <SelectValue placeholder={<FaHouseChimney />} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-5  ">
            {icons.map((item, index) => {
              const Icon = item.icon;
              return (
                <SelectItem key={index} value={item.label} className="m-auto">
                  <Icon style={{ color: selectedColor }} className="w-6 h-6" />
                </SelectItem>
              );
            })}
          </div>
          <div className="flex  justify-between border-t-2 border-t-[#D1D5DB] w-full h-full p-6">
            {colors.map((item, index) => (
              <div
                key={index}
                style={{ background: item }}
                className="w-6 h-6 rounded-full"
                onClick={() => setSelectedColor(item)}
              ></div>
            ))}
          </div>
        </div>
      </SelectContent>
    </Select>
  );
};
