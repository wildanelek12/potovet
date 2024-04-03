import Button from '@/components/Button'
import React from 'react'
import { useForm } from './hooks'
import { useProcessStore } from './store'
import { Input } from '../../components'
import dynamic from 'next/dynamic'
import { useAddProjectStore } from '../../store'

const RichTextEditor = dynamic(() => import('../../../../Parts/RichTextEditor'), { ssr: false })

export default function Process() {
	const { backwardStep } = useAddProjectStore()
	const { formData, setFormData, getIsFilledFormData } = useProcessStore()
	const formProps = useForm()

	return (
		<form className="flex flex-col w-full gap-6" {...formProps}>
			<RichTextEditor
				label="Project Methodology"
				value={formData.methodology}
				onChange={(val) => setFormData('methodology', val)}
				hintText={`Isikan dengan cara atau pendekatan apa 
				yang dipilih untuk mengembangkan produk. 
				poin ini dilengkapi dengan argumentasi 
				mengapa cara atau pendekatan dapat dipilih.`}
				template={"<ul><li><strong>- Metode yang digunakan:</strong></li><li><strong>&nbsp; </strong>( Contoh : Metode ini dilaksanakan selama 2 bulan kepada 20 partisipan yang mengalami kesulitan terhadap suatu aktifitas secara bergantian ditempat yang dipilih oleh partisipan. Produk ini dikembangkan dengan metode kualitatif dengan cara interview kepada partisipan yang terlibat. pertanyaan yang dikembangkan berkaitan dengan kebutuhan, pengalaman, atau apa yang dirasakan partisipan terhadap suatu aktivitas.&nbsp;</li><li>&nbsp; Metode ini dibantu dengan digital tools seperti handphone dan microsoft word untuk merekam dan melakukan rekap hasil interview.)</li></ul><p>&nbsp; * <i>metode yang digunakan dapat lebih dari 1.</i></p><p><i>&nbsp;* partisipan dapat disebutkan secara jelas seperti orangtua, siswa SMA, petani, dll.</i></p><p><i>&nbsp;* contoh pertanyaan dapat diletakkan dalam bagian ini.</i></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><ul><li><strong>- Analisis Data :</strong></li><li><strong>&nbsp; </strong>( Contoh : Data dianalisis dengan cara memetakan jawaban partisipan dalam susunan jawaban yang sama untuk mendapatkan kelompok kebutuhan aktivitas.)</li></ul><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>"}
			/>

			<RichTextEditor
				label="Project Findings"
				value={formData.findings}
				onChange={(val) => setFormData('findings', val)}
				hintText={`Isikan dengan hasil penelitian yang 
				diperoleh selama pengembangan produk.`}
				template={"<ul><li><strong>- Metode yang digunakan:</strong></li><li><strong>&nbsp; </strong>( Contoh : Metode ini dilaksanakan selama 2 bulan kepada 20 partisipan yang mengalami kesulitan terhadap suatu aktifitas secara bergantian ditempat yang dipilih oleh partisipan. Produk ini dikembangkan dengan metode kualitatif dengan cara interview kepada partisipan yang terlibat. pertanyaan yang dikembangkan berkaitan dengan kebutuhan, pengalaman, atau apa yang dirasakan partisipan terhadap suatu aktivitas.&nbsp;</li><li>&nbsp; Metode ini dibantu dengan digital tools seperti handphone dan microsoft word untuk merekam dan melakukan rekap hasil interview.)</li></ul><p>&nbsp; * <i>metode yang digunakan dapat lebih dari 1.</i></p><p><i>&nbsp;* partisipan dapat disebutkan secara jelas seperti orangtua, siswa SMA, petani, dll.</i></p><p><i>&nbsp;* contoh pertanyaan dapat diletakkan dalam bagian ini.</i></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><ul><li><strong>- Analisis Data :</strong></li><li><strong>&nbsp; </strong>( Contoh : Data dianalisis dengan cara memetakan jawaban partisipan dalam susunan jawaban yang sama untuk mendapatkan kelompok kebutuhan aktivitas.)</li></ul><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>"}
			/>

			<RichTextEditor
				label="Project Sketches"
				value={formData.sketches}
				onChange={(val) => setFormData('sketches', val)}
				hintText={`Isikan tampilan produk dengan bentuk sketsa. 
				poin ini memuat tampilan produk dengan layout berwarna 
				hitam putih.`}
				isHaveTemplate = {false}
			/>

			<RichTextEditor
				label="Project Visual"
				value={formData.visual}
				onChange={(val) => setFormData('visual', val)}
				hintText={`Isikan tampilan produk dengan desain layout 
				berwarna.`}
				isHaveTemplate = {false}
			/>

			<Input
				id="prototype-url"
				label="Prototype URL"
				type="text"
				value={formData.prototype_url}
				onChange={(val) => setFormData('prototype_url', val)}
				isUrl
				isHint
				hintText={`Isikan tampilan produk yang dilengkapi dengan 
				interaksi. desain ini akan memberikan tampilan dan 
				interaksi dengan user secara langsung seperti produk 
				nyata.`}
			/>

			<Input
				id="git-url"
				label="Github URL"
				type="text"
				value={formData.git_url}
				onChange={(val) => setFormData('git_url', val)}
				isUrl
				isHint
				isRequired={false}
				hintText={`Isikan kode program yang digunakan untuk 
				mengembangkan produk.`}
			/>

			<div className="flex flex-row justify-between">
				<Button
					label="Kembali"
					type="button"
					className="text-white transition-all rounded-md w-36 bg-secondary hover:bg-secondary/80"
					onClick={backwardStep}
				/>

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
