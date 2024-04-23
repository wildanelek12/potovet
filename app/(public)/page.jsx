"use client";

import SearchBoxHero from "@/components/search-bar-home";
import RecentSearch from "@/components/recent-search";
import FilterProject from "@/components/filter-project";
import Project from "@/components/project";
import { useGetFeedsQuery } from "@/redux/services/feedApi";
import { useState } from "react";

export default function Page() {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const [sorter, setSorter] = useState("popular");
  const { data } = useGetFeedsQuery({
    searchParams: {
      q: searchValue,
      category: category,
      perPage: 1000,
      sort_by: sorter,
    },
  });

  const handleSearchChange = (value) => {
    // Perform any additional actions you need with the search value
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchValue(event.target.value);
    }
  };

  const onClickCategory = (category) => {
    setCategory(category);
  };

  const handleSorterChange = (selectedOption) => {
    setSorter(selectedOption.name.toLowerCase());
  };

  return (
    <div className="">
      <div
        id="hero"
        className="flex flex-col items-center py-16 bg-primary "
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.7), rgba(0, 0, 0,0.3)),url("/bg-profile.jpg")`,
          height: "fit-content",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="mt-12 text-4xl font-bold leading-snug tracking-wide text-center text-white">Buat Portofoliomu Sekarang</p>
        <p className="mt-8 text-2xl font-normal leading-snug tracking-wide text-center text-white">{'"Berbagi pengalaman belajarmu dalam sebuah portofolio dan miliki kesempatan karir terbaik"'}</p>
        <SearchBoxHero className="mt-4" onSearchChange={handleSearchChange} onKeyPress={handleKeyPress} />
        <div className="flex flex-row items-center mt-8 space-x-4">
          <p className="text-white">Trending Search</p>
          <div onClick={() => onClickCategory("")} style={{ cursor: "pointer" }}>
            <RecentSearch title={"All"} />
          </div>
          <div onClick={() => onClickCategory("1")} style={{ cursor: "pointer" }}>
            <RecentSearch title={"Academic"} />
          </div>
          <div onClick={() => onClickCategory("2")} style={{ cursor: "pointer" }}>
            <RecentSearch title={"Professional"} />
          </div>
          <div onClick={() => onClickCategory("3")} style={{ cursor: "pointer" }}>
            <RecentSearch title={"Research"} />
          </div>
          <div onClick={() => onClickCategory("4")} style={{ cursor: "pointer" }}>
            <RecentSearch title={"Informal Trainings"} />
          </div>
          <div onClick={() => onClickCategory("5")} style={{ cursor: "pointer" }}>
            <RecentSearch title={"Case Study"} />
          </div>
        </div>
      </div>

      <div id="company" className="flex flex-col px-32 py-8">
        <div className="w-fit">
          <FilterProject onChange={handleSorterChange} />
        </div>

        <div className="grid gap-5 mt-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
          {data?.data?.data?.map((val, i) => (
            <Project key={i} data={val} />
          ))}
        </div>
      </div>
    </div>
  );
}
