"use client";

import Select from "../../Parts/Select";
import { useState } from "react";
import { optionMonth, optionStatus, optionYears } from "./constants";
import { useGetProjectsQuery } from "@/redux/services/projectApi";

import { ProjectCard, Card } from "./components";
import { DatePicker, Space } from "antd";

export default function Page() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [status, setStatus] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { data } = useGetProjectsQuery({
    searchParams: {
      q: searchValue,
      status,
      year,
      month,
      perPage: 10000,
    },
  });

  const onChangeDate = (date, dateString) => {
    console.log();
    setYear(date.format("YYYY"));
    setMonth(date.format("M "));
  };

  const onChangeStatus = (event) => {
    console.log(event.id);
    setStatus(event.id);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    }
  };

  return (
    <div className="flex flex-col gap-4 col-span-full">
      <p className="text-2xl font-bold text-primary text-center">My Portfolio</p>

      <Card layout="column" className="gap-6 p-4 sm:p-8">
        <div className="flex flex-col gap-2 sm:items-center sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row basis-2/3">
            <div className="flex flex-col w-full gap-1">
              <DatePicker onChange={onChangeDate} picker="month" />
            </div>

            <Select options={optionStatus} defaultValue={optionStatus[0]} selected={status} onChange={onChangeStatus} />
          </div>

          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4">
          {data?.data?.data?.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </Card>
    </div>
  );
}
