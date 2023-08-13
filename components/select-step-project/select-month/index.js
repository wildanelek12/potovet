import CardMonth from "@/components/month-card";
import React from "react";

export default function SelectMonth() {
  return (
    <div className="flex-1  justify-items-center  w-full mt-4 grid grid-cols-4 gap-x-8 gap-y-8 px-16">
      <CardMonth />
      <CardMonth />
    </div>
  );
}
