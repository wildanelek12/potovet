import React from 'react'
import Image from 'next/image'
import { FaDownload } from 'react-icons/fa'
import { BsFillTrashFill } from 'react-icons/bs'
import Link from 'next/link'
import { useDeleteButton } from '../hooks'

export default function LibraryCard({ data }) {
	const deleteButtonProps = useDeleteButton({ id: data.id })

	return (
		<div className="relative flex flex-row min-w-[16rem] w-64 h-48 rounded-lg overflow-hidden">
			<Image src={`/${data.image_path}`} alt="" className="object-cover" sizes="100dvh" fill />

			<div className="absolute flex flex-row items-center gap-2 bottom-3 right-3">
				{data.type === 'library' ? (
					<div
						className="flex flex-row items-center justify-center w-8 h-8 overflow-hidden bg-white rounded-full shadow-lg cursor-pointer"
						{...deleteButtonProps}
					>
						<BsFillTrashFill className="w-4 h-4 text-gray-400" color="#FE7263" />
					</div>
				) : null}

				<Link
					href={`/${data.image_path}`}
					className="flex flex-row items-center justify-center w-8 h-8 overflow-hidden bg-white rounded-full shadow-lg"
					download
				>
					<FaDownload className="w-4 h-4 text-gray-400" color="#0CADB7" />
				</Link>
			</div>
		</div>
	)
}
