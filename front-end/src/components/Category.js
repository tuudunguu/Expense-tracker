"use client";

import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";

export const Category = ({ content, onDelete, onClick, value }) => {
  const [eye, setEye] = useState(true);

  const handleSwitch = () => {
    setEye(!eye);
  };
  return (
    <div className="w-[250px] h-[32px] flex flex-row justify-between items-center">
      <div className="w-fit h-full flex flex-row justify-center items-center gap-x-2">
        <button onClick={handleSwitch}>{eye ? <IoEye /> : <IoEyeOff />}</button>

        <h6 onClick={onClick} className="cursor-pointer">
          {content}
        </h6>
      </div>
      <MdOutlineNavigateNext onClick={onDelete} />
    </div>
  );
};
