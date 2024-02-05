import _ from 'lodash'
import { create } from 'zustand'

const initialFormData = {
	title: '',
	category_id: 0,
	project_partner: '',
	recommendation_letter: [],
	preview_recommendation_letter: [],
	project_start_at: null,
	project_end_at: null,
	job_role: 0,
	project_cover: [],
	preview_project_cover: [],
	overview: '',
}

export const useIntroductionStore = create((set, get) => ({
	formData: _.clone(initialFormData),

	getIsFilledFormData: () => {
		const requiredData = _.omit(get().formData, [
			'project_partner',
			'recommendation_letter',
			'project_cover',
			'preview_project_cover',
			'preview_recommendation_letter',
		])

		const isFilledObject = (data) => _.every(data, (v) => (_.isArray(v) ? !_.isEmpty(v) : !!v))

		if (!isFilledObject(requiredData)) return false

		if ([2, 4].includes(get().formData.category_id)) {
			const someFilledData = _.pick(get().formData, ['recommendation_letter', 'preview_recommendation_letter'])

			if (!get().formData.project_partner || !_.some(someFilledData, (v) => !_.isEmpty(v))) {
				return false
			}
		}

		return true
	},
	setFormData: (key, data) => set({ formData: _.set(get().formData, key, data) }),
	setInitialFormData: (data) =>
		set({
			formData: _.assign(
				get().formData,
				_.pick(data, [
					'title',
					'project_partner',
					'project_start_at',
					'project_end_at',
					'job_role',
					'overview',
				]),
				{
					category_id: data.category.id,
					preview_project_cover: [data.images.find(({ type }) => type === 'cover')?.image_path],
					preview_recommendation_letter: [
						data.images.find(({ type }) => type === 'recommendation_letter')?.image_path,
					],
				}
			),
		}),
	resetFormData: () => set({ formData: initialFormData }),
}))
