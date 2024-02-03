import { Toast } from '@/utils/SweetAlert'
import { useAddProjectStore } from '../../../store'
import { useIntroductionStore } from '../store'

export const useForm = () => {
	const { currentId, setCurrentId, forwardStep } = useAddProjectStore()
	const { formData: userFormData } = useIntroductionStore()

	const handleOnSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData()

		formData.append('title', userFormData.title)
		formData.append('category_id', userFormData.category_id)

		if ([2, 4].includes(userFormData.category_id)) {
			formData.append('project_partner', userFormData.project_partner)
			formData.append('recommendation_letter', userFormData.recommendation_letter[0])
		}

		formData.append('project_start_at', userFormData.project_start_at)
		formData.append('project_end_at', userFormData.project_end_at)
		formData.append('job_role', userFormData.job_role)
		formData.append('project_cover', userFormData.project_cover[0])
		formData.append('overview', userFormData.overview)

		/**
		 * TODO: store data to backend when success,
		 * change to next step and set current id
		 */
		forwardStep()
		Toast.fire({ icon: 'success', title: 'Data berhasil disimpan.' })
	}

	return {
		onSubmit: handleOnSubmit,
	}
}
