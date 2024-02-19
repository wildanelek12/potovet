'use client'

import React from 'react'
import { ProjectCard } from './components'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Breadcrumb = dynamic(() => import('antd').then((mod) => mod.Breadcrumb), {
	ssr: false,
})

export default function Page({ params }) {
	return (
		<React.Fragment>
			<Breadcrumb
				separator=">"
				items={[
					{
						title: 'Galery',
					},
					{
						title: <Link href="/project">Projects</Link>,
						href: null,
					},
					{
						title: <Link href={`/project/${params.year}`}>{params.year}</Link>,
						href: null,
					},
					{
						title: params.month,
					},
				]}
			/>

			<div className="flex flex-row flex-wrap gap-6">
				{[...new Array(5)].map((_, i) => (
					<ProjectCard key={i} />
				))}
			</div>
		</React.Fragment>
	)
}
