import _ from 'lodash'
import { create } from 'zustand'

const initialFormData = {
	methodology: '',
	findings: '',
	sketches: '',
	visual: '',
	prototype_url: '',
	git_url: '',
}

export const useProcessStore = create((set, get) => ({
	formData: initialFormData,

	getIsFilledFormData: () => _.every(get().formData, (v) => !!v),
	setFormData: (key, data) => set({ formData: _.set(get().formData, key, data) }),
	resetFormData: () => set({ formData: initialFormData }),
}))
