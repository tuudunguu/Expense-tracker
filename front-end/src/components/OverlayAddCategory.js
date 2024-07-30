"use client";

import { IconSelecter } from "../components/Icon-selecter";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component in ui directory

export const AddCategory = ({ open }) => {
  console.log("AddCategory dialog opened");

  return (
    <Dialog>
      <DialogTrigger className="w-full flex justify-start pl-8 pb-2 pt-2 border-b-2 border-[#D1D5DB] hover:bg-[#D1D5DB] ">
        <h6 className="text-sm">{open}</h6>
      </DialogTrigger>
      <DialogContent className="w-[494px] h-[236px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <div className="flex flex-row gap-x-4 justify-between items-center">
          <IconSelecter />
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded w-full "
          />
        </div>
        <Button>Add Category</Button>
      </DialogContent>
    </Dialog>
  );
};
