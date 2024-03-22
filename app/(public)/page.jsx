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
				{/* <div id="category" className="flex flex-row space-x-4">
          <Kategori title="Mobile" isActive={true} />
          <Kategori title="Website" />
          <Kategori title="Design" />
          <Kategori title="Paper" />
        </div> */}
				<p className="mt-12 text-4xl font-bold leading-snug tracking-wide text-center text-white">
					Explore the world’s leading <br /> design portfolios
				</p>
				<p className="mt-8 text-lg font-normal leading-snug tracking-wide text-center text-white">
					Millions of designers and agencies around the world showcase their portfolio work on <br />
					Dribbble - the home to the world’s best design and creative professionals.
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
