import { Toast } from '@/utils/SweetAlert'
import { useEditProjectStore } from '../../../store'
import { useIntroductionStore } from '../store'
import { useCreateOrUpdateProjectMutation } from '@/redux/services/projectApi'

export const useForm = () => {
	const { currentId, forwardStep } = useEditProjectStore()
	const { formData: userFormData } = useIntroductionStore()

	const [createOrUpdateProject, { isLoading }] = useCreateOrUpdateProjectMutation()

	const handleOnSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData()

		if (typeof currentId !== 'undefined') formData.append('id', currentId)

		formData.append('title', userFormData.title)
		formData.append('category_id', userFormData.category_id)

		if ([2, 4].includes(userFormData.category_id)) {
			formData.append('project_partner', userFormData.project_partner)
			if (userFormData.recommendation_letter?.[0])
				formData.append('recommendation_letter', userFormData.recommendation_letter[0])
		}

		formData.append('project_start_at', userFormData.project_start_at)
		formData.append('project_end_at', userFormData.project_end_at)
		formData.append('job_role', userFormData.job_role)
		if (userFormData.project_cover?.[0]) formData.append('project_cover', userFormData.project_cover[0])
		formData.append('overview', userFormData.overview)

		/**
		 * store data to backend when success,
		 * change to next step and set current id
		 */
		if (!isLoading) {
			createOrUpdateProject({
				params: {
					step: 'step-1',
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
