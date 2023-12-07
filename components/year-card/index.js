import { showMonthContent, showYearContent } from "@/recoil/atom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";

export default function CardYear() {
  const setIsShowMonth = useSetRecoilState(showMonthContent);
  const setIsShowYear = useSetRecoilState(showYearContent);
  return (
    <>
      <div
        className="flex flex-row px-8 py-6 rounded-lg"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(12, 173, 183, 0.7),rgba(230, 132, 110, 0.9)),url("/bg-profile.jpg")`,
          height: "fit-content",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain,cover",
        }}
      >
        <div className="flex flex-col basis-2/3">
          <Image width={50} height={51} src={"/calendar-card.svg"} alt="" />
          <p className="mt-4 text-6xl font-bold text-white">2023</p>
          <p className="mt-2 text-2xl font-normal text-white">3 Project</p>
        </div>
        <div className="flex items-center justify-center basis-1/3 cursor-pointer ">
          <Image
            width={50}
            height={51}
            src={"/arrow.svg"}
            onClick={() => {
              setIsShowMonth(true);
              setIsShowYear(false);
            }}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
