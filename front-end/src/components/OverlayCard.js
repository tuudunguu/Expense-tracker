import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";

export const OverlayCard = ({ open, width }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className={`flex gap-x-2 bg-[#0166FF] h-8 rounded-3xl `}>
          <img src="/pictures/Leading icon.png" className="" />
          <h6 className="text-white">{open}</h6>
        </Button>
      </DialogTrigger>
      <DialogContent>
        {/* <div className="flex flex-col justify-between items-start w-full h-full gap-y-10">
          <h4>Add Record</h4>
          <div className="w-full h-full flex flex-row justify-center items-center gap-x-12">
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-5">
              <div className="w-full h-fit flex flex-row justify-center items-center "></div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center"></div>
          </div>
        </div> */}
      </DialogContent>
    </Dialog>
  );
};
