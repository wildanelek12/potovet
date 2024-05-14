import Button from '@/components/Button'
import React from 'react'
import { useForm } from './hooks'
import { useIntroductionStore } from './store'
import { categoriesData, jobsData, projectOverviewTemplate } from './constants'
import { DatePicker, Input, Select } from '../../components'
import dynamic from 'next/dynamic'

const FileInput = dynamic(() => import('../../../../Parts/FileInput'), { ssr: false })
const RichTextEditor = dynamic(() => import('../../../../Parts/RichTextEditor'), { ssr: false })

export default function Introduction() {
	const { formData, setFormData, getIsFilledFormData } = useIntroductionStore()
	const formProps = useForm()

	return (
		<form className="flex flex-col w-full gap-6" {...formProps}>
			<Input
				id="project-name"
				label="Project Name"
				type="text"
				value={formData.title}
				onChange={(val) => setFormData('title', val)}
			/>

			<Select
				label="Project Categories"
				options={categoriesData}
				defaultValue={categoriesData[0]}
				selected={categoriesData.find(({ id }) => id === formData.category_id)}
				onChange={({ id }) => setFormData('category_id', id)}
			/>

			{[2, 4].includes(formData.category_id) ? (
				<>
					<Input
						id="partner-name"
						label="Project Partner"
						type="text"
						value={formData.project_partner}
						onChange={(val) => setFormData('project_partner', val)}
						hintText={`Isikan nama industri yang menjadi 
						client dalam pengembangan produk.`}
						isHint
					/>

					<FileInput
						label="Recommendation Letter"
						types={['jpg', 'png', 'jpeg']}
						value={formData.recommendation_letter}
						fileOrFiles={formData.recommendation_letter}
						onChange={(val) => setFormData('recommendation_letter', val)}
						previewClassName="w-full grid-cols-4"
						preview
						hintText={`Isikan lampiran surat kerjasama atau surat 
						pernah bekerja dengan industri dalam 
						mengembangkan product.`}
						isHint
					/>
				</>
			) : null}

			<DatePicker
				asSingle={false}
				value={{
					startDate: formData.project_start_at,
					endDate: formData.project_end_at,
				}}
				onChange={({ startDate, endDate }) => {
					setFormData('project_start_at', startDate)
					setFormData('project_end_at', endDate)
				}}
			/>

			<Select
				label="Job Role"
				options={jobsData}
				defaultValue={jobsData[0]}
				selected={jobsData.find(({ id }) => id === formData.job_role)}
				onChange={({ id }) => setFormData('job_role', id)}
			/>

			<FileInput
				label="Project Cover"
				types={['jpg', 'png', 'jpeg']}
				value={formData.project_cover}
				fileOrFiles={formData.project_cover}
				onChange={(val) => setFormData('project_cover', val)}
				previewClassName="w-full grid-cols-4"
				preview
			/>

			<RichTextEditor
				label="Project Overview"
				value={formData.overview}
				onChange={(val) => setFormData('overview', val)}
				hintText={`Isikan dengan deskripsi pengantar pengembangan produk. 
				poin ini memuat deskripsi tentang pendefinisian masalah yang ingin 
				dipecahkan, peranan dalam pengembangan produk, hal menarik yang 
				ditemukan dalam masalah, dan solusi yang dipilih untuk di 
				implementasikan.`}
				template={projectOverviewTemplate}
			/>

			<div className="flex flex-row justify-end">
				<Button
					label="Simpan"
					type="submit"
					disabled={!getIsFilledFormData()}
					className="w-36 text-white transition-all rounded-md bg-primary hover:bg-primary/80 disabled:!bg-primary/25"
				/>
			</div>
		</form>
	)
}
