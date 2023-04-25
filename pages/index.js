import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { useEffect } from "react";
import MainContainer from "@/components/MainContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen mix-w-full bg-gray-900">
      <Header />
      <MainContainer />
    </main>
  );
}
