"use client";

import { Container } from "./Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Category } from "./Category";
import { IoMdAdd } from "react-icons/io";
import { Slider } from "@/components/ui/slider";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { InfoCard } from "./Info-card";
import { OverlayCard } from "./OverlayCard";
import React, { useState } from "react";
import { AddCategory } from "./OverlayAddCategory";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  "Food and Drink",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];

const cardData = [
  { title: "Lending & Renting", time: "12:01", number: "1000" },
  { title: "Lending & Renting", time: "12:01", number: "1000" },
  { title: "Lending & Renting", time: "12:01", number: "1000" },
  { title: "Lending & Renting", time: "12:01", number: "1000" },
  { title: "Lending & Renting", time: "12:01", number: "1000" },
  { title: "Lending & Renting", time: "12:01", number: "1000" },
  { title: "Lending & Renting", time: "12:01", number: "1000" },
  { title: "Lending & Renting", time: "12:01", number: "1000" },
  { title: "Lending & Renting", time: "12:01", number: "1000" },
  { title: "Lending & Renting", time: "12:01", number: "1000" },
];

export const Records = ({}) => {
  const [values, setValues] = useState([0, 1000]);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
  };
  return (
    <Container background="bg-[#F3F4F6]" height="h-[1080px]">
      <div className="w-full h-full flex flex-row justify-between items-center py-6 ">
        <div className="w-fit h-full px-4 py-6 flex flex-col justify-between items-start gap-y-6 bg-white rounded-xl">
          <h4>Records</h4>
          <OverlayCard open="Add" width="w-full" />

          <Input
            type="search"
            placeholder="Search"
            className="w-full h-[32px]"
          />
          <div className="w-fit h-fit flex flex-col justify-center items-start gap-y-4">
            <h5>Types</h5>
            <RadioGroup
              defaultValue="default"
              className="flex flex-col ml-4 gap-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-one">Income</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-two">Expense</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="w-fit h-fit flex flex-col justify-center items-start gap-y-4">
            <h5>Category</h5>
            <div className="w-fit h-fit flex-col justify-between items-center gap-y-4">
              {data.map((item) => (
                <Category key={item} content={item} />
              ))}
              <div className="flex flex-row justify-start items-center gap-x-2">
                <IoMdAdd className="text-blue-600 h-5 w-5" />
                <h6>Add Category</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-y-4 w-full h-fit">
            <h5>Amount Range</h5>
            <div className="flex flex-col justify-center items-center w-full h-fit gap-y-4">
              <div className="flex flex-row justify-between items-center w-full h-fit gap-x-4">
                <div className="w-full p-4 bg-[#F3F4F6] rounded-lg border-2 border-[#D1D5DB]">
                  <h6>{values[0]}</h6>
                </div>
                <div
                  className="w-full p-4 bg-[#F3F4F6] rounded-lg border-2
                  border-[#D1D5DB]"
                >
                  <h6>{values[1]}</h6>
                </div>
              </div>
              <Slider
                defaultValue={[0, 1000]}
                value={values}
                onValueChange={handleSliderChange}
                max={1000}
                step={5}
                range
              />
              <div className="w-full h-fit flex flex-row justify-between items-center">
                <h6>0</h6>
                <h6>1000</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center py-5 pl-5 gap-y-4">
          <div className="w-full h-fit flex flex-row justify-between items-center">
            <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-4">
              <Button className="bg-[#E5E7EB]">
                <FaAngleLeft className="w-6 h-6 text-black" />
              </Button>
              <h6>Last 30 Days</h6>
              <Button className="bg-[#E5E7EB]">
                <FaAngleRight className="w-6 h-6 text-black" />
              </Button>
            </div>
            <Select className="border-1 border=[#D1D5DB]">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Newest First">Newest First</SelectItem>
                <SelectItem value="Oldest First">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-center overflow-y-scroll">
            <div className="w-full h-fit flex flex-col justify-start items-center gap-y-6">
              <div className="w-full h-[48px] px-6 py-3 flex flex-row justify-between items-center bg-[#FFF] border-1 border-[#E5E7EB] rounded-xl">
                <div className="w-fit h-full flex flex-row justify-center items-center gap-x-4">
                  <Checkbox />
                  <h6>Select All</h6>
                </div>

                <h5 className="text-[#94A3B8]">- 35500</h5>
              </div>
              <div className="w-full h-fit flex flex-col justify-center items-start gap-y-3">
                <h5>Today</h5>
                <div className="w-full h-fit flex flex-col justify-center items-center gap-y-3">
                  {cardData.map((item) => (
                    <InfoCard
                      key={item.title}
                      title={item.title}
                      time={item.time}
                      number={item.number}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full h-fit flex flex-col justify-center items-start gap-y-3">
                <h5>Yesterday</h5>
                <div className="w-full h-fit flex flex-col justify-center items-center gap-y-3">
                  {cardData.map((item) => (
                    <InfoCard
                      key={item.title}
                      title={item.title}
                      time={item.time}
                      number={item.number}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full h-fit flex flex-col justify-center items-start gap-y-3">
                <h5>this week</h5>
                <div className="w-full h-fit flex flex-col justify-center items-center gap-y-3">
                  {cardData.map((item) => (
                    <InfoCard
                      key={item.title}
                      title={item.title}
                      time={item.time}
                      number={item.number}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full h-fit flex flex-col justify-center items-start gap-y-3">
                <h5>This month</h5>
                <div className="w-full h-fit flex flex-col justify-center items-center gap-y-3">
                  {cardData.map((item) => (
                    <InfoCard
                      key={item.title}
                      title={item.title}
                      time={item.time}
                      number={item.number}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
