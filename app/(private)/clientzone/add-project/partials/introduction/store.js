import _ from 'lodash'
import { create } from 'zustand'

const initialFormData = {
	title: '',
	category_id: 0,
	project_partner: '',
	recommendation_letter: [],
	project_start_at: null,
	project_end_at: null,
	job_role: 0,
	project_cover: [],
	overview: '',
}

export const useIntroductionStore = create((set, get) => ({
	formData: initialFormData,

	getIsFilledFormData: () => {
		const requiredData = _.omit(get().formData, ['project_partner', 'recommendation_letter'])

		const isFilledObject = (data) => _.every(data, (v) => (_.isArray(v) ? !_.isEmpty(v) : !!v))

		if (!isFilledObject(requiredData)) return false

		if ([2, 4].includes(get().formData.category_id)) {
			if (!isFilledObject(_.pick(get().formData, ['project_partner', 'recommendation_letter']))) {
				return false
			}
		}

		return true
	},
	setFormData: (key, data) => set({ formData: _.set(get().formData, key, data) }),
	resetFormData: () => set({ formData: initialFormData }),
}))
