import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

export default function Project() {
  return (
    <div className="flex flex-col">
      <Link href={"/project/2"}>
        <Image
          src={
            "https://lh5.googleusercontent.com/8gwdZIlrONenDA5NJsi6tLsSFXOijfkzeOOVTEG8P1u2lPntRLKdgL6ozNkldkvb8Fcf801B6s2pj2_dNtoaVTTKDlHSZ6ViSwgZZPi8JtlbUUKGiiyvInV2IbC_49BjB1xgcKgc"
          }
          alt=""
          width={1200}
          height={1200}
          className="object-cover mt-8 rounded-lg w-fit h-fit"
        />
        <div className="flex flex-row items-center mt-2">
          <p className="font-semibold">Portfolio Website with elegan color </p>
        </div>
      </Link>
      <div className="flex flex-row items-center mt-2">
        <div className="flex flex-row items-center basis-2/3">
          <Link href={"/project"} className="flex flex-row items-center">
            <Image
              src={
                "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
              }
              alt="depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
              width={1200}
              height={1200}
              className="object-cover w-10 h-10 rounded-full "
            />
            <p className="pl-3 text-sm text-black">Wildan Romiza</p>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-end mr-2 basis-1/3">
          <AiFillStar width={8} height={8} />
          <p className="mr-2">6</p>
          <FaCommentAlt width={4} height={4} className="mr-1" />
          <p>6</p>
        </div>
      </div>
    </div>
  );
}
