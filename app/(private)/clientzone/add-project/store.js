import { create } from 'zustand'

const initialData = {
	currentId: undefined,
	currentStep: 0,
}

export const useAddProjectStore = create((set) => ({
	...initialData,

	setCurrentId: (currentId) => set({ currentId }),
	setCurrentStep: (currentStep) => set({ currentStep }),
	backwardStep: () => set((state) => ({ currentStep: state.currentStep > 0 ? state.currentStep - 1 : 0 })),
	forwardStep: () => set((state) => ({ currentStep: state.currentStep < 2 ? state.currentStep + 1 : 2 })),
	resetData: () => set(initialData),
}))
