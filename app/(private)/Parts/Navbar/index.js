"use client";

import Image from "next/image";
import LogoutButton from "./Parts/LogoutButton";
import { MenuToggle } from "./Parts/MenuToggle";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/reducers/sidebarSlice";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import { useGetProfileQuery } from "@/redux/services/profileApi";
import { BsArrowRight } from "react-icons/bs";
import { useLogoutMutation } from "@/redux/services/authApi";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const dispatch = useDispatch();
  const [rendered, setRendered] = useState(false);
  const [token, setToken] = useState(null);
  const { data: user } = useGetProfileQuery(undefined, { skip: !token });
  const { isOpen } = useSelector((state) => state.sidebar);
  const router = useRouter();
  const [logout] = useLogoutMutation();

  const handleOnClick = () => {
    dispatch(toggleSidebar());
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    setToken(token);
    setRendered(true);
  }, []);

  const handleOnclickLogout = () => {
    logout().then(({ data, error }) => {
      if (!error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/login");
      }
    });
  };
  return (
    <>
      <header className="h-[4rem] top-0 z-20 shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <nav className="fixed h-[4rem] w-full flex items-center gap-2 lg:gap-0 bg-white border-b-[#E3E8F2] border-b-[1px] px-4 lg:px-8">
          <Link href={"/"}>
            <div className="flex items-center flex-1 gap-2 lg:gap-16 lg:pr-16">
              <h1 className="text-lg font-bold text-primary">POTOVET</h1>
            </div>
          </Link>
          <div className="flex items-center gap-8 ml-auto">
            <div className="flex flex-row items-center space-x-3">
              {rendered ? (
                <>
                  {token ? (
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex items-center justify-center w-full px-2 py-2 text-sm font-medium text-white rounded-md bg-secondary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          <Image className="w-6 h-6 mx-2 rounded-full" src="https://picsum.photos/id/231/400/400" alt="Picture of the author" width={32} height={32} />
                          {user?.data?.name ?? "-"}
                          <ChevronDoubleDownIcon className="w-5 h-5 ml-2 -mr-1 text-white hover:text-violet-100" aria-hidden="true" />
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
                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href={"/clientzone"} passHref>
                                  <button type="button" className={`${active ? "bg-primary text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    Portfolio
                                  </button>
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/portfolio" passHref>
                                  <button type="button" className={`${active ? "bg-primary text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    Gallery
                                  </button>
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Link href={"/profile"}>
                              <Menu.Item>
                                {({ active }) => (
                                  <button type="button" className={`${active ? "bg-primary text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    Settings
                                  </button>
                                )}
                              </Menu.Item>
                            </Link>
                          </div>
                          <div className="px-1 py-1" onClick={handleOnclickLogout}>
                            <Menu.Item>
                              {({ active }) => (
                                <button type="button" className={`${active ? "bg-primary text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                  Logout
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <>
                      <Link href={"/contact-me"} className="text-base font-medium text-[#6E6F70] me-8">
                        Contact Me
                      </Link>
                      <Link href={"/login"} className="text-base font-medium text-[#6E6F70] ">
                        Login
                      </Link>
                      <h1 className="text-base font-medium text-[#6E6F70] me-8">|</h1>
                      <Link href={"/sign-up"}>
                        <button
                          type="button"
                          className="text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2  "
                        >
                          Create a portfolio
                          <BsArrowRight className="ms-2" />
                        </button>
                      </Link>
                    </>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
