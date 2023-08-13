import React from "react";
import { Montserrat } from "next/font/google";
import { BsPrinter,BsShareFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function Detail() {
  return (
    <div className={` h-auto flex font-sans px-16 py-2 flex-col flex-1`}>
      <div className="flex flex-col items-center justify-center flex-1 ">
        <p className="mt-4 text-3xl font-bold ">
          Website Promosi International BAG for backpaker
        </p>
        <p className="mt-1 text-sm font-medium">By : Ario Bayu</p>
        <p className="mt-1 text-xs">Categories : Professional </p>
        <p className="mt-1 text-xs">
          Project Time Elapsed : 20 Februari 2023 - 20 December 2023{" "}
        </p>
        <Image
          src={
            "https://cdn.dribbble.com/users/3126500/screenshots/6023737/adventure.jpg"
          }
          alt=""
          width={900}
          height={600}
          className="object-cover w-1/2 mt-8"
        />
      </div>

      <div className="flex flex-col items-start flex-1 p-32">
        <p className="text-xs mt-19">at : 20 February 2023 </p>
        <p className="text-justify ">
          {`Introducing AdventureGear.com - your ultimate destination for all your
          adventurous journeys! If you're a passionate explorer seeking
          high-quality backpacks and gear, look no further. Our website offers a
          wide range of adventure-friendly backpacks designed to accompany you
          on thrilling expeditions, hikes, and outdoor escapades. At
          AdventureGear.com, we understand the importance of durability and
          functionality when it comes to adventure gear. That's why we
          meticulously curate our collection to ensure every product meets the
          highest standards of quality. From rugged backpacks with ample storage
          space to waterproof designs that can withstand any weather conditions,
          we have the perfect companion for your next adventure. But that's not
          all - we go the extra mile to cater to your specific needs. Our
          website features detailed product descriptions, customer reviews, and
          expert guides to help you make an informed choice. We believe in
          providing exceptional customer service, so our friendly support team
          is always ready to assist you with any queries or concerns.
          AdventureGear.com also offers competitive prices without compromising
          on quality. We believe everyone should have access to reliable
          adventure gear, regardless of their budget. With our secure payment
          options and fast shipping, you can gear up and hit the trails in no
          time. Visit AdventureGear.com today and embark on unforgettable
          adventures with confidence. Your next thrilling expedition awaits!`}
        </p>
        <Image
          src={
            "https://lh5.googleusercontent.com/8gwdZIlrONenDA5NJsi6tLsSFXOijfkzeOOVTEG8P1u2lPntRLKdgL6ozNkldkvb8Fcf801B6s2pj2_dNtoaVTTKDlHSZ6ViSwgZZPi8JtlbUUKGiiyvInV2IbC_49BjB1xgcKgc"
          }
          alt=""
          width={900}
          height={600}
          className="self-center object-cover w-1/2 mt-8"
        />
        <p className="mt-2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          ullamcorper velit. Duis consequat ipsum at iaculis euismod. Donec non
          finibus ligula. Quisque volutpat magna non mi auctor consequat. Aenean
          metus mi, fringilla vel varius eget, scelerisque nec sem. Praesent at
          ligula non neque pulvinar molestie non ut lacus. Vestibulum quis
          vulputate odio, at placerat risus. Nunc semper dolor sit amet neque
          volutpat sagittis. Maecenas eget est bibendum, lobortis arcu sed,
          cursus ipsum. Pellentesque vitae vehicula lacus. Morbi blandit libero
          eget turpis porta, sed dapibus velit iaculis. Integer imperdiet est
          vitae pellentesque dignissim. In hac habitasse platea dictumst. Nulla
          laoreet urna in est rhoncus, sit amet ornare neque egestas. Phasellus
          id viverra massa, eget posuere felis. Quisque eu nunc nec ipsum
          sodales sodales. Pellentesque non aliquet felis. Vestibulum lectus
          purus, pretium vel nulla ut, iaculis malesuada orci. Suspendisse
          potenti. Maecenas egestas faucibus dui, ut vestibulum nunc porta nec.
          Nunc interdum ante at turpis porta, convallis blandit ante dapibus.
        </p>
        <p className="mt-2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          ullamcorper velit. Duis consequat ipsum at iaculis euismod. Donec non
          finibus ligula. Quisque volutpat magna non mi auctor consequat. Aenean
          metus mi, fringilla vel varius eget, scelerisque nec sem. Praesent at
          ligula non neque pulvinar molestie non ut lacus. Vestibulum quis
          vulputate odio, at placerat risus. Nunc semper dolor sit amet neque
          volutpat sagittis. Maecenas eget est bibendum, lobortis arcu sed,
          cursus ipsum. Pellentesque vitae vehicula lacus. Morbi blandit libero
          eget turpis porta, sed dapibus velit iaculis. Integer imperdiet est
          vitae pellentesque dignissim. In hac habitasse platea dictumst. Nulla
          laoreet urna in est rhoncus, sit amet ornare neque egestas. Phasellus
          id viverra massa, eget posuere felis. Quisque eu nunc nec ipsum
          sodales sodales. Pellentesque non aliquet felis. Vestibulum lectus
          purus, pretium vel nulla ut, iaculis malesuada orci. Suspendisse
          potenti. Maecenas egestas faucibus dui, ut vestibulum nunc porta nec.
          Nunc interdum ante at turpis porta, convallis blandit ante dapibus.
        </p>
      </div>
      <div className="fixed flex flex-col bottom-10 right-10">
        <Link
          className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary"
          href={"mailto:support@example.com?subject=SendMail&body=Description"}
        >
          <MdOutlineEmail />
        </Link>
        <button className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary">
          <BsPrinter />
        </button>
        <Link href={"/clientzone/project-list/1"}>
          <button className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary">
            <AiOutlineEdit />
          </button>
        </Link>
        <Link href={"/clientzone/project-list/1"}>
          <button className="p-6 text-xl font-semibold text-white rounded-full bg-primary">
            <BsShareFill />
          </button>
        </Link>
      </div>
    </div>
  );
}
