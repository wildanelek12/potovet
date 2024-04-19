'use client'

import React from 'react'
import { ProjectCard } from './components'
import dynamic from 'next/dynamic'
import _ from 'lodash'
import { useGetProfileBySlugQuery } from '@/redux/services/profileApi'

const Breadcrumb = dynamic(() => import('antd').then((mod) => mod.Breadcrumb), {
	ssr: false,
})

export default function Page({ params }) {
	const { data } = useGetProfileBySlugQuery(params.slug)

	return (
		<React.Fragment>
			<Breadcrumb
				separator=">"
				items={[
					{
						title: 'Gallery',
					},
					{
						title: 'Projects',
					},
				]}
			/>

			<div className="flex flex-row flex-wrap gap-6">
				{data?.data?.projects?.map((val, i) => (
					<ProjectCard key={i} data={val} />
				))}
			</div>
		</React.Fragment>
	)
}
