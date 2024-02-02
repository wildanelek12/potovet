import { create } from 'zustand'

export const useAddProjectStore = create((set) => ({
	currentStep: 0,

	setCurrentStep: (currentStep) => set({ currentStep }),
}))
