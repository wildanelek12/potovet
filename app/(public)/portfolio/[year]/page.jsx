'use client'

import React from 'react'
import { MonthCard } from './components'
import { useGetProjectsGroupByYearQuery } from '@/redux/services/projectApi'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import _ from 'lodash'

const Breadcrumb = dynamic(() => import('antd').then((mod) => mod.Breadcrumb), {
	ssr: false,
})

export default function Page({ params }) {
	const { data } = useGetProjectsGroupByYearQuery({})

	const projects = React.useMemo(
		() => (!_.isEmpty(data?.data?.data) ? _.filter(data.data.data, ['year', parseInt(params.year)]) : []),
		[data?.data?.data, params.year]
	)

	return (
		<React.Fragment>
			<Breadcrumb
				separator=">"
				items={[
					{
						title: 'Gallery',
					},
					{
						title: <Link href="/portfolio">Projects</Link>,
						href: null,
					},
					{
						title: params.year,
					},
				]}
			/>

			<div className="flex flex-row flex-wrap gap-6">
				{projects.map(({ project_count, month }, i) => (
					<MonthCard key={i} projectCount={project_count} month={month} />
				))}
			</div>
		</React.Fragment>
	)
}
