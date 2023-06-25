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
          width={1200}
          height={1200}
          className="rounded-lg w-fit h-fit object-cover mt-8"
        />
        <div className="bg-[#0CADB7] rounded-b-lg p-4">
          <p className="text-white font-semibold tracking-normal">
            Website Hitung Otomatis
          </p>
          <p className="text-white font-normal text-sm mt-2 tracking-normal">
            Website Perhitungan otomatis gaji karyawan yang .... Read More.
          </p>
          <div className="flex flex-row flex-1 item-center mt-2 justify-between">
            <p className="text-white font-thin text-xs tracking-normal">
              at 20 Feb 2022
            </p>
            <Link href="/clientzone/project-list/1">
              <AiOutlineEdit class="w-5 h-5 flex-1 mx-2 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
