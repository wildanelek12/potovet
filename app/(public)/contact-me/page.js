import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <section class="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
      <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap ">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div class="relative">
              <Image src="/foto.jpg" alt="" width={1000} height={1000} class="relative z-40 object-contain w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
              <div class="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
            </div>
          </div>
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div class="relative">
              <h1 class="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">Contact me</h1>
              <h1 class="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">Contact Me</h1>
            </div>
            <p class="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
              Shofiyah adalah salah satu mahasiswa doktoral di Universiti Malaya, Kuala Lumpur, Malaysia. Ia memiliki fokus penelitian pada bidang pendidikan dengan subyek pengembangan perangkat lunak
              yang ditujukan untuk bidang pembelajaran, pengajaran, dan pendidikan. Saat ini topik penelitian yang ia lakukan akan ditekankan pada bidang pendidikan vokasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
