'use client'

import SearchBoxHero from '@/components/search-bar-home'
import RecentSearch from '@/components/recent-search'
import FilterProject from '@/components/filter-project'
import Project from '@/components/project'
import { useGetFeedsQuery } from '@/redux/services/feedApi'

export default function Page() {
	const { data } = useGetFeedsQuery({})

	return (
		<div className="">
			<div
				id="hero"
				className="flex flex-col items-center py-16 bg-primary "
				style={{
					backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.7), rgba(0, 0, 0,0.3)),url("/bg-profile.jpg")`,
					height: 'fit-content',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<p className="mt-12 text-4xl font-bold leading-snug tracking-wide text-center text-white">
					Buat Portofoliomu Sekarang
				</p>
				<p className="mt-8 text-2xl font-normal leading-snug tracking-wide text-center text-white">
					"Berbagi pengalaman belajarmu dalam sebuah portofolio dan miliki kesempatan karir terbaik"
				</p>
				<SearchBoxHero className="mt-4" />
				<div className="flex flex-row items-center mt-8 space-x-4">
					<p className="text-white">Trending Search</p>

					<RecentSearch title={'Academic'} />
					<RecentSearch title={'Professional'} />
					<RecentSearch title={'Research'} />
					<RecentSearch title={'Informal Trainings'} />
					<RecentSearch title={'Case Study'} />
				</div>
			</div>

			<div id="company" className="flex flex-col px-32 py-8">
				<div className="w-fit">
					<FilterProject />
				</div>

				<div className="grid gap-5 mt-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
					{data?.data?.data?.map((val, i) => (
						<Project key={i} data={val} />
					))}
				</div>
			</div>
		</div>
	)
}
