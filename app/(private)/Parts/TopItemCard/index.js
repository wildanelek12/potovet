import React from "react";
import Image from "next/image";

export default function TopItemCard({ src, name, rank }) {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="basis-2/6">
          <Image
            src={src}
            alt=""
            className="object-fill w-full h-20"
            width={120}
            height={120}
          />
        </div>

        <div className="ml-4 text-sm font-normal basis-3/6">
          <p>{name}</p>
        </div>
        <div className="basis-1/6/">
          <span className="bg-blue-100 text-blue-800 text-lg font-bold mr-2 p-3 rounded-3xl dark:bg-blue-900 dark:text-blue-300">
            {rank}
          </span>
        </div>
      </div>
    </>
  );
}
