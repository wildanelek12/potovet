import { Toast } from '@/utils/SweetAlert'
import { useAddProjectStore } from '../../../store'
import { useEvaluationStore } from '../store'

export const useForm = () => {
	const { currentId, resetData } = useAddProjectStore()
	const { formData: userFormData } = useEvaluationStore()

	const handleOnSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData()

		formData.append('experience', userFormData.experience)
		formData.append('challenge', userFormData.challenge)

		/**
		 * TODO: store data to backend when success
		 * redirect to page portfolio list and reset all data
		 */
		resetData()
		Toast.fire({ icon: 'success', title: 'Portfolio berhasil dipublish.' })
	}

	return {
		onSubmit: handleOnSubmit,
	}
}
