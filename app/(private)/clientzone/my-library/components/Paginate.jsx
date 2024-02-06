'use client'

import React from 'react'
import ReactPaginate from 'react-paginate'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Paginate() {
	const [currentPage, setCurrentPage] = React.useState(0)

	const defaultItemClassName =
		'border border-blue-700 flex flex-row w-8 h-8 rounded-md justify-center items-center text-blue-700 text-sm font-medium hover:bg-blue-700/5 transition-colors'

	return (
		<div className="flex flex-row items-center justify-center w-full">
			<ReactPaginate
				breakLabel=""
				className="flex flex-row items-center gap-2"
				nextLinkClassName={defaultItemClassName}
				previousLinkClassName={defaultItemClassName}
				pageLinkClassName={defaultItemClassName}
				activeLinkClassName="bg-blue-700 text-white hover:!bg-blue-700/80"
				nextLabel={<FiChevronRight />}
				onPageChange={({ selected }) => setCurrentPage(selected)}
				pageRangeDisplayed={currentPage !== 1 ? 3 : 2}
				marginPagesDisplayed={0}
				forcePage={currentPage}
				pageCount={10}
				previousLabel={<FiChevronLeft />}
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}
