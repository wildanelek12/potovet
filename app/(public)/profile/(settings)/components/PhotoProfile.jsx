import React from 'react'
import Image from 'next/image'
import { MdOutlineEdit } from 'react-icons/md'

export default function PhotoProfile({ src, onChange }) {
	const inputFileRef = React.useRef(null)

	const handleOnClickProfile = () => inputFileRef.current?.click()

	const handleOnChangeFileInput = (e) => {
		if (e.target.files?.length > 0) {
			onChange?.(e.target.files[0])
		}
	}

	const imageSource = React.useMemo(() => {
		if (!src) {
			return 'https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg'
		}

		return `/${src}`
	}, [src])

	return (
		<div className="relative overflow-hidden rounded-full w-36 h-36">
			<Image src={imageSource} alt="photo-profile" className="absolute object-cover" sizes="100%" fill />

			<div
				className="absolute inset-0 flex flex-col items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 cursor-pointer hover:opacity-100"
				onClick={handleOnClickProfile}
			>
				<MdOutlineEdit color="white" size={20} />
				<p className="text-white">Update Photo</p>
			</div>

			<input ref={inputFileRef} type="file" className="hidden" onChange={handleOnChangeFileInput} />
		</div>
	)
}
