import { Toast } from '@/utils/SweetAlert'
import { useEditProjectStore } from '../../../store'
import { useProcessStore } from '../store'
import { useCreateOrUpdateProjectMutation } from '@/redux/services/projectApi'

export const useForm = () => {
	const { currentId, forwardStep } = useEditProjectStore()
	const { formData: userFormData } = useProcessStore()

	const [createOrUpdateProject, { isLoading }] = useCreateOrUpdateProjectMutation()

	const handleOnSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData()

		formData.append('id', currentId)
		formData.append('methodology', userFormData.methodology)
		formData.append('findings', userFormData.findings)
		formData.append('sketches', userFormData.sketches)
		formData.append('visual', userFormData.visual)
		formData.append('prototype_url', userFormData.prototype_url)
		formData.append('git_url', userFormData.git_url)

		/**
		 * store data to backend when success,
		 * change to next step
		 */
		if (!isLoading) {
			createOrUpdateProject({
				params: {
					step: 'step-2',
				},
				data: formData,
			}).then(({ data }) => {
				if (data) {
					forwardStep()

					Toast.fire({ icon: 'success', title: 'Data berhasil disimpan.' })
				}
			})
		}
	}

	return {
		onSubmit: handleOnSubmit,
	}
}
