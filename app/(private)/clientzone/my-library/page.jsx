"use client";

import React from "react";
import { CategoryFilter, LibraryCard, Card, Paginate, AddLibrary } from "./components";
import { useGetLibrariesQuery } from "@/redux/services/libraryApi";
import { useLibraryStore } from "./store";

export default function Page() {
  const { searchParams } = useLibraryStore();
  const { data } = useGetLibrariesQuery({ searchParams });

  return (
    <div className="flex flex-col gap-4 col-span-full">
      <p className="text-2xl font-bold text-primary text-center">My Drive</p>

      <Card layout="column" className="gap-6 p-4 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex-1">
            <CategoryFilter />
          </div>

          <AddLibrary />
        </div>

        <div className="flex flex-row flex-wrap gap-4">
          {data?.data?.data?.map((library) => (
            <LibraryCard key={library.id} data={library} />
          ))}
        </div>

        {/* <Paginate /> */}
      </Card>
    </div>
  );
}
