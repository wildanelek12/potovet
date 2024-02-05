import _ from 'lodash'
import { create } from 'zustand'

const initialFormData = {
	experience: '',
	challenge: '',
}

export const useEvaluationStore = create((set, get) => ({
	formData: _.clone(initialFormData),

	getIsFilledFormData: () => _.every(get().formData, (v) => !!v),
	setFormData: (key, data) => set({ formData: _.set(get().formData, key, data) }),
	setInitialFormData: (data) =>
		set({
			formData: _.assign(get().formData, _.pick(data, ['experience', 'challenge'])),
		}),
	resetFormData: () => set({ formData: initialFormData }),
}))
