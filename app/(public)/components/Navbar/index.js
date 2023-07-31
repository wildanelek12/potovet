"use client"

import { Fragment, useEffect, useState } from "react"
import { useLogoutMutation } from "@/redux/services/authApi"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar() {
	const router = useRouter()

	const [user, setUser] = useState(null)
	const [token, setToken] = useState(null)

	const [logout] = useLogoutMutation()

	const handleOnclickLogout = () => {
		if (token) {
			logout({ headers: { Authorization: "Bearer " + token } }).then(({ data, error }) => {
				if (!error) {
					localStorage.removeItem("token")
					localStorage.removeItem("user")
					router.push("/login")
				}
			})
		}
	}

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))
		const token = localStorage.getItem("token")

		setUser(user)
		setToken(token)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<nav className={"py-6 px-16 shadow-md flex items-center bg-white text-white"}>
			<Link href="/">
				<h1 className="mr-8 text-2xl font-bold text-primary">POTOVET</h1>
			</Link>
			<div className="flex-row flex-1 space-x-12">
				<Link href={"/project"} className="text-base font-medium text-[#6E6F70]">
					Home
				</Link>
				<Link href={"/project"} className="text-base font-medium text-[#6E6F70]">
					Pricing
				</Link>
				<Link href={"/project"} className="text-base font-medium text-[#6E6F70]">
					About
				</Link>
			</div>
			<div className="flex flex-row items-center space-x-3">
				{token ? (
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex items-center justify-center w-full px-2 py-2 text-sm font-medium text-white rounded-md bg-secondary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
								<Image
									className="w-6 h-6 mx-2 rounded-full"
									src="https://picsum.photos/id/231/400/400"
									alt="Picture of the author"
									width={32}
									height={32}
								/>
								{user?.name ?? "-"}
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
									<Link href={"/clientzone"}>
										<Menu.Item>
											{({ active }) => (
												<button
													className={`${
														active ? "bg-violet-500 text-white" : "text-gray-900"
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
														active ? "bg-violet-500 text-white" : "text-gray-900"
													} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
												>
													Profil
												</button>
											)}
										</Menu.Item>
									</Link>
								</div>
								<div className="px-1 py-1">
									<Link href={"/profile"}>
										<Menu.Item>
											{({ active }) => (
												<button
													className={`${
														active ? "bg-violet-500 text-white" : "text-gray-900"
													} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
												>
													Settings
												</button>
											)}
										</Menu.Item>
									</Link>
								</div>
								<div className="px-1 py-1" onClick={handleOnclickLogout}>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-violet-500 text-white" : "text-gray-900"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
											>
												Logout
											</button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				) : (
					<Link href={"/login"}>
						<button
							type="button"
							className="text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
						>
							Login
						</button>
					</Link>
				)}
			</div>
		</nav>
	)
}
