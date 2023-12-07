import { showMonthContent, showProjectContent } from "@/recoil/atom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";

export default function CardMonth() {
  const setIsShowMonth = useSetRecoilState(showMonthContent);
  const setIsShowProject = useSetRecoilState(showProjectContent);
  return (
    <>
      <div
        className="flex flex-col px-8 py-6 rounded-lg bg-primary w-full"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(12, 173, 183, 0.95),rgba(230, 132, 110, 0.9)),url("/bg-profile.jpg")`,
          height: "fit-content",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain,cover",
        }}
      >
        <div className="flex flex-col items-center justify-center basis-1/2">
          <p className="mt-4 text-4xl font-bold text-white uppercase">January</p>
          <p className="mt-2 text-2xl font-normal text-white">3 Project</p>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-center basis-1/2 cursor-pointer">
          <Image
            width={50}
            height={51}
            src={"/arrow.svg"}
            onClick={() => {
              setIsShowMonth(false);
              setIsShowProject(true);
            }}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
