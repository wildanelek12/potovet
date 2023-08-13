import moment from "moment"
import React from "react"

export default function ListWork(props) {
	return (
		<li className="mb-10 ml-4">
			<div className="absolute w-3 h-3 bg-secondary rounded-full  -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
			<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props?.data?.title}</h3>
			<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
				{moment(props?.data?.start_date).format("DD MMMM")} - {moment(props?.data?.end_date).format("DD MMMM")}
			</time>
			<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{props?.data?.description}</p>
		</li>
	)
}
