'use client'

import Card from '../../Parts/Card'
import { Chart } from '../../Parts/Chart'
import { AiFillAlert } from 'react-icons/ai'
import TopItemCard from '../../Parts/TopItemCard'
import { categoriesData } from './constants'
import React from 'react'
import { useGetDashboardQuery } from '@/redux/services/dashboard'

export default function Page() {
	const [category, setCategory] = React.useState(categoriesData[0])

	const { data } = useGetDashboardQuery({ searchParams: { category: category.id } })

	const handleOnClickPrevNext = (e) => {
		const categoryIndex = categoriesData.indexOf(category)
		const categoryLength = categoriesData.length

		switch (e.target.id) {
			case 'prev':
				setCategory(categoryIndex > 0 ? categoriesData[categoryIndex - 1] : categoriesData[categoryLength - 1])
				break

			case 'next':
				setCategory(categoryIndex < categoryLength - 1 ? categoriesData[categoryIndex + 1] : categoriesData[0])
				break

			default:
				break
		}
	}

	return (
		<React.Fragment>
			<div className="flex flex-row items-center col-span-full lg:col-12">
				<p className="flex-1 text-xl font-bold text-center">Dashboard</p>

				<div className="inline-flex justify-end rounded-md shadow-sm justify-self-end" role="group">
					<p className="text-center min-w-[10rem] px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg select-none hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
						{category.name}
					</p>

					<button
						id="prev"
						type="button"
						onClick={handleOnClickPrevNext}
						className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
					>
						{'<'}
					</button>
					<button
						id="next"
						type="button"
						onClick={handleOnClickPrevNext}
						className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
					>
						{'>'}
					</button>
				</div>
			</div>

			<Card className="col-span-full lg:col-span-8 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
				<div className="flex h-full">
					<div className="flex flex-col flex-1 pt-4 ">
						<p className="ml-8 font-semibold text-primary">Portfolio Summary</p>
						<div className="grid h-full grid-cols-2 mt-2 bg-primary">
							<div className="grid p-2 text-center border bg">
								<h2 className="text-sm font-light text-white ">Total</h2>
								<p className="mt-2 text-4xl font-bold text-white">{data?.data?.total}</p>
							</div>
							<div className="grid p-2 text-center border bg">
								<h2 className="text-sm font-light text-white ">Rating</h2>
								<p className="text-4xl font-bold text-white">64</p>
							</div>
				
						</div>
					</div>
					<div className="flex-1 p-8 ">
						<div className="grid gap-2 text-center place-items-center">
							<div className="justify-center">
								<AiFillAlert size={48} color="#E6846E" />
							</div>

							<p className="text-base font-normal">
								{"Portfolio draft dan publish tersimpan otomatis dalam menu 'My Portofolio'"}
							</p>
						</div>
					</div>
				</div>
			</Card>

			{data?.data?.recent_projects?.length > 0 ? (
				<Card className="col-span-full h-full 2xl:col-span-4 p-8 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
					<p className="font-semibold text-primary">Recent Project</p>
					<div className="flex flex-col mt-2 gap-y-6">
						{data?.data?.recent_projects?.map(({ id, title, images }, i) => (
							<TopItemCard key={id} src={`/${images[0]?.image_path}`} name={title} rank={i + 1} />
						))}
					</div>
				</Card>
			) : null}

			<Card className="col-span-full lg:col-span-12 p-8 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
				<Chart data={data?.data?.projects} />
			</Card>

		
		</React.Fragment>
	)
}
