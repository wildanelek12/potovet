"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import UserProfile from "./user_profile/form"
import { useGetProfileQuery } from "@/redux/services/profileApi"

export default function Page() {
	const [user, setUser] = useState(null)
	const [token, setToken] = useState(null)

	const { data } = useGetProfileQuery({ headers: { Authorization: "Bearer " + token } }, { skip: !token })

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))
		const token = localStorage.getItem("token")

		setUser(user)
		setToken(token)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		// <div className="flex flex-col w-1/2 mx-auto mt-20 ">
		// 	<div className="flex flex-row gap-x-8">
		// 		<Image
		// 			src={"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"}
		// 			alt=""
		// 			width={600}
		// 			height={600}
		// 			className="object-cover w-20 h-20 rounded-full "
		// 		/>
		// 		<div className="flex flex-col ">
		// 			<p className="text-xl font-bold tracking-wide text-black">M Wildan Romiza</p>
		// 			<p className="text-sm font-normal tracking-wide text-black">Set up your POTOVET Account</p>
		// 		</div>
		// 	</div>

		// 	<div className="flex flex-row flex-1 w-full mt-8 gap-x-8">
		// 		<div className="basis-1/3 ">
		// 			<div className="">
		// 				<a href="#!" aria-current="true" className="block w-full px-4 py-2 text-white rounded-lg cursor-pointer bg-primary bg-primary-100">
		// 					User Profile
		// 				</a>
		// 				<a
		// 					href="#!"
		// 					className="block w-full px-4 py-2 transition duration-500 rounded-lg cursor-pointer hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
		// 				>
		// 					Skills
		// 				</a>
		// 				<a
		// 					href="#!"
		// 					className="block w-full px-4 py-2 transition duration-500 rounded-lg cursor-pointer hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
		// 				>
		// 					Work Experience
		// 				</a>
		// 				<a
		// 					href="#!"
		// 					className="block w-full px-4 py-2 transition duration-500 rounded-lg cursor-pointer hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
		// 				>
		// 					Education
		// 				</a>
		// 				<a
		// 					href="#!"
		// 					className="block w-full px-4 py-2 transition duration-500 rounded-lg cursor-pointer hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
		// 				>
		// 					Interest
		// 				</a>
		// 				<a
		// 					href="#!"
		// 					className="block w-full px-4 py-2 transition duration-500 rounded-lg cursor-pointer hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
		// 				>
		// 					Social Media
		// 				</a>
		// 			</div>
		// 		</div>
		// 		<div className=" basis-2/3">
		// 			{/* <UserProfile /> */}
		// 		</div>
		// 	</div>
		// </div>
		<UserProfile />
	)
}
