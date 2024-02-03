import Button from '@/components/Button'
import React from 'react'
import dynamic from 'next/dynamic'
import { useEvaluationStore } from './store'
import { useAddProjectStore } from '../../store'
import { useForm } from './hooks'

const RichTextEditor = dynamic(() => import('../../../../Parts/RichTextEditor'), { ssr: false })

export default function Evaluation() {
	const { backwardStep } = useAddProjectStore()
	const { formData, setFormData, getIsFilledFormData } = useEvaluationStore()
	const formProps = useForm()

	return (
		<form className="flex flex-col w-full gap-6" {...formProps}>
			<RichTextEditor
				label="Project Experience"
				value={formData.experience}
				onChange={(val) => setFormData('experience', val)}
				hintText={`Isikan pengalaman yang didapat saat 
				pengembangan produk.`}
			/>

			<RichTextEditor
				label="Project Challenge"
				value={formData.challenge}
				onChange={(val) => setFormData('challenge', val)}
				hintText={`Isikan deskripsi yang memuat tentang 
				tantangan atau kesulitan yang didapat saat 
				pengembangan produk. poin ini juga menjelaskan 
				manfaat penerapan produk dalam lingkup profesional.`}
			/>

			<div className="flex flex-row justify-between">
				<Button
					label="Kembali"
					type="button"
					className="text-white transition-all rounded-md w-36 bg-secondary hover:bg-secondary/80"
					onClick={backwardStep}
				/>

				<Button
					label="Publish"
					type="submit"
					disabled={!getIsFilledFormData()}
					className="w-36 text-white transition-all rounded-md bg-primary hover:bg-primary/80 disabled:!bg-primary/25"
				/>
			</div>
		</form>
	)
}
