import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { AiOutlineEdit } from 'react-icons/ai'
import moment from 'moment'

export default function ProjectCard({ data }) {
	return (
		<Link
			href={'/project/2023/02/website-hitung-otomatis'}
			className="flex flex-col items-center justify-between min-w-[24rem] w-96 rounded-lg cursor-pointer overflow-hidden"
		>
			<div className="relative h-48 w-96 min-w-[24rem]">
				<Image
					src={
						'https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg'
					}
					alt="depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
					className="object-cover"
					sizes="100%"
					fill
				/>
			</div>

			<div className="bg-[#0CADB7] rounded-b-lg p-4 flex flex-col gap-2 w-full">
				<p className="font-semibold tracking-normal text-white">{data.title}</p>

				<div
					className="text-sm font-normal tracking-normal text-white"
					dangerouslySetInnerHTML={{ __html: data.overview }}
				/>

				<div className="flex flex-row justify-between flex-1 item-center">
					<p className="text-xs font-thin tracking-normal text-white">
						at {moment(data.created_at).format('DD MMM YYYY')}
					</p>

					{/* <div className="relative group">
						<Link href="/clientzone/project-list/1">
							<AiOutlineEdit className="flex-1 w-5 h-5 mx-2 text-white" />
						</Link>

						<span className="absolute p-2 mb-2 text-xs text-white scale-0 bg-gray-800 rounded bottom-full group-hover:scale-100">
							Edit
						</span>
					</div> */}
				</div>
			</div>
		</Link>
	)
}
