import { Toast } from '@/utils/SweetAlert'
import { useEditProjectStore } from '../../../store'
import { useEvaluationStore } from '../store'
import { useCreateOrUpdateProjectMutation } from '@/redux/services/projectApi'
import { useIntroductionStore } from '../../introduction/store'
import { useProcessStore } from '../../process/store'
import { useRouter } from 'next/navigation'

export const useForm = () => {
	const { currentId, resetData } = useEditProjectStore()
	const { resetFormData: resetIntroductionFormData } = useIntroductionStore()
	const { resetFormData: resetProcessFormData } = useProcessStore()
	const { formData: userFormData, resetFormData: resetEvaluationFormData } = useEvaluationStore()

	const [createOrUpdateProject, { isLoading }] = useCreateOrUpdateProjectMutation()

	const router = useRouter()

	const handleOnSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData()

		formData.append('id', currentId)
		formData.append('experience', userFormData.experience)
		formData.append('challenge', userFormData.challenge)

		/**
		 * store data to backend when success
		 * redirect to page portfolio list and reset all data
		 */
		if (!isLoading) {
			createOrUpdateProject({
				params: {
					step: 'step-3',
				},
				data: formData,
			}).then(({ data }) => {
				if (data) {
					router.push('/clientzone/project-list')

					resetData()
					resetIntroductionFormData()
					resetProcessFormData()
					resetEvaluationFormData()

					Toast.fire({ icon: 'success', title: 'Portfolio berhasil dipublish.' })
				}
			})
		}
	}

	return {
		onSubmit: handleOnSubmit,
	}
}
