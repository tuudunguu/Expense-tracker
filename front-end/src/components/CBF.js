export const Cbf = ({ background2, background3, color2, color3 }) => {
  return (
    <div className="w-[240px] h-[136px] flex flex-col justify-center items-center gap-y-12">
      <div className="w-full flex flex-row justify-center items-center gap-x-2">
        <img src="/pictures/Vector.png" className="w-7 h-7" />
        <h4>Geld</h4>
      </div>
      <div className="w-full flex flex-row justify-between items-center ">
        <div className="w-fit h-fit flex flex-col justify-start items-center gap-y-1">
          <div className="w-5 h-5 rounded-[50%] bg-[#0166FF] flex justify-center items-center">
            <h6 className="text-white">1</h6>
          </div>
          <h6>Currency</h6>
        </div>
        <div className="w-fit h-fit flex flex-col justify-start items-center gap-y-1 ">
          <div
            className={`w-5 h-5 rounded-[50%] bg-[${background2}] flex justify-center items-center`}
          >
            <h6 className={`text-[${color2}]`}>2</h6>
          </div>
          <h6>Balance</h6>
        </div>
        <div className="w-fit h-fit flex flex-col justify-start items-center gap-y-1">
          <div
            className={`w-5 h-5 rounded-[50%] bg-[${background3}] flex justify-center items-center`}
          >
            <h6 className={`text-[${color3}]`}>3</h6>
          </div>
          <h6>Finish</h6>
        </div>
      </div>
    </div>
  );
};
