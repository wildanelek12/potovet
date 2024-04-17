import React from 'react'
import { ContentHeader, ProfileSection } from './partials'

export const metadata = {
	title: 'POTOVET | Project',
}

export default function Layout({ children }) {
	return (
		<div className="flex flex-col flex-1 h-auto font-sans ">
			<ProfileSection />

			<div className="flex flex-col items-center">
				<ContentHeader />

				<div className="container flex flex-col flex-1 gap-4 p-4">{children}</div>
			</div>
		</div>
	)
}
