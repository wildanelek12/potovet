import { create } from 'zustand'
import _ from 'lodash'

const initialData = {
	isOpenEducationModal: false,
	isOpenWorkModal: false,
	isOpenSkillModal: false,
	isOpenInterestModal: false,
	isOpenSosmedModal: false,
}

export const useProjectStore = create((set) => ({
	..._.clone(initialData),

	toggleEducationModal: () => set((state) => ({ isOpenEducationModal: !state.isOpenEducationModal })),
	toggleWorkModal: () => set((state) => ({ isOpenWorkModal: !state.isOpenWorkModal })),
	toggleSkillModal: () => set((state) => ({ isOpenSkillModal: !state.isOpenSkillModal })),
	toggleInterestModal: () => set((state) => ({ isOpenInterestModal: !state.isOpenInterestModal })),
	toggleSosmedModal: () => set((state) => ({ isOpenSosmedModal: !state.isOpenSosmedModal })),
	resetData: () => set(initialData),
}))
