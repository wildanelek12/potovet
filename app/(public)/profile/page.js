"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import UserProfile from "./user_profile/form";
import { useRecoilState } from "recoil";
import { atomFormUserProfile, atomToken } from "@/recoil/atom";

export default function page() {
  const [rendered, setRendered] = useState(false);
  const [userData, setUserData] = useRecoilState(atomFormUserProfile);
  const [token, setToken] = useRecoilState(atomToken);

  async function getUserData() {
    console.log(token);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);

    var requestOptions = {
      method: "GET",
      headers : myHeaders
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "user",
        requestOptions
      );
      if (response.status == 200) {
        var data = await response.json();
        console.log(data);
      } else {
        var message = await response.json();
        setErrorMessage(message.message);
      }
      // 👉️ 200
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setRendered(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const local_token = localStorage.getItem("token");
    if (local_token) {
      setToken(local_token);
      console.log(token);
      getUserData();
    }
  }, []);
  return (
    <div className="flex w-1/2 flex-col  mt-20 mx-auto  ">
      <div className="flex flex-row gap-x-8">
        <Image
          src={
            "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
          }
          width={600}
          height={600}
          className="rounded-full w-20 h-20 object-cover "
        />
        <div className="flex flex-col ">
          <p className="font-bold text-xl text-black tracking-wide">
            M Wildan Romiza
          </p>
          <p className="font-normal text-sm text-black tracking-wide">
            Set up your POTOVET Account
          </p>
        </div>
      </div>
      <div className="flex-1 w-full flex flex-row gap-x-8 mt-8">
        <div className="basis-1/3 ">
          <div class="">
            <a
              href="#!"
              aria-current="true"
              class="block w-full  bg-primary cursor-pointer rounded-lg bg-primary-100 px-4 py-2 text-white"
            >
              User Profile
            </a>
            <a
              href="#!"
              class="block w-full cursor-pointer rounded-lg px-4 py-2 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
            >
              Skills
            </a>
            <a
              href="#!"
              class="block w-full cursor-pointer rounded-lg px-4 py-2 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
            >
              Work Experience
            </a>
            <a
              href="#!"
              class="block w-full cursor-pointer rounded-lg px-4 py-2 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
            >
              Education
            </a>
            <a
              href="#!"
              class="block w-full cursor-pointer rounded-lg px-4 py-2 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
            >
              Interest
            </a>
            <a
              href="#!"
              class="block w-full cursor-pointer rounded-lg px-4 py-2 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
            >
              Social Media
            </a>
          </div>
        </div>
        <div className=" basis-2/3 ">{rendered && <UserProfile />}</div>
      </div>
    </div>
  );
}
