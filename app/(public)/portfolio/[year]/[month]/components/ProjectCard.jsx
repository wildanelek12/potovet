import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { AiOutlineEdit } from 'react-icons/ai'
import moment from 'moment'

export default function ProjectCard({ data }) {
	return (
		<Link
			href={`/project/${data.slug}`}
			className="flex flex-col items-center justify-between min-w-[24rem] w-96 rounded-lg cursor-pointer overflow-hidden"
		>
			<div className="relative h-48 w-96 min-w-[24rem]">
				<Image
					src={
						data.images[0]?.image_path
							? `/${data.images[0].image_path}`
							: 'https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg'
					}
					alt="depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
					className="absolute object-cover"
					sizes="100%"
					fill
				/>
			</div>

			<div className="bg-[#0CADB7] rounded-b-lg p-4 flex flex-col gap-2 w-full flex-1">
				<p className="font-semibold tracking-normal text-white">{data.title}</p>

				<div
					className="text-sm font-normal tracking-normal text-white line-clamp-3"
					dangerouslySetInnerHTML={{ __html: data.overview }}
				/>

				<div className="flex flex-row justify-between flex-1 item-center">
					<p className="text-xs font-thin tracking-normal text-white">
						at {moment(data.created_at).format('DD MMM YYYY')}
					</p>
				</div>
			</div>
		</Link>
	)
}
