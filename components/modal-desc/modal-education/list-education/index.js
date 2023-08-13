import moment from "moment"
import React from "react"

export default function ListEducation(props) {
	return (
		<li className="mb-4 ml-4">
			<div className="absolute w-3 h-3 bg-secondary rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
			<h3 className="text-base font-semibold text-gray-900 dark:text-white">{props?.data?.title}</h3>
			<p className="mb-4 text-xs font-normal text-gray-500 dark:text-gray-400">
				{moment(props?.data?.start_date).format("YYYY")} - {moment(props?.data?.end_date).format("YYYY")}
			</p>
		</li>
	)
}
