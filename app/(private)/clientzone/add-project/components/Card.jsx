import { cn } from '@/utils'
import React from 'react'

export default function Card({ className, children, layout, ...props }) {
	const _className = cn(
		'bg-white shadow-md rounded-2xl flex',
		layout === 'column' && 'flex-col',
		layout === 'row' && 'flex-row',
		className
	)

	return (
		<div className={_className} {...props}>
			{children}
		</div>
	)
}
