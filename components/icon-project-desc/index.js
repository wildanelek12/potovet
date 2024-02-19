import Image from 'next/image'
import React from 'react'

export default function IconButtonDescription({ src, ...props }) {
	return (
		<button className="flex flex-row items-center justify-center p-2 rounded-lg bg-primary" {...props}>
			<Image src={src} width={32} height={32} className="w-8 h-8" alt="" />
		</button>
	)
}
