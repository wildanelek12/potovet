import _ from 'lodash'
import { create } from 'zustand'

export const useIntroductionStore = create((set, get) => ({
	formData: {
		title: '',
		category_id: 0,
		project_start_at: null,
		project_end_at: null,
		job_role: 0,
		project_cover: [],
		overview: '',
	},
	getIsFilledFormData: () => _.every(get().formData, (v) => (_.isArray(v) ? !_.isEmpty(v) : !!v)),

	setFormData: (key, data) => set({ formData: _.set(get().formData, key, data) }),
}))
