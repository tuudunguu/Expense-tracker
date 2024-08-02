"use client";

import { ChooseTheCategory } from "./ChooseTheCategory";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdAddCircle } from "react-icons/io";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithPresets } from "@/components/Calendar";
import { TimePicker } from "@/components/Time-picker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { AddCategory } from "./OverlayAddCategory";
import { Title } from "@radix-ui/react-dialog";
import axios from "axios";

export const OverlayCard = ({
  open,
  width,
  categoryName,
  setCategoryName,
  categoryIcon,
  setCategoryIcon,
  createCategory,
  isOpen,
  setIsOpen,
  category,
  createRecord,
  money,
  time,
  title,

  setMoney,
  setTime,
  setTitle,
}) => {
  const [expense, setExpense] = useState(true);
  const [income, setIncome] = useState(true);

  const handleColorChange = () => {
    setExpense(!expense);
  };
  console.log(handleColorChange);

  return (
    <Dialog>
      <DialogTrigger
        className={`flex gap-x-2 bg-[#0166FF] h-8 rounded-3xl  justify-center items-center px-4 ${width} hover:opacity-45 hover:bg-slate-600`}
      >
        <IoMdAddCircle className="text-white w-6 h-6" />
        <h6 className="text-white">{open}</h6>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col justify-between items-start w-full h-[512px] gap-y-10">
          <h4>Add Record</h4>
          <div className="w-full h-full flex flex-row justify-between items-center gap-x-12">
            <div className="w-full h-full flex flex-col justify-between items-center gap-y-5 flex-1">
              <div className="w-full h-fit flex flex-row justify-center items-center ">
                <Button
                  onClick={handleColorChange}
                  className={`w-[148px] h-[40px] px-3 rounded-[20px] ${
                    expense ? "bg-[#0166FF]" : "bg-[#F3F4F6]"
                  }`}
                >
                  <h6 className={` ${expense ? "text-white" : "text-black"}`}>
                    Expense
                  </h6>
                </Button>

                <Button
                  onClick={handleColorChange}
                  className={`w-[148px] h-[40px] px-3 rounded-[20px] ${
                    expense ? "bg-[#F3F4F6]" : "bg-[#16A34A]"
                  }`}
                >
                  <h6 className={` ${expense ? "text-black" : "text-white"}`}>
                    Income
                  </h6>
                </Button>
              </div>
              <div className="w-full h-[76px] px-4 py-3 rounded-xl border-2 border-[#D1D5DB]">
                <h6>Amount</h6>
                <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-2">
                  <h6 className="text-[#9CA3AF] text-xl font-normal">T</h6>
                  <input
                    value={money}
                    placeholder="000.00"
                    className="w-[80px] h-[28px] text-xl font-normal"
                    onChange={(event) => {
                      setMoney(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full h-fit flex flex-col justify-start items-start gap-y-1">
                <h6>Category</h6>
                <ChooseTheCategory
                  createCategory={createCategory}
                  categoryName={categoryName}
                  setCategoryName={setCategoryName}
                  categoryIcon={categoryIcon}
                  setCategoryIcon={setCategoryIcon}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  category={category}
                  setTitle={setTitle}
                  title={title}
                />
              </div>
              <div className="w-full h-fit flex flex-row justify-between items-start gap-x-4">
                <div className="w-full h-fit flex flex-col justify-start items-start gap-y-1">
                  <h6>Date</h6>
                  <DatePickerWithPresets />
                </div>
                <div className="w-full h-fit flex flex-col justify-start items-start gap-y-1">
                  <h6>Time</h6>
                  <Input
                    type="time"
                    value={time}
                    className="w-full h-fit border-2 border-[#D1D5DB] rounded-[8px]"
                    onChange={(event) => {
                      setTime(event.target.value);
                    }}
                  />
                </div>
              </div>
              <Button
                className={`w-full ${
                  expense ? "bg-[#0166FF]" : "bg-[#16A34A]"
                }`}
                onClick={createRecord}
              >
                Add Record
              </Button>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-start flex-1">
              <h6>Payee</h6>
              <div className="w-full h-fit  bg-#F9FAFB p-4 flex  flex-row justify-between items-center border-2 border-[#D1D5DB] rounded-[8px]">
                <Input placeholder="write here" />
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <h6>Note</h6>
              <Textarea placeholder="Write here" className="w-full h-full" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
