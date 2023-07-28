'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect,useState } from "react";
import Input from "../Parts/Input";
import RichTextEditor from "@/app/(private)/Parts/RichTextEditor";
import { useRecoilValue } from "recoil";
import { atomFormUserProfile } from "@/recoil/atom";

export default function UserProfile() {
  const userData = useRecoilValue(atomFormUserProfile) 
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-x-4">
        <Image
          src={
            "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
          }
          width={600}
          height={600}
          className="rounded-full w-16 h-16 object-cover "
        />
        <Link href={"/login"}>
          <button
            type="button"
            class="text-primary border border-primary   hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
          >
            Upload New Picture
          </button>
        </Link>
      </div>
      <div className="mt-4">
        <Input
          id="name"
          label="Name"
          type="text"
          value={userData.name}
          // onChange={(e) => setUserProfile({ ...userProfile, name: e })}
        />
      </div>
      <div className="mt-4">
        <Input
          id="job"
          label="Job"
          type="text"
          // value={userProfile.job}
          // onChange={(e) => setUserProfile({ ...userProfile, job: e })}
        />
      </div>
      <div className="mt-4">
        <RichTextEditor
          label="Summary"
          // value={userProfile.method}
          isTextArea={true}
          // onChange={(e) => setUserProfile({ ...userProfile, summary: e })}
        />
      </div>
      <div className="mt-4">
        <button
          type="button"
          class="text-white bg-primary   hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
