"use client";

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
      <DialogTrigger>
        <Button>{open}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
          <DialogDescription>
            Add your new category details below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="Category Name"
            className="border p-2 rounded"
          />
          <Button>Add Category</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
