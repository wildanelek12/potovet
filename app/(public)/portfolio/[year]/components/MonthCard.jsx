import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import moment from 'moment'
import _ from 'lodash'

export default function MonthCard({ projectCount, month }) {
	const pathname = usePathname()

	const generatePathname = React.useMemo(() => `${pathname}/${_.padStart(month, 2, '0')}`, [pathname, month])

	return (
		<Link
			href={generatePathname}
			className="flex flex-col gap-4 min-w-[24rem] px-8 py-6 rounded-lg bg-primary justify-center items-center bg-no-repeat bg-cover"
			scroll={false}
			style={{
				backgroundImage: `linear-gradient(180deg, rgba(12, 173, 183, 0.95), rgba(230, 132, 110, 0.9)), url("/bg-profile.jpg")`,
			}}
		>
			<div className="flex flex-col items-center justify-center gap-2">
				<p className="text-3xl font-bold text-white uppercase">{moment(String(month)).format('MMMM')}</p>
				<p className="text-xl font-normal text-white">{projectCount} Project</p>
			</div>

			<hr className="w-full" />

			<Image width={50} height={50} src={'/arrow.svg'} alt="" />
		</Link>
	)
}
