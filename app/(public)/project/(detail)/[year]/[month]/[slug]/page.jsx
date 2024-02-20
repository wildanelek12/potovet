'use client'

import { useGetProjectsQuery } from '@/redux/services/projectApi'
import React from 'react'

export default function Page({ params }) {
	const { data } = useGetProjectsQuery({ params })

	console.log(data)

	return <div>{data?.data?.title}</div>
}
