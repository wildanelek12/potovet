"use client";
import "../globals.css";
import Fonts from "@/constants/fonts";
import { RecoilRoot } from "recoil";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "fallback", // <--
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={[Fonts.className, "font-montserrat"].join(" ")}>
        <nav
          className={`${montserrat.variable} font-sans py-6 px-16 shadow-md flex items-center bg-white text-white`}
        >
          <Link href="/">
            <Image
              src="/logo.svg"
              width={1200}
              height={1200}
              className="w-32 object-contain self-center mr-8"
            />
          </Link>
          <div className="flex-1 flex-row space-x-12">
            <Link
              href={"/project "}
              className="text-base font-medium text-[#6E6F70]"
            >
              Home
            </Link>
            <Link
              href={"/project"}
              className="text-base font-medium text-[#6E6F70]"
            >
              Pricing
            </Link>
            <Link
              href={"/project"}
              className="text-base font-medium text-[#6E6F70]"
            >
              About
            </Link>
          </div>
          <div className="flex flex-row space-x-3">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-secondary px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <Image
                    className="rounded-full w-6 h-6 mx-2"
                    src="https://picsum.photos/id/237/400/400"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                  />
                  Wildan Romiza
                  <ChevronDoubleDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-white hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Link href={"/clientzone"}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Clientzone
                          </button>
                        )}
                      </Menu.Item>
                    </Link>
                  </div>
                  <div className="px-1 py-1">
                    <Link href={"/project"}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Profil
                          </button>
                        )}
                      </Menu.Item>
                    </Link>
                  </div>
                  <div className="px-1 py-1">
                    <Link href={"/clientzone/dashboard"}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </Link>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
        <div>
          <RecoilRoot>{children}</RecoilRoot>
        </div>
      </body>
    </html>
  );
}
