import { Container } from "./Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Category } from "./Category";
import { IoMdAdd } from "react-icons/io";
import { Slider } from "@/components/ui/slider";

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

export const Records = ({}) => {
  return (
    <Container background="bg-[#F3F4F6]">
      <div className="w-full h-fit flex flex-row justify-between items-center py-6">
        <div className="w-fit h-fit px-4 py-6 flex flex-col justify-center items-start gap-y-6 bg-white rounded-xl">
          <h4>Records</h4>
          <Button className="flex  bg-[#0166FF] h-8 rounded-3xl w-full">
            <img src="/pictures/Leading icon.png" className="" />
            <h6 className="text-white">Add</h6>
          </Button>
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
                <Category content={item} />
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
                  <h6>0</h6>
                </div>
                <div
                  className="w-full p-4 bg-[#F3F4F6] rounded-lg border-2
                  border-[#D1D5DB]"
                >
                  <h6>1000</h6>
                </div>
              </div>
              <Slider defaultValue={[33]} max={100} step={4} />
              <div className="w-full h-fit flex flex-row justify-between items-center">
                <h6>0</h6>
                <h6>1000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
