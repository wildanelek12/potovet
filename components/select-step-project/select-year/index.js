import CardYear from '@/components/year-card'
import React from 'react'

export default function SelectYear() {
	return (
		<div className="flex-1 w-full grid-cols-5 gap-8 px-16 mt-4 lg:grid md:grid-cols-3 sm:grid-cols-1 ">
			<CardYear />
		</div>
	)
}
