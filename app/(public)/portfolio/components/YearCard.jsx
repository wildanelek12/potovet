import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function YearCard({ projectCount, year }) {
	return (
		<Link
			href={`/portfolio/${year}`}
			className="flex flex-row items-center justify-between min-w-[24rem] gap-4 px-8 py-6 bg-no-repeat bg-cover rounded-lg cursor-pointer"
			scroll={false}
			style={{
				backgroundImage: `linear-gradient(90deg, rgba(12, 173, 183, 0.7), rgba(230, 132, 110, 0.9)), url("/bg-profile.jpg")`,
			}}
		>
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-4">
					<Image width={50} height={50} src="/calendar-card.svg" alt="" />
					<p className="text-6xl font-bold text-white">{year}</p>
				</div>

				<p className="text-2xl font-normal text-white">{projectCount} Project</p>
			</div>

			<Image width={50} height={50} src="/arrow.svg" alt="" />
		</Link>
	)
}
