'use client'

import { useGetProfileQuery } from '@/redux/services/profileApi'
import { message } from 'antd'
import React from 'react'
import { MdCopyAll } from 'react-icons/md'

export default function ContentHeader() {
	const { data } = useGetProfileQuery()

	const handleOnCopy = () => {
		navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/${data?.data?.slug}`)
		message.info('URL Berhasi di salin!')
	}
	
	return (
		<div className="container flex items-end justify-between px-4 py-6 font-medium text-center border-b ">
			<p className="text-xl font-extrabold">Portfolio&apos;s</p>

			<button
				type="button"
				onClick={handleOnCopy}
				className="flex flex-row items-center gap-2 px-3 py-1 text-sm font-semibold text-white rounded-full bg-primary"
			>
				<MdCopyAll />
				<span>URL</span>
			</button>
		</div>
	)
}
