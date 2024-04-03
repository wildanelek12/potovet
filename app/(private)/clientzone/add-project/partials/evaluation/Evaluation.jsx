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
				template={"<ul><li><strong>&nbsp;&nbsp;</strong></li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>( Contoh : Selama pengembangan produk, wawasan tambahan yang diperoleh berada pada tahapan empati dan desain.</li><li>&nbsp; &nbsp;Tahapan empati pengembang mendapatkan wawasan baru berkaitan dengan penggunaan metode untuk tujuan bagaimana menggali kebutuhan user dalam penggunaan produk, sehingga ditemukan pola jawaban user.</li><li>&nbsp; Sedangkan tahapan desain, pengembang mendapatkan pengalaman bagaimana membuat desain interface dengan task yang cukup banyak menjadi lebih mudah sehingga user dapat membuat dokumen dengan cepat.)</li></ul>"}
			/>

			<RichTextEditor
				label="Project Challenge"
				value={formData.challenge}
				onChange={(val) => setFormData('challenge', val)}
				hintText={`Isikan deskripsi yang memuat tentang 
				tantangan atau kesulitan yang didapat saat 
				pengembangan produk. poin ini juga menjelaskan 
				manfaat penerapan produk dalam lingkup profesional.`}
				template={"<ul><li><strong>- Tantangan dalam pengembangan produk :</strong></li><li><strong>&nbsp; </strong>( Contoh : Tantangan utama yang dihadapi dalam pengembangan produk ini adalah menentukan bentuk aplikasi apa yang harus digunakan untuk produk ini. jumlah task yang dimiliki menjadi pertimbangan penentuan bentuk aplikasi. selain itu, penentuan tahap untuk user melakukan suatu aktivitas, membutuhkan eksperimen yang panjang sehingga terbentuk tahapan yang ideal bagi user.)</li></ul><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><ul><li><strong>- Definisi Masalah :</strong></li><li><strong>&nbsp; </strong>( Contoh : Produk ini dapat membantu user untuk mengembangkan dokumen hasil belajar secara sistematis dan detail sesuai kebutuhan dunia industri. selain itu, produk ini juga dapat mempersingkat waktu pengembangan dokumen hasil belajar dan meningkatkan kesempatan user untuk masuk dalam dunia industri yang dituju.)</li></ul><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>"}
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
