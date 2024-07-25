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

export const OverlayCard = ({ open, width }) => {
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
                <Button className="w-[148px] h-[40px] px-3 rounded-[20px] bg-[#0166FF]">
                  <h6 className="text-white">Expense</h6>
                </Button>
                <Button className="w-[148px] h-[40px] px-3 rounded-[20px] bg-[#F3F4F6] text-[]">
                  <h6 className="text-black">Income</h6>
                </Button>
              </div>
              <div className="w-full h-[76px] px-4 py-3 rounded-xl border-2 border-[#D1D5DB]">
                <h6>Amount</h6>
                <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-2">
                  <h6 className="text-[#9CA3AF] text-xl font-normal">T</h6>
                  <input
                    type="Tugrug"
                    placeholder="000.00"
                    className="w-[80px] h-[28px] text-xl font-normal"
                  />
                </div>
              </div>
              <div className="w-full h-fit flex flex-col justify-start items-start gap-y-1">
                <h6>Category</h6>
                <Select className="border-2 border-[#D1D5DB]">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lFood and Drink">
                      Food and Drink
                    </SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                    <SelectItem value="Housing">Housing</SelectItem>
                    <SelectItem value="Transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="Vehicle">Vehicle</SelectItem>
                    <SelectItem value="Life & Entertainment">
                      Life & Entertainment
                    </SelectItem>
                    <SelectItem value="Communication, PC">
                      Communication, PC
                    </SelectItem>
                    <SelectItem value="Financial expenses">
                      Financial expenses
                    </SelectItem>
                    <SelectItem value="Investments">Investments</SelectItem>
                    <SelectItem value="Income">Income</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full h-fit flex flex-row justify-between items-start gap-x-4">
                <div className="w-full h-fit flex flex-col justify-start items-start gap-y-1">
                  <h6>Date</h6>
                  <DatePickerWithPresets />
                </div>
                <div className="w-full h-fit flex flex-col justify-start items-start gap-y-1">
                  <h6>Time</h6>
                  <TimePicker className="w-full" />
                </div>
              </div>
              <Button className="w-full bg-[#0166FF]">Add Record</Button>
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
