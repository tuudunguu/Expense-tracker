"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center gap-y-12">
        <div className="flex flex-row justify-center items-center gap-x-4">
          <img src="/pictures/Vector.png" className="w-11 h-11" alt="Logo" />
          <h4 className="text-[40px]">Geld</h4>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-6"></div>
          <p className="text-lg text-gray-800">Түр хүлээнэ үү...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-y-12">
      <div className="flex flex-row justify-center items-center gap-x-4">
        <img src="/pictures/Vector.png" className="w-11 h-11" alt="Logo" />
        <h4 className="text-[40px]">Geld</h4>
      </div>
      <Link href="/Currency">
        <h6>Go to Currency Page</h6>
      </Link>
    </div>
  );
}
