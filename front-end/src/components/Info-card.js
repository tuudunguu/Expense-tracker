import { Checkbox } from "@/components/ui/checkbox";

export const InfoCard = ({ icon, title, time, number, color }) => {
  return (
    <div className="w-full h-[64px] px-6 py-3 flex flex-row justify-between items-center bg-[#FFF] border-1 border-[#E5E7EB] rounded-xl">
      <div className="w-fit h-full  flex flex-row justify-center items-center gap-x-6">
        <Checkbox />
        <img src={icon} />
        <div className="w-fit h-full flex flex-col justify-between items-start">
          <h6>{title}</h6>
          <h3 className="text-xs font-normal text-[#6B7280]">{time}</h3>
        </div>
      </div>
      <div className="w-fit h-full flex flex-row justify-center items-center">
        <h5 className={`${color}`}>- {number}</h5>
      </div>
    </div>
  );
};
