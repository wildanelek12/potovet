import { Toast } from '@/utils/SweetAlert'
import { useAddProjectStore } from '../../../store'
import { useProcessStore } from '../store'

export const useForm = () => {
	const { currentId, forwardStep } = useAddProjectStore()
	const { formData: userFormData } = useProcessStore()

	const handleOnSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData()

		formData.append('methodology', userFormData.methodology)
		formData.append('findings', userFormData.findings)
		formData.append('sketches', userFormData.sketches)
		formData.append('visual', userFormData.visual)
		formData.append('prototype_url', userFormData.prototype_url)
		formData.append('git_url', userFormData.git_url)

		/**
		 * TODO: store data to backend when success,
		 * change to next step
		 */
		forwardStep()
		Toast.fire({ icon: 'success', title: 'Data berhasil disimpan.' })
	}

	return {
		onSubmit: handleOnSubmit,
	}
}
