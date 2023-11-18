import CardMonth from "@/components/month-card";
import { showMonthContent, showProjectContent, showYearContent } from "@/recoil/atom";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function SelectMonth() {
  const setIsShowMonth = useSetRecoilState(showMonthContent);
  const setIsShowProject = useSetRecoilState(showProjectContent);
  const setIsShowYearContent = useSetRecoilState(showYearContent);

  const onClickBack = () => {
    setIsShowYearContent(true);
    setIsShowMonth(false);
    setIsShowProject(false);
  };

  return (
    <>
      <div className="ms-16 mt-2 flex items-center">
        <button
          type="button"
          onClick={onClickBack}
          className=" flex items-center text-white bg-transparent "
        >
          <FaArrowCircleLeft className="mr-1" color="black" size={34}/>
          
        </button>
      </div>
      <div className="flex-1  justify-items-center  w-full mt-4 grid grid-cols-4 gap-x-8 gap-y-8 px-16">
        <CardMonth />
        <CardMonth />
      </div>
    </>
  );
}
