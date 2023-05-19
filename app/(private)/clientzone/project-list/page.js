"use client";

import FilterProject from "@/components/filter-project";
import Card from "../../Parts/Card";
import Select from "../../Parts/Select";
import ProjectCard from "@/components/project-card";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";

export default function Page() {
  const optionYears = [
    { id: 1, name: "2022", unavailable: false },
    { id: 2, name: "2023", unavailable: false },
  ];
  const optionMonth = [
    { id: 1, name: "January", unavailable: false },
    { id: 2, name: "February", unavailable: false },
  ];
  return (
    <>
      <p className="col-span-12 mt-4">Project List</p>

      <Card className="col-span-full p-8 h-fit border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <div className="grid grid-cols-5 gap-x-2">
          <Select options={optionYears} />
          <Select options={optionMonth} />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mt-8">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://lh5.googleusercontent.com/8gwdZIlrONenDA5NJsi6tLsSFXOijfkzeOOVTEG8P1u2lPntRLKdgL6ozNkldkvb8Fcf801B6s2pj2_dNtoaVTTKDlHSZ6ViSwgZZPi8JtlbUUKGiiyvInV2IbC_49BjB1xgcKgc"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-md font-bold tracking-tight text-gray-500">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex flex-row">
                <button
                  type="button"
                  class="text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
                >
                  Read More
                </button>
                <Link href="/clientzone/project-list/1">
                  <button
                    type="button"
                    class="text-white bg-secondary hover:bg-secondary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
                  >
                    <AiOutlineEdit class="w-5 h-5 mr-2 -ml-1" />
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
