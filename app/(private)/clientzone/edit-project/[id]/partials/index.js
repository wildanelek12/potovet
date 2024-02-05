import React from 'react'
import { useEditProjectStore } from '../store'
import dynamic from 'next/dynamic'

const contents = {
	0: dynamic(() => import('./introduction')),
	1: dynamic(() => import('./process')),
	2: dynamic(() => import('./evaluation')),
}

export default function Contents({ data }) {
	const store = useEditProjectStore()

	const RenderContent = React.useMemo(() => {
		return contents[store.currentStep]
	}, [store.currentStep])

	return (
		<React.Suspense>
			<RenderContent data={data} />
		</React.Suspense>
	)
}
