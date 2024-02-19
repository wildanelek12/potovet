'use client'

import React from 'react'
import { MdCopyAll } from 'react-icons/md'

export default function ContentHeader() {
	return (
		<div className="container flex items-end justify-between px-4 py-6 font-medium text-center border-b ">
			<p className="text-xl font-extrabold">Portfolio&apos;s</p>

			<button
				type="button"
				onClick={() => {}}
				className="flex flex-row items-center gap-2 px-3 py-1 text-sm font-semibold text-white rounded-full bg-primary"
			>
				<MdCopyAll />
				<span>URL</span>
			</button>
		</div>
	)
}
