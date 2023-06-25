"use client";

import FilterProject from "@/components/filter-project";
import Card from "../../Parts/Card";
import Select from "../../Parts/Select";
import ProjectCard from "@/components/project-card";
import Link from "next/link";
import { useState } from "react";
import ProjectListCard from "../../Parts/ProjectCard";

export default function Page() {
  const optionYears = [
    { id: 1, name: "2022", unavailable: false },
    { id: 2, name: "2023", unavailable: false },
  ];
  const optionMonth = [
    { id: 1, name: "January", unavailable: false },
    { id: 2, name: "February", unavailable: false },
  ];

  const [year, setYear] = useState(optionYears[0]);
  const [month, setMonth] = useState(optionMonth[0]);
  return (
    <>
      <p className="col-span-12 mt-4">Project List</p>

      <Card className="col-span-full p-8 h-fit border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <div className="grid grid-cols-5 gap-x-2">
          <Select
            options={optionYears}
            defaultValue={optionYears[0]}
            selected={year}
            onChange={(e) => setYear(e)}
            label={""}
          />
          <Select
            options={optionMonth}
            defaultValue={optionMonth[0]}
            selected={month}
            onChange={(e) => setMonth(e)}
            label={""}
          />
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mt-8">
          <ProjectListCard status={"draft"}/>
          <ProjectListCard status={"edit"}/>
          <ProjectListCard status={"publish"}/>
        </div>
      </Card>
    </>
  );
}
