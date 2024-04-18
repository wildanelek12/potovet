'use client'

import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

const labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

export function Chart({ data }) {
	const tempData = {
		labels,
		datasets: [
			{
				fill: true,
				label: 'Total Project',
				data: labels?.map((label) => data?.find((v) => v.month === label)?.count || 0),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	}

	return (
		<Line
			options={{
				responsive: true,
				plugins: {
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Total Project By Month',
					},
				},
				scales: {
					y: {
						beginAtZero: true,
						ticks: {
							stepSize: 1,
						},
					},
				},
			}}
			data={tempData}
		/>
	)
}
