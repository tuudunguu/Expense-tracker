import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { Chart } from "@/components/ChartOfDashboard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container background="bg-[#F3F4F6]" height="h-screen">
        <div className=" w-full h-full flex flex-col gap-6 pt-6">
          <div className="w-full h-[220px] flex gap-6">
            <div className="w-1/3 h-full bg-slate-500 rounded-2xl">
              <img src="./pictures/Large.png" className="w-full h-full" />
            </div>
            <div className="w-1/3 h-full bg-white rounded-xl">
              <div className="w-full h-[56px] p-4 flex justify-start gap-2 items-center border-b-2 border-[#E2E8F0]">
                <div className="w-2 h-2 rounded-full bg-green-700"></div>
                <h5>Your Income</h5>
              </div>
              <div className="w-full h-fit flex flex-col justify-start p-6 items-start gap-y-4">
                <div className="w-full h-fit flex flex-col justify-start items-start">
                  <div className="w-full h-fit flex justify-start items-center">
                    <h4 className="text-4xl">1,200,000</h4>
                    <h4 className="text-4xl"> T</h4>
                  </div>
                  <h6 className="text-lg font-normal text-[#64748B]">
                    Your Income Amount
                  </h6>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                  <FaCircleArrowUp className="text-green-700" />
                  <div className="flex ">
                    <h6 className="text-lg font-normal text-[#000000]">30</h6>
                    <h6 className="text-lg font-normal text-[#000000]">
                      % from last month
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full bg-white rounded-xl">
              <div className="w-full h-[56px] p-4 flex justify-start gap-2 items-center border-b-2 border-[#E2E8F0]">
                <div className="w-2 h-2 rounded-full bg-red-700"></div>
                <h5>Total Expenses</h5>
              </div>
              <div className="w-full h-fit flex flex-col justify-start p-6 items-start gap-y-4">
                <div className="w-full h-fit flex flex-col justify-start items-start">
                  <div className="w-full h-fit flex justify-start items-center">
                    <h4 className="text-4xl">-</h4>
                    <h4 className="text-4xl">1,200,000</h4>
                    <h4 className="text-4xl"> T</h4>
                  </div>
                  <h6 className="text-lg font-normal text-[#64748B]">
                    Your Income Amount
                  </h6>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                  <FaCircleArrowDown className="text-green-700" />
                  <div className="flex ">
                    <h6 className="text-lg font-normal text-[#000000]">30</h6>
                    <h6 className="text-lg font-normal text-[#000000]">
                      % from last month
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[284px] flex gap-6 ">
            <div className="w-1/2 h-full bg-slate-500 rounded-xl">
              <Chart className="w-full h-full" />
            </div>
            <div className="w-1/2 h-full bg-slate-500 rounded-xl"></div>
          </div>
          <div className="w-full h-[456px] bg-slate-500 rounded-xl"></div>
        </div>
      </Container>
    </>
  );
}
