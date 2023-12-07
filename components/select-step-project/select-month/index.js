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

  const onClickBackGallery = () => {
    setIsShowYearContent(true);
    setIsShowMonth(false);
    setIsShowProject(false);
  };

  return (
    <>
      <div className="ms-16 mt-2 flex items-center">
        {/* <button type="button" onClick={onClickBack} className=" flex items-center text-white bg-transparent ">
          <FaArrowCircleLeft className="mr-1" color="black" size={34} /> */}

        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a href="#" onClick={() => onClickBackGallery()} class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Gallery
              </a>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Projects</span>
              </div>
            </li>
          </ol>
        </nav>
        {/* </button> */}
      </div>
      <div className="flex-1  justify-items-center  w-full mt-4 grid grid-cols-4 gap-x-8 gap-y-8 px-16">
        <CardMonth />
        <CardMonth />
      </div>
    </>
  );
}
