import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaCommentAlt } from 'react-icons/fa'

export default function Project({ data }) {
	return (
		<div className="flex flex-col">
			<Link href={`/project/${data.slug}`}>
				<div className="relative w-full overflow-hidden rounded-t-lg max-h-60 h-60">
					<Image
						src={`/${data.image_path}`}
						alt={data.title}
						className="absolute object-cover w-fit h-fit"
						fill
					/>
				</div>

				<div className="flex flex-row items-center mt-2">
					<p className="font-semibold">{data?.title}</p>
				</div>
			</Link>
			<div className="flex flex-row items-center mt-2">
				<div className="flex flex-row items-center basis-2/3">
					<Link href={'/project'} className="flex flex-row items-center">
						<Image
							src={
								data?.image_path
									? `/${data?.image_path}`
									: 'https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg'
							}
							alt="depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
							width={1200}
							height={1200}
							className="object-cover w-10 h-10 rounded-full "
						/>
						<p className="pl-3 text-sm text-black">{data?.user.name}</p>
					</Link>
				</div>
				<div className="flex flex-row items-center justify-end mr-2 basis-1/3">
					<AiFillStar width={8} height={8} />
					<p className="mr-2">6</p>
					<FaCommentAlt width={4} height={4} className="mr-1" />
					<p>6</p>
				</div>
			</div>
		</div>
	)
}
