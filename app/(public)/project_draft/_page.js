'use client'

import Image from 'next/image'
import IconButtonDescription from '@/components/icon-project-desc'
import ProjectCard from '@/components/project-card'
import ModalSkill from '@/components/modal-desc/modal-skill'
import { useRecoilState, useSetRecoilState } from 'recoil'
import ModalWork from '@/components/modal-desc/modal-work'
import {
	showModalEducation,
	showModalInterest,
	showModalSkill,
	showModalSocialMedia,
	showModalWork,
	showMonthContent,
	showProjectContent,
	showYearContent,
} from '@/recoil/atom'
import ModalEducation from '@/components/modal-desc/modal-education'
import ModalInterest from '@/components/modal-desc/modal-interest'
import ModalSosmed from '@/components/modal-desc/modal-sosmed'
import SelectYear from '@/components/select-step-project/select-year'
import SelectMonth from '@/components/select-step-project/select-month'
import { useGetProfileQuery } from '@/redux/services/profileApi'
import { useState } from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import UpdateProfileModal from '../components/EditPhotoProfile'
import { MdCopyAll } from 'react-icons/md'

export default function Home() {
	const setSkillOpen = useSetRecoilState(showModalSkill)
	const setWorkOpen = useSetRecoilState(showModalWork)
	const setModalEducationOpen = useSetRecoilState(showModalEducation)
	const setModalIntertestOpen = useSetRecoilState(showModalInterest)
	const setModalSocialMediaOpen = useSetRecoilState(showModalSocialMedia)

	const [isShowMonthContent, setShowMonthContent] = useRecoilState(showMonthContent)
	const [isShowYearContent, setShowYearContent] = useRecoilState(showYearContent)
	const [isShowProjectContent, setIsShowProject] = useRecoilState(showProjectContent)
	const [isHovered, setIsHovered] = useState(false)
	const [isModalEditOpen, setModalEditOpen] = useState(false)

	const { data: user } = useGetProfileQuery()

	const onClickBackGallery = () => {
		setShowYearContent(true)
		setShowMonthContent(false)
		setIsShowProject(false)
	}

	const onClickBackProject = () => {
		setShowYearContent(false)
		setShowMonthContent(true)
		setIsShowProject(false)
	}
	const renderSelectContent = () => {
		if (isShowYearContent) {
			return <SelectYear />
		} else if (isShowMonthContent) {
			return <SelectMonth />
		} else if (isShowProjectContent) {
			return (
				<>
					<div className="mx-16 mt-4">
						<nav className="flex" aria-label="Breadcrumb">
							<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
								<li className="inline-flex items-center">
									<a
										href="#"
										onClick={() => onClickBackGallery()}
										className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
									>
										<svg
											className="w-3 h-3 me-2.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
										</svg>
										Gallery
									</a>
								</li>
								<li>
									<div className="flex items-center">
										<svg
											className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 6 10"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="m1 9 4-4-4-4"
											/>
										</svg>
										<a
											href="#"
											onClick={() => onClickBackProject()}
											className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
										>
											Projects
										</a>
									</div>
								</li>
								<li aria-current="page">
									<div className="flex items-center">
										<svg
											className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 6 10"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="m1 9 4-4-4-4"
											/>
										</svg>
										<span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 dark:text-gray-400">
											Portfolio
										</span>
									</div>
								</li>
							</ol>
						</nav>
					</div>
					<div className="grid mx-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-x-4">
						<ProjectCard></ProjectCard>
						<ProjectCard></ProjectCard>
						<ProjectCard></ProjectCard>
						<ProjectCard></ProjectCard>
					</div>
				</>
			)
		}
	}

	return (
		<>
			<div className="flex flex-col flex-1 h-auto mb-8 font-sans">
				<div
					className="flex flex-col items-center justify-center flex-1 py-16"
					style={{
						backgroundImage:
							'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("/bg-profile.jpg")',
						height: 'fit-content',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain, cover',
					}}
				>
					<div
						className="relative overflow-hidden rounded-full w-36 h-36"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						onClick={() => setModalEditOpen(true)}
					>
						<Image
							src={
								user?.data?.photo ??
								'https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg'
							}
							alt="photo-profile"
							className="absolute object-cover"
							sizes="100%"
							fill
						/>
						{isHovered && (
							<div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 cursor-pointer">
								<MdOutlineEdit color="white" size={20} />
								<p className="text-white">Update Photo </p>

								{/* Add your update profile form or any content */}
							</div>
						)}
					</div>

					{isModalEditOpen && (
						<UpdateProfileModal onClose={() => setModalEditOpen(false)} isOpen={isModalEditOpen} />
					)}

					<p className="mt-4 text-4xl font-bold tracking-wide text-white">{user?.data?.name}</p>
					<p className="text-sm font-semibold text-white ">{user?.data?.detail_user?.jobs}</p>
					<p className="w-1/4 mt-4 font-normal text-center text-white text-normal">
						{user?.data?.detail_user?.descriptions}
					</p>

					<div className="flex flex-row mt-4 space-x-4 ">
						<div onClick={() => setModalEducationOpen(true)} className="relative group">
							<IconButtonDescription src="/education.svg" />
							<span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
								Education
							</span>
						</div>

						<div onClick={() => setWorkOpen(true)} className="relative group">
							<IconButtonDescription src="/suitcase-3.png" />
							<span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
								Work Experience
							</span>
						</div>

						<div onClick={() => setSkillOpen(true)} className="relative group">
							<IconButtonDescription src="/skills.png" />
							<span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
								Skills
							</span>
						</div>

						<div onClick={() => setModalIntertestOpen(true)} className="relative group">
							<IconButtonDescription src="/magnifying-glass.png" />
							<span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
								Interest
							</span>
						</div>
						<div onClick={() => setModalSocialMediaOpen(true)} className="relative group">
							<IconButtonDescription src="/sosmed.svg" />
							<span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
								Social Media
							</span>
						</div>
					</div>
				</div>

				<div className="flex items-end justify-between px-16 mt-8 font-medium text-center">
					<div></div>
					<p className="text-xl font-extrabold">{"Portfolio's"}</p>
					<button
						type="button"
						onClick={() => closeModalShare()}
						className="flex items-center px-3 py-1 ml-2 text-sm font-semibold text-white rounded-full bg-primary"
					>
						<MdCopyAll />
						<span className="ms-2"> URL</span>
					</button>
				</div>

				<div className="flex h-0.5 mt-4 bg-gray-200 w-auto mx-16" />
				<div>{renderSelectContent()}</div>
			</div>

			<ModalSkill data={user?.data?.detail_user?.skills} />
			<ModalWork data={user?.data?.detail_user?.work_experiences} />
			<ModalEducation data={user?.data?.detail_user?.educations} />
			<ModalInterest data={user?.data?.detail_user?.interests} />
			<ModalSosmed
				data={{
					email: user?.data?.email,
					instagram: user?.data?.detail_user?.instagram,
					linkedin: user?.data?.detail_user?.linkedin,
					facebook: user?.data?.detail_user?.facebook,
				}}
			/>
		</>
	)
}
