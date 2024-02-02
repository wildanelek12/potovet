'use client'

import React from 'react'
import Stepper from '../../Parts/Stepper'
import { Card } from './components'
import { stepData } from './constants'
import { useAddProjectStore } from './store'
import Contents from './partials'

export default function Page() {
	const { currentStep } = useAddProjectStore()

	return (
		<div className="flex flex-col gap-4 col-span-full">
			<p className="text-2xl font-bold text-primary">Create a Portfolio</p>

			<Card layout="column" className="gap-2 p-8">
				<Stepper items={stepData} activeIndex={currentStep} />

				<Contents />
			</Card>
		</div>
	)
}
