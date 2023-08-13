import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
export default function ProjectCard() {
  return (
    <Link href={"/project/2"}>
      <div className="flex-col rounded-md">
        <Image
          src={
            "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
          }
          alt="depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
          width={1200}
          height={1200}
          className="object-cover mt-8 rounded-lg w-fit h-fit"
        />
        <div className="bg-[#0CADB7] rounded-b-lg p-4">
          <p className="font-semibold tracking-normal text-white">
            Website Hitung Otomatis
          </p>
          <p className="mt-2 text-sm font-normal tracking-normal text-white">
            Website Perhitungan otomatis gaji karyawan yang .... Read More.
          </p>
          <div className="flex flex-row justify-between flex-1 mt-2 item-center">
            <p className="text-xs font-thin tracking-normal text-white">
              at 20 Feb 2022
            </p>
            <Link href="/clientzone/project-list/1">
              <AiOutlineEdit className="w-5 h-5 flex-1 mx-2 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
