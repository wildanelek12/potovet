'use client'

import React from 'react'
import { CategoryFilter, LibraryCard, Card, Paginate } from './components'
import { useGetLibrariesQuery } from '@/redux/services/libraryApi'
import { useLibraryStore } from './store'

export default function Page() {
	const { searchParams } = useLibraryStore()
	const { data } = useGetLibrariesQuery({ searchParams })

	return (
		<div className="flex flex-col gap-4 col-span-full">
			<p className="text-2xl font-bold text-primary">My Library</p>

			<Card layout="column" className="gap-6 p-8">
				<CategoryFilter />

				<div className="flex flex-row flex-wrap gap-4">
					{data?.data?.data?.map((library) => (
						<LibraryCard key={library.id} data={library} />
					))}
				</div>

				<Paginate />
			</Card>
		</div>
	)
}
