'use client'

import React from 'react'
import Stepper from '../../../Parts/Stepper'
import { Card } from './components'
import { stepData } from './constants'
import { useEditProjectStore } from './store'
import Contents from './partials'
import { useGetProjectQuery } from '@/redux/services/projectApi'
import { notFound } from 'next/navigation'

export default function Page({ params }) {
	const { currentStep, setCurrentStep, setCurrentId, status, setStatus } = useEditProjectStore()

	const { data, error } = useGetProjectQuery({ params }, { skip: !params?.id })

	React.useEffect(() => {
		if (data?.data) {
			const { id, status } = data.data

			setCurrentId(id)
			setStatus(status)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.data])

	if (error?.status === 404) notFound()

	return (
		<div className="flex flex-col gap-4 col-span-full">
			<p className="text-2xl font-bold text-primary">Edit a Portfolio</p>

			<Card layout="column" className="gap-2 p-8">
				<Stepper items={stepData} activeIndex={currentStep} onChange={setCurrentStep} status={status} />

				<Contents data={data?.data} />
			</Card>
		</div>
	)
}
