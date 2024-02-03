import _ from 'lodash'
import { create } from 'zustand'

const initialFormData = {
	experience: '',
	challenge: '',
}

export const useEvaluationStore = create((set, get) => ({
	formData: initialFormData,

	getIsFilledFormData: () => _.every(get().formData, (v) => !!v),
	setFormData: (key, data) => set({ formData: _.set(get().formData, key, data) }),
	resetFormData: () => set({ formData: initialFormData }),
}))
