import CardYear from "@/components/year-card";
import { showMonthContent, showYearContent } from "@/recoil/atom";
import React from "react";
import { useSetRecoilState } from "recoil";

export default function SelectYear() {
  const setIsShowMonth = useSetRecoilState(showMonthContent);
  const setIsShowYear = useSetRecoilState(showYearContent);
  return (
    <div className="flex-1 w-full mt-4 lg:grid grid-cols-5 gap-8 px-16 md:grid-cols-3 sm:grid-cols-1 ">
      <CardYear />
    </div>
  );
}
