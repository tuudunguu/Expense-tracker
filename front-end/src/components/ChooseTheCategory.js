import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { AddCategory } from "./OverlayAddCategory";

export const ChooseTheCategory = ({
  categoryName,
  setCategoryName,
  categoryIcon,
  setCategoryIcon,
  createCategory,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Select>
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

        <SelectItem value="lFood and Drink">Food and Drink</SelectItem>
        <SelectItem value="Shopping">Shopping</SelectItem>
        <SelectItem value="Housing">Housing</SelectItem>
        <SelectItem value="Transportation">Transportation</SelectItem>
        <SelectItem value="Vehicle">Vehicle</SelectItem>
        <SelectItem value="Life & Entertainment">
          Life & Entertainment
        </SelectItem>
        <SelectItem value="Communication, PC">Communication, PC</SelectItem>
        <SelectItem value="Financial expenses">Financial expenses</SelectItem>
        <SelectItem value="Investments">Investments</SelectItem>
        <SelectItem value="Income">Income</SelectItem>
        <SelectItem value="Others">Others</SelectItem>
      </SelectContent>
    </Select>
  );
};
