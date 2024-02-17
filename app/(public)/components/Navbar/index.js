'use client'

import { Fragment, useEffect, useState } from 'react'
import { useLogoutMutation } from '@/redux/services/authApi'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDoubleDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useGetProfileQuery } from '@/redux/services/profileApi'
import { BsArrowRight, BsArrowDown } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Navbar() {
	const router = useRouter()

	const [rendered, setRendered] = useState(false)
	const [token, setToken] = useState(null)
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isDropdownGuideOpen, setIsDropdownGuideOpen] = useState(false)
	const { data: user } = useGetProfileQuery(undefined, { skip: !token })

	const [logout] = useLogoutMutation()

	const handleOnclickLogout = () => {
		logout().then(({ data, error }) => {
			if (!error) {
				localStorage.removeItem('token')
				localStorage.removeItem('user')
				router.push('/login')
			}
		})
	}
	const handleFeaturesClick = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}
	const handleGuideClick = () => {
		setIsDropdownGuideOpen(!isDropdownGuideOpen)
	}

	useEffect(() => {
		const token = localStorage.getItem('token')

		setToken(token)
		setRendered(true)
	}, [])

	return (
		<nav className={'py-6 px-16 shadow-md flex items-center bg-white text-white'}>
			<Link href="/">
				<h1 className="mr-8 text-2xl font-bold text-primary">POTOVET</h1>
			</Link>
			<div className="flex-row flex-1 space-x-12">
				<div className="relative inline-flex items-center hover:text-primary">
					<div
						className={`text-base font-medium text-[#6E6F70] flex items-center hover:text-primary `}
						onClick={handleFeaturesClick}
					>
						Features
						<span className="inline-flex ml-1">
							<MdOutlineKeyboardArrowDown />
						</span>
					</div>
					{isDropdownOpen && (
						<div
							className="absolute grid grid-cols-2 p-5 mt-2 text-black bg-white divide-y divide-gray-100 rounded-md shadow-lg top-5 gap-y-4 gap-x-4 ring-1 ring-black ring-opacity-5 focus:outline-none "
							style={{ width: '500px' }}
						>
							<div className="flex flex-col">
								<span className="font-semibold">Portfolio Album</span>
								<span className="text-sm font-normal">
									Tampilan portofolio secara sistematis dengan konsep gallery untuk menyajikan
									portfolio yang telah dibuat. Konsep ini akan diatur berdasarkan filter
									dan sorting waktu.
								</span>
							</div>
							<div className="flex flex-col">
								<span className="font-semibold">Manage a Portfolio </span>
								<span className="text-sm font-normal">
									Menampilkan visual data yang terbentuk dalam pembuatan portofolio secara real time,
									mengatur editing portofolio, hak akses portofolio, dan penyampaian resource projek.
								</span>
							</div>
							<div className="flex flex-col">
								<span className="font-semibold">Manage User </span>
								<span className="text-sm font-normal">
									User dapat mengelola data yang berkaitan dengan informasi diri untuk menunjang
									pengembangan user.
								</span>
							</div>
							<div className="flex flex-col">
								<span className="font-semibold">Create a Portfolio</span>
								<span className="text-sm font-normal">
									membuat portfolio berbentuk dokumen dan online. User dapat membuat portofolio dengan
									konten yang sistematis dan dukungan template deskripsi.
								</span>
							</div>
						</div>
					)}
				</div>

				<Link href={'/project'} className="text-base font-medium text-[#6E6F70]">
					{"Portfolio's"}
				</Link>
				<div className="relative inline-flex items-center hover:text-primary">
					<Link href={'/guide'}>
						<div className={`text-base font-medium text-[#6E6F70] flex items-center hover:text-primary `}>
							Guide to Create a Portfolio
							<span className="inline-flex ml-1">
								<MdOutlineKeyboardArrowDown />
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className="flex flex-row items-center space-x-3">
				{rendered ? (
					<>
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
										{user?.data?.name ?? '-'}
										<ChevronDoubleDownIcon
											className="w-5 h-5 ml-2 -mr-1 text-white hover:text-violet-100"
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
									<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="px-1 py-1">
											<Link href={'/clientzone'}>
												<Menu.Item>
													{({ active }) => (
														<button
															type="button"
															className={`${
																active ? 'bg-primary text-white' : 'text-gray-900'
															} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
														>
															Portfolio
														</button>
													)}
												</Menu.Item>
											</Link>
										</div>
										<div className="px-1 py-1">
											<Link href={'/project'}>
												<Menu.Item>
													{({ active }) => (
														<button
															type="button"
															className={`${
																active ? 'bg-primary text-white' : 'text-gray-900'
															} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
														>
															Gallery
														</button>
													)}
												</Menu.Item>
											</Link>
										</div>
										<div className="px-1 py-1">
											<Link href={'/profile'}>
												<Menu.Item>
													{({ active }) => (
														<button
															type="button"
															className={`${
																active ? 'bg-primary text-white' : 'text-gray-900'
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
														type="button"
														className={`${
															active ? 'bg-primary text-white' : 'text-gray-900'
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
							<>
								<Link href={'/contact-me'} className="text-base font-medium text-[#6E6F70] me-8">
									Contact Me
								</Link>
								<Link href={'/login'} className="text-base font-medium text-[#6E6F70] ">
									Login
								</Link>
								<h1 className="text-base font-medium text-[#6E6F70] me-8">|</h1>
								<Link href={'/sign-up'}>
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
		</nav>
	)
}
