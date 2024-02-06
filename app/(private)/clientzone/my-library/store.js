import { create } from 'zustand'
import _ from 'lodash'

const initialData = {
	searchParams: {
		page: 1,
		per_page: 10,
		category_id: undefined,
	},
}

export const useLibraryStore = create((set) => ({
	..._.clone(initialData),

	setSearchParams: (searchParams) => set({ searchParams }),
}))
