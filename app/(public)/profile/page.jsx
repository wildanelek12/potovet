"use client"

import { useGetProfileQuery } from "@/redux/services/profileApi"
import Input from "./components/Input"
import { useEffect, useState } from "react"
import TextArea from "./components/TextArea"
import Button from "./components/Button"

export default function Page() {
	const [name, setName] = useState("")
	const [jobs, setJobs] = useState("")
	const [descriptions, setDescriptions] = useState("")
	const [summary, setSummary] = useState("")

	const { data: user } = useGetProfileQuery()

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

	return (
		<div className="grid gap-6">
			<div className="grid gap-2">
				<Input id="name" label="Nama" type="text" onChange={setName} value={name} />
				<Input id="job" label="Pekerjaan" type="text" onChange={setJobs} value={jobs} />
				<TextArea id="descriptions" label="Deskripsi" onChange={setDescriptions} value={descriptions} rows={4} />
				<TextArea id="summary" label="Summary" onChange={setSummary} value={summary} rows={4} />
			</div>

			<Button onClick={() => console.log("click!")} label="Simpan" className="px-8 mx-auto w-fit" />
		</div>
	)
}
