"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Layout({ children }) {
	const [user, setUser] = useState(null)
	const pathname = usePathname()

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))

		setUser(user)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="grid w-1/2 gap-8 mx-auto mt-20">
			<div className="flex w-full gap-8">
				<div className="flex items-center justify-center basis-1/3">
					<div className="relative w-32 h-32 overflow-hidden rounded-full">
						<Image
							src="https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
							alt=""
							className="absolute object-cover"
							sizes="100%"
							fill
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center basis-2/3">
					<p className="text-xl font-bold tracking-wide text-black">{user?.name}</p>
					<p className="text-sm font-normal tracking-wide text-black">Set up your POTOVET Account</p>
				</div>
			</div>

			<div className="flex w-full gap-8">
				<div className="basis-1/3">
					<div className="grid gap-2">
						<Link
							href="/profile"
							className={[
								"block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
								pathname === "/profile" ? "bg-primary text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
							].join(" ")}
						>
							User Profile
						</Link>
						<Link
							href="/profile/skills"
							className={[
								"block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
								pathname === "/profile/skills" ? "bg-primary text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
							].join(" ")}
						>
							Skills
						</Link>
						<Link
							href="/profile/work-experiences"
							className={[
								"block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
								pathname === "/profile/work-experiences" ? "bg-primary text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
							].join(" ")}
						>
							Work Experiences
						</Link>
						<Link
							href="/profile/educations"
							className={[
								"block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
								pathname === "/profile/educations" ? "bg-primary text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
							].join(" ")}
						>
							Educations
						</Link>
						<Link
							href="/profile/interests"
							className={[
								"block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
								pathname === "/profile/interests" ? "bg-primary text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
							].join(" ")}
						>
							Interests
						</Link>
						<Link
							href="/profile/social-media"
							className={[
								"block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
								pathname === "/profile/social-media" ? "bg-primary text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
							].join(" ")}
						>
							Social Media
						</Link>
					</div>
				</div>
				<div className="basis-2/3">{children}</div>
			</div>
		</div>
	)
}
