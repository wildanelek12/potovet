import Button from '@/components/Button'
import React from 'react'
import { useForm } from './hooks'
import { useIntroductionStore } from './store'
import { categoriesData, jobsData } from './constants'
import { DatePicker, FileInput, Input, RichTextEditor, Select } from '../../components'
import dynamic from 'next/dynamic'

const RichTextEditor2 = dynamic(() => import('../../../../Parts/RichTextEditor'), { ssr: false })

export default function Introduction() {
	const { formData, setFormData, getIsFilledFormData } = useIntroductionStore()
	const formProps = useForm()

	return (
		<div className="flex flex-col">
			<div className="flex flex-row items-center justify-between">
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
						selected={formData.category_id}
						onChange={(val) => setFormData('category_id', val)}
					/>

					{/* {[2, 4].includes(formData.category_id) ? (
						<>
							<Input
								id="partner-name"
								label="Project Partner"
								isRequired={false}
								type="text"
								value={''}
								onChange={(e) => console.log(e)}
								hintText={'Isikan nama industri yang menjadi client dalam pengembangan produk.'}
								isHint
							/>

							<FileInput
								label="Recommendation Letter"
								types={['jpg', 'png', 'jpeg']}
								onChange={(e) => console.log(e)}
								value={formData}
								fileOrFiles={project.project_image}
								previewClassName="w-full grid-cols-4"
								preview
								multiple
								isRequired={true}
								isHint={true}
								placeholder="File belum dipilih"
								hintText={
									'Isikan lampiran surat kerjasama atau surat pernah bekerja dengan industri dalam mengembangkan product.'
								}
							/>
						</>
					) : null} */}

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
						selected={formData.job_role}
						onChange={(e) => setFormData('job_role', e)}
					/>

					<FileInput
						label="Project Cover"
						types={['jpg', 'png', 'jpeg']}
						onChange={(e) => setFormData('project_cover', e)}
						value={formData.project_cover}
						fileOrFiles={formData.project_cover}
						previewClassName="w-full grid-cols-4"
						preview
					/>

					<RichTextEditor2
						label="Project Overview"
						value={formData.overview}
						onChange={(e) => setFormData('overview', e)}
						hintText="Isikan dengan deskripsi pengantar pengembangan produk. poin ini memuat deskripsi tentang pendefinisian masalah yang ingin dipecahkan, peranan dalam pengembangan produk, hal menarik yang ditemukan dalam masalah, dan solusi yang dipilih untuk di implementasikan."
					/>

					<div className="flex flex-row justify-end">
						<Button
							type="submit"
							disabled={!getIsFilledFormData()}
							className="px-10 text-white transition-all rounded-xl w-fit bg-primary hover:bg-primary/80 disabled:!bg-gray-200"
							label="Next"
						/>
					</div>
				</form>
			</div>
		</div>
	)
}
