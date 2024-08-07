"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Category } from "./Category";
import { IoMdAdd } from "react-icons/io";
import { Slider } from "@/components/ui/slider";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { InfoCard } from "./Info-card";
import { OverlayCard } from "./OverlayCard";
import { AddCategory } from "./OverlayAddCategory";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parseISO, isSameDay, subDays, subWeeks, subMonths } from "date-fns";

export const Records = () => {
  const [values, setValues] = useState([0, 1000]);
  const [category, setCategory] = useState([]);
  const [record, setRecord] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState("");
  const [categoryIconSelect, setCategoryIconSelect] = useState("");
  const [open, setOpen] = useState(false);
  const [money, setMoney] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [statusChoose, setStatusChoose] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/records");
      setRecord(response.data);
    };
    getData();
  }, []);

  const TotalMoney = (arr) => {
    let sum = 0;
    arr.forEach((item) => {
      const amount = parseFloat(item.money);
      if (item.status === "expense") {
        sum -= amount;
      } else if (item.status === "income") {
        sum += amount;
      }
    });
    return sum;
  };

  const createRecord = async () => {
    if (!money || !time || !title || !status || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const newRecord = { money, time, title, status, date };

    try {
      const response = await axios.post(
        "http://localhost:3001/records",
        newRecord
      );
      setRecord([...record, response.data]);
    } catch (error) {
      console.error("Error creating record:", error);
    }
  };

  const deleteRecord = async (id) => {
    await axios.delete(`http://localhost:3001/records/${id}`);
    setRecord((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/categories");
      setCategory(response.data);
    };
    getData();
  }, []);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
  };

  const createCategory = async () => {
    const newCategory = {
      categoryName,
      categoryIcon,
    };

    const response = await axios.post(
      "http://localhost:3001/categories",
      newCategory
    );
    setCategory([...category, response.data]);

    setOpen(false);
  };

  const deleteCategory = async (id) => {
    await axios.delete(`http://localhost:3001/categories/${id}`);
    setCategory((prev) => prev.filter((item) => item.id !== id));
  };

  const categorizeRecords = (records) => {
    const today = new Date();
    const yesterday = subDays(today, 1);
    const lastWeek = subWeeks(today, 1);
    const lastMonth = subMonths(today, 1);

    const todayRecords = [];
    const yesterdayRecords = [];
    const lastWeekRecords = [];
    const lastMonthRecords = [];

    records.forEach((record) => {
      const recordDate = parseISO(record.date);

      if (isSameDay(recordDate, today)) {
        todayRecords.push(record);
      } else if (isSameDay(recordDate, yesterday)) {
        yesterdayRecords.push(record);
      } else if (recordDate >= lastWeek) {
        lastWeekRecords.push(record);
      } else if (recordDate >= lastMonth) {
        lastMonthRecords.push(record);
      }
    });

    return {
      todayRecords,
      yesterdayRecords,
      lastWeekRecords,
      lastMonthRecords,
    };
  };

  const statuses = ["All", "Income", "Expense"];

  const selectStatus = (status) => {
    switch (status) {
      case "Income":
        return record.filter((item) => item.status === "income");
      case "Expense":
        return record.filter((item) => item.status === "expense");
      case "All":
      default:
        return record;
    }
  };

  const filteredRecordsByStatus = selectStatus(statusChoose);
  const { todayRecords, yesterdayRecords, lastWeekRecords, lastMonthRecords } =
    categorizeRecords(filteredRecordsByStatus);

  return (
    <Container background="bg-[#F3F4F6]" height="h-[1080px]">
      <div className="w-full h-full flex flex-row justify-between items-center py-6 ">
        <div className="min-w-[282px] h-full px-4 py-6 flex flex-col justify-between items-start gap-y-6 bg-white rounded-xl">
          <h4>Records</h4>
          <OverlayCard
            open="Add"
            width="w-full"
            createCategory={createCategory}
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            categoryIcon={categoryIcon}
            setCategoryIcon={setCategoryIcon}
            isOpen={open}
            setIsOpen={setOpen}
            category={category}
            createRecord={createRecord}
            money={money}
            time={time}
            title={title}
            setMoney={setMoney}
            setTime={setTime}
            setTitle={setTitle}
            status={status}
            setStatus={setStatus}
            date={date}
            setDate={setDate}
            setCategoryIconSelect={setCategoryIconSelect}
            categoryIconSelect={categoryIconSelect}
          />

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
              value={statusChoose}
              onValueChange={(event) => {
                setStatusChoose(event);
              }}
            >
              {statuses.map((item) => (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={`${item}`} id={`${item}`} />
                  <Label htmlFor={`${item}`}>{item}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="w-fit h-[520px] flex flex-col justify-between items-start gap-y-4">
            <h5>Category</h5>
            <div className="w-fit h-full flex-col justify-between items-center gap-y-4">
              <div className="w-fit h-full flex flex-col justify-center">
                <div className="w-fit h-[440px] overflow-y-scroll">
                  {category.map((item) => (
                    <Category
                      key={item.id}
                      content={item.categoryName}
                      onDelete={() => deleteCategory(item.id)}
                    />
                  ))}
                </div>
                <div className="flex flex-row justify-start items-center gap-x-2">
                  <IoMdAdd className="text-blue-600 h-5 w-5" />
                  <AddCategory
                    open="Add Category"
                    createCategory={createCategory}
                    categoryName={categoryName}
                    setCategoryName={setCategoryName}
                    categoryIcon={categoryIcon}
                    setCategoryIcon={setCategoryIcon}
                    isOpen={open}
                    setIsOpen={setOpen}
                  />
                </div>
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

                <h5
                  className={`${
                    TotalMoney(record) < 0 ? "text-red-700" : "text-green-700"
                  }`}
                >
                  {TotalMoney(record)}
                </h5>
              </div>
              {todayRecords.length > 0 && (
                <div className="w-full h-fit flex flex-col justify-center items-start gap-y-3">
                  <h5>Today</h5>
                  <div className="w-full h-fit flex flex-col justify-center items-center gap-y-3">
                    {todayRecords.map((item, index) => (
                      <InfoCard
                        key={item.title + index}
                        title={item.title}
                        time={item.time}
                        number={item.money}
                        icon={item.categoryIcon}
                        onDelete={() => deleteRecord(item.id)}
                        status={item.status}
                      />
                    ))}
                  </div>
                </div>
              )}
              {yesterdayRecords.length > 0 && (
                <div className="w-full h-fit flex flex-col justify-center items-start gap-y-3">
                  <h5>Yesterday</h5>
                  <div className="w-full h-fit flex flex-col justify-center items-center gap-y-3">
                    {yesterdayRecords.map((item, index) => (
                      <InfoCard
                        key={item.title + index}
                        title={item.title}
                        time={item.time}
                        number={item.money}
                        icon={item.categoryIcon}
                        onDelete={() => deleteRecord(item.id)}
                        status={item.status}
                      />
                    ))}
                  </div>
                </div>
              )}
              {lastWeekRecords.length > 0 && (
                <div className="w-full h-fit flex flex-col justify-center items-start gap-y-3">
                  <h5>Last Week</h5>
                  <div className="w-full h-fit flex flex-col justify-center items-center gap-y-3">
                    {lastWeekRecords.map((item, index) => (
                      <InfoCard
                        key={item.title + index}
                        title={item.title}
                        time={item.time}
                        number={item.money}
                        icon={item.categoryIcon}
                        onDelete={() => deleteRecord(item.id)}
                        status={item.status}
                      />
                    ))}
                  </div>
                </div>
              )}
              {lastMonthRecords.length > 0 && (
                <div className="w-full h-fit flex flex-col justify-center items-start gap-y-3">
                  <h5>Last Month</h5>
                  <div className="w-full h-fit flex flex-col justify-center items-center gap-y-3">
                    {lastMonthRecords.map((item, index) => (
                      <InfoCard
                        key={item.title + index}
                        title={item.title}
                        time={item.time}
                        number={item.money}
                        icon={item.categoryIcon}
                        onDelete={() => deleteRecord(item.id)}
                        status={item.status}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
