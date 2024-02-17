'use client'

import { useGetProfileQuery, useUpdateProfileMutation } from '@/redux/services/profileApi'
import Input from './components/Input'
import { useEffect, useState } from 'react'
import TextArea from './components/TextArea'
import Button from './components/Button'
import { Toast } from '@/utils/SweetAlert'

export default function Page() {
	const [name, setName] = useState('')
	const [jobs, setJobs] = useState('')
	const [descriptions, setDescriptions] = useState('')
	const [summary, setSummary] = useState('')

	const { data: user } = useGetProfileQuery()
	const [update, { isLoading }] = useUpdateProfileMutation()

	useEffect(() => {
		if (user?.data) {
			const { name, detail_user } = user.data

			setName(name)

			if (detail_user) {
				const { jobs, descriptions, summary } = detail_user

				setJobs(jobs)
				setDescriptions(descriptions)
				setSummary(summary)
			}
		}
	}, [user])

	const onCancel = () => {
		window.location.reload()
	}
	const handleOnSave = () => {
		if (!isLoading) {
			update({ data: { name, jobs, descriptions, summary } }).then(({ data }) => {
				if (data) {
					Toast.fire({
						icon: 'success',
						title: data?.message,
					})
				}
			})
		}
	}

	return (
		<div className="grid gap-6">
			<div className="grid gap-2">
				<div
					className="flex items-center justify-between bg-primary"
					style={{ borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
				>
					<p className="px-3 py-3 text-white" style={{ fontWeight: 500 }}>
						User Profile
					</p>
				</div>
				<Input id="name" label="Nama" type="text" onChange={setName} value={name} />
				<Input id="job" label="Pekerjaan" type="text" onChange={setJobs} value={jobs} />
				<TextArea
					id="descriptions"
					label="Deskripsi"
					onChange={setDescriptions}
					value={descriptions}
					rows={4}
					maxlength={500}
				/>
				<TextArea id="summary" label="Summary" onChange={setSummary} value={summary} rows={4} maxlength={500} />
			</div>

			<div className="flex flex-row justify-center mt-5 ">
				<button
					type="button"
					onClick={onCancel}
					className={[
						'text-white select-none text-center bg-red-400 disabled:bg-primary/50 hover:bg-red-900/50 focus:ring-4 focus:outline-none focus:ring-red-950 font-medium rounded-xl text-sm px-5 py-2.5 transition-all',
						,
					].join(' ')}
				>
					Batal
				</button>
				<Button onClick={handleOnSave} label="Simpan" className="px-8 mx-2 w-fit" disabled={isLoading} />
			</div>
		</div>
	)
}
