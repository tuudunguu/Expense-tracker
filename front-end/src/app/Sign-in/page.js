"use client";
import { Container } from "@/components/Container";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container background="bg-[#F3F4F6] " height="h-screen ">
      <div className="w-full h-full flex flex-row bg-white">
        <div className="w-full h-full  flex justify-center items-center ">
          <div className="w-[384px] h-[554px] flex flex-col justify-center items-center gap-y-10">
            <div className="w-full flex flex-row justify-center items-center gap-x-2">
              <img src="/pictures/Vector.png" className="w-6 h-6" />
              <h4>Geld</h4>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-y-2">
              <h4>Create Geld account</h4>
              <h6>Sign up below to create your Wallet accounts</h6>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-y-4">
              <Input
                type="name"
                placeholder="Name"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-12"
              />
              <Input
                type="Email"
                placeholder="Email"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-12"
              />
              <Input
                type="password"
                placeholder="REpassword"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-12"
              />
              <Input
                type="repassword"
                placeholder="REpassword"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-12"
              />
              <Link href="/Loading">
                <Button
                  variant="outline"
                  className="w-full rounded-2xl bg-[#0166FF]"
                >
                  <h3 className="text-xl font-normal text-white">Sign up</h3>
                </Button>
              </Link>
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-x-2">
              <h6>Don’t have account?</h6>
              <Link href="/Log-in">
                <h6 className="text-[#0166FF]">Log in</h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#0166FF]"></div>
      </div>
    </Container>
  );
}
