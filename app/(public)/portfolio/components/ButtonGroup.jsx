import React from 'react'

import { IconButton, WorkModal, EducationModal, InterestModal, SkillModal, SosmedModal } from '.'
import { useProjectStore } from '../store'

export default function ButtonGroup({ data }) {
	const {
		isOpenEducationModal,
		isOpenWorkModal,
		isOpenSkillModal,
		isOpenInterestModal,
		isOpenSosmedModal,
		toggleEducationModal,
		toggleWorkModal,
		toggleSkillModal,
		toggleInterestModal,
		toggleSosmedModal,
	} = useProjectStore()

	return (
		<React.Fragment>
			<div className="flex flex-row gap-4 mt-4">
				<div onClick={toggleEducationModal} className="relative group">
					<IconButton src="/education.svg" />

					<span className="absolute z-10 p-2 mt-2 text-xs text-white scale-0 bg-gray-800 rounded top-full group-hover:scale-100 whitespace-nowrap">
						Education
					</span>
				</div>

				<div onClick={toggleWorkModal} className="relative group">
					<IconButton src="/suitcase-3.png" />

					<span className="absolute z-10 p-2 mt-2 text-xs text-white scale-0 bg-gray-800 rounded top-full group-hover:scale-100 whitespace-nowrap">
						Work Experience
					</span>
				</div>

				<div onClick={toggleSkillModal} className="relative group">
					<IconButton src="/skills.png" />

					<span className="absolute z-10 p-2 mt-2 text-xs text-white scale-0 bg-gray-800 rounded top-full group-hover:scale-100 whitespace-nowrap">
						Skills
					</span>
				</div>

				<div onClick={toggleInterestModal} className="relative group">
					<IconButton src="/magnifying-glass.png" />

					<span className="absolute z-10 p-2 mt-2 text-xs text-white scale-0 bg-gray-800 rounded top-full group-hover:scale-100 whitespace-nowrap">
						Interest
					</span>
				</div>

				<div onClick={toggleSosmedModal} className="relative group">
					<IconButton src="/sosmed.svg" />

					<span className="absolute z-10 p-2 mt-2 text-xs text-white scale-0 bg-gray-800 rounded top-full group-hover:scale-100 whitespace-nowrap">
						Social Media
					</span>
				</div>
			</div>

			<EducationModal
				data={data?.detail_user?.educations}
				isOpen={isOpenEducationModal}
				onClose={toggleEducationModal}
			/>
			<WorkModal data={data?.detail_user?.work_experiences} isOpen={isOpenWorkModal} onClose={toggleWorkModal} />
			<SkillModal data={data?.detail_user?.skills} isOpen={isOpenSkillModal} onClose={toggleSkillModal} />
			<InterestModal
				data={data?.detail_user?.interests}
				isOpen={isOpenInterestModal}
				onClose={toggleInterestModal}
			/>
			<SosmedModal
				data={{
					email: data?.email,
					instagram: data?.detail_user?.instagram,
					linkedin: data?.detail_user?.linkedin,
					facebook: data?.detail_user?.facebook,
				}}
				isOpen={isOpenSosmedModal}
				onClose={toggleSosmedModal}
			/>
		</React.Fragment>
	)
}
