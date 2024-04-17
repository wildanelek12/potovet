import React from 'react'
import Image from 'next/image'

export default function PhotoProfile({ src, onChange }) {
	const imageSource = React.useMemo(() => {
		if (!src) {
			return 'https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg'
		}

		return `/${src}`
	}, [src])

	return (
		<div className="relative overflow-hidden rounded-full w-36 h-36">
			<Image src={imageSource} alt="photo-profile" className="absolute object-cover" sizes="100%" fill />
		</div>
	)
}
