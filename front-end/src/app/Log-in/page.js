"use client";
import { Container } from "@/components/Container";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useAuth } from "@/components/context/AuthProvider";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  return (
    <Container background="bg-[#F3F4F6] " height="h-screen ">
      <div className="w-full h-full flex flex-row bg-white">
        <div className="w-full h-full  flex justify-center items-center ">
          <div className="w-[384px] h-[426px] flex flex-col justify-center items-center gap-y-10">
            <div className="w-full flex flex-row justify-center items-center gap-x-2">
              <img src="/pictures/Vector.png" className="w-6 h-6" />
              <h4>Geld</h4>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-y-2">
              <h4>Welcome Back</h4>
              <h6>Welcome back, Please enter your details</h6>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-y-4">
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-12"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-12"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                variant="outline"
                className="w-full rounded-2xl bg-[#0166FF]"
                onClick={() => login(email, password)}
              >
                <h3 className="text-xl font-normal text-white">Log in</h3>
              </Button>
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-x-2">
              <h6>Don’t have account?</h6>
              <Link href="/Sign-in">
                <h6 className="text-[#0166FF]">Sign up</h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#0166FF]"></div>
      </div>
    </Container>
  );
}
