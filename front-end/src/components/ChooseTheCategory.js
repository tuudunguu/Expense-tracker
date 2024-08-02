import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaCamera,
  FaCoffee,
  FaBeer,
  FaApple,
  FaAndroid,
  FaRocket,
  FaHeart,
  FaCar,
  FaBicycle,
  FaBus,
  FaHouseChimney,
  FaBoxOpen,
  FaParachuteBox,
  FaBridge,
} from "react-icons/fa";
import {
  GiHamburger,
  GiPizzaSlice,
  GiHotDog,
  GiDonut,
  GiIceCreamCone,
  GiCakeSlice,
  GiBoombox,
  GiBoxingGloveSurprise,
} from "react-icons/gi";
import {
  SiNintendo,
  SiPlaystation,
  SiXbox,
  SiSteam,
  SiScrapbox,
  SiHomebridge,
} from "react-icons/si";
import { TbBoxMultiple7 } from "react-icons/tb";
import React from "react";

import { AddCategory } from "./OverlayAddCategory";

// Create a mapping of icon names to icon components
const iconMap = {
  FaHouseChimney: FaHouseChimney,
  FaBoxOpen: FaBoxOpen,
  GiBoombox: GiBoombox,
  FaParachuteBox: FaParachuteBox,
  GiBoxingGloveSurprise: GiBoxingGloveSurprise,
  TbBoxMultiple7: TbBoxMultiple7,
  SiScrapbox: SiScrapbox,

  SiHomebridge: SiHomebridge,

  FaCamera: FaCamera,
  FaCoffee: FaCoffee,
  FaBeer: FaBeer,
  FaApple: FaApple,
  FaAndroid: FaAndroid,
  FaRocket: FaRocket,
  FaHeart: FaHeart,
  FaCar: FaCar,
  FaBicycle: FaBicycle,
  FaBus: FaBus,
  GiHamburger: GiHamburger,
  GiPizzaSlice: GiPizzaSlice,
  GiHotDog: GiHotDog,
  GiDonut: GiDonut,
  GiIceCreamCone: GiIceCreamCone,
  GiCakeSlice: GiCakeSlice,
  SiNintendo: SiNintendo,
  SiPlaystation: SiPlaystation,
  SiXbox: SiXbox,
  SiSteam: SiSteam,
};

export const ChooseTheCategory = ({
  categoryName,
  setCategoryName,
  categoryIcon,
  setCategoryIcon,
  createCategory,
  isOpen,
  setIsOpen,
  category,
  setTitle,
  title,
}) => {
  return (
    <Select
      value={title}
      onValueChange={(value) => {
        setTitle(value);
      }}
    >
      <SelectTrigger className="w-full h-12 border-2 border-[#D1D5DB]">
        <SelectValue placeholder="Find or choose category" />
      </SelectTrigger>
      <SelectContent>
        <AddCategory
          open="Add Category"
          createCategory={createCategory}
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          categoryIcon={categoryIcon}
          setCategoryIcon={setCategoryIcon}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {category.map((item) => {
          const Icon = iconMap[item.categoryIcon];
          console.log(item.id);
          return (
            <SelectItem
              key={item.id}
              value={`${item.categoryIcon},${item.categoryName}`}
            >
              <div className="flex flex-row justify-start items-center gap-x-3">
                {Icon && <Icon className="w-6 h-6 " />}

                <span>{item.categoryName}</span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
