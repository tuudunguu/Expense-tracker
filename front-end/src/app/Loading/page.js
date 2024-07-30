"use client";
import { Container } from "@/components/Container";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-fit h-fit flex flex-col justify-center gap-y-10">
        <div className="w-fit flex flex-row justify-center items-center gap-x-4">
          <img src="/pictures/Vector.png" className="w-11 h-11" />
          <h4 className="text-[40px]">Geld</h4>
        </div>
        <div className="w-fit h-fit flex flex-col justify-center items-center gap-y-4">
          <AiOutlineLoading3Quarters className="w-8 h-8" />
          <Link href="/Currency">
            <h5>Түр хүлээнэ үү...</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
