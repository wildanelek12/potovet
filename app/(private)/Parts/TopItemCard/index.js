import React from 'react'
import Image from 'next/image'

export default function TopItemCard({ src, name, rank }) {
	return (
		<div className="flex flex-row items-center justify-between gap-4">
			<div className="flex flex-row items-center gap-4">
				<div className="relative min-w-[8rem] h-20 w-32">
					<Image src={src} alt="" className="absolute object-cover" sizes="100%" fill draggable={false} />
				</div>

				<p className="text-sm font-medium">{name}</p>
			</div>

			<div className="select-none min-w-[2rem] w-8 h-8 mr-2 flex flex-row justify-center items-center text-lg font-bold text-blue-800 bg-blue-100 rounded-3xl dark:bg-blue-900 dark:text-blue-300">
				{rank}
			</div>
		</div>
	)
}
