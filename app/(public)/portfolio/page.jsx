'use client'

import React from 'react'
import { YearCard } from './components'
import { useGetProjectsGroupByYearQuery } from '@/redux/services/projectApi'
import dynamic from 'next/dynamic'
import _ from 'lodash'

const Breadcrumb = dynamic(() => import('antd').then((mod) => mod.Breadcrumb), {
	ssr: false,
})

export default function Page() {
	const { data } = useGetProjectsGroupByYearQuery({})

	const projects = React.useMemo(
		() =>
			!_.isEmpty(data?.data?.data)
				? _.uniqBy(data.data.data, 'year').map(({ project_count, ...props }) => ({
						...props,
						project_count: _.sumBy(_.filter(data.data.data, ['year', props.year]), 'project_count'),
				  }))
				: [],
		[data?.data?.data]
	)

	return (
		<React.Fragment>
			<Breadcrumb
				separator=">"
				items={[
					{
						title: 'Galery',
					},
					{
						title: 'Projects',
					},
				]}
			/>

			<div className="flex flex-row flex-wrap gap-6">
				{projects.map(({ project_count, year }, i) => (
					<YearCard key={i} projectCount={project_count} year={year} />
				))}
			</div>
		</React.Fragment>
	)
}
