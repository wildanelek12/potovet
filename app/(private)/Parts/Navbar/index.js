"use client"

import Image from "next/image"
import LogoutButton from "./Parts/LogoutButton"
import { MenuToggle } from "./Parts/MenuToggle"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "@/redux/reducers/sidebarSlice"

export default function Navbar() {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state) => state.sidebar)

    const handleOnClick = () => {
        dispatch(toggleSidebar())
    }

    return (
        <>
            <header className="h-[5rem] top-0 z-20 shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
                <nav className="fixed h-[5rem] w-full flex gap-2 lg:gap-0 bg-white border-b-[#E3E8F2] border-b-[1px] px-4 lg:px-8">
                    <div className="flex items-center flex-1 gap-2 lg:gap-16 lg:pr-16">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={1200}
                            height={1200}
                            className="self-center object-contain w-32 mr-8"
                        />
                    </div>
                    <div className="flex items-center gap-8 ml-auto">
                        <div className="flex items-center justify-between w-full h-full gap-4">
                            <LogoutButton className="hidden lg:block" />
                            <MenuToggle
                                toggle={handleOnClick}
                                isOpen={isOpen}
                                className="lg:hidden focus-visible:outline-none"
                            />
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}
