'use client'

import React from 'react'
import { ButtonGroup, PhotoProfile } from '../components'
import { useGetProfileBySlugQuery } from '@/redux/services/profileApi'
import { useParams } from 'next/navigation'

export default function ProfileSection() {
	const params = useParams()
	const { data } = useGetProfileBySlugQuery(params.slug)

	return (
		<section
			id="profile-section"
			className="flex flex-col items-center justify-center flex-1 gap-4 py-16 bg-no-repeat bg-cover"
			style={{
				backgroundImage:
					'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("/bg-profile.jpg")',
			}}
		>
			<PhotoProfile src={data?.data?.photo} onChange={() => {}} />

			<div className="flex flex-col items-center justify-center gap-2 text-center text-white">
				<p className="text-4xl font-bold tracking-wide">{data?.data?.name}</p>
				{data?.data?.detail_user?.jobs ? (
					<p className="text-sm font-semibold">{data?.data?.detail_user?.jobs}</p>
				) : null}
				{data?.data?.detail_user?.descriptions ? (
					<p className="max-w-md leading-2">{data?.data?.detail_user?.descriptions}</p>
				) : null}
			</div>

			<ButtonGroup data={data?.data} />
		</section>
	)
}
