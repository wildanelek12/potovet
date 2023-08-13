"use client"

import { useGetProfileQuery, useUpdateProfileMutation } from "@/redux/services/profileApi"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import Input from "../components/Input"
import { TrashIcon } from "@heroicons/react/20/solid"
import TextArea from "../components/TextArea"
import Datepicker from "react-tailwindcss-datepicker"
import { Toast } from "@/utils/SweetAlert"
export default function Page() {
	const [workExperiences, setWorkExperiences] = useState([
		{
			title: "",
			start_date: null,
			end_date: null,
			description: "",
		},
	])

	const { data: user } = useGetProfileQuery()
	const [update, { isLoading }] = useUpdateProfileMutation()

	useEffect(() => {
		if (user?.data?.detail_user) {
			const { work_experiences } = user.data.detail_user

			if (work_experiences?.length > 0) {
				setWorkExperiences(work_experiences)
			}
		}
	}, [user])

	const handleOnChange = (value, index, key) => {
		setWorkExperiences([...workExperiences.map((v, i) => (i === index ? { ...v, [key]: value } : v))])
	}

	const handleOnAdd = () => {
		setWorkExperiences([
			{
				title: "",
				start_date: null,
				end_date: null,
				description: "",
			},
			...workExperiences,
		])
	}

	const handleOnDelete = (index) => {
		if (workExperiences.length > 1) {
			setWorkExperiences([...workExperiences.filter((_v, i) => i !== index)])
		}
	}

	const handleOnSave = () => {
		if (!isLoading) {
			update({ data: { work_experiences: JSON.stringify(workExperiences) } }).then(({ data }) => {
				if (data) {
					Toast.fire({
						icon: "success",
						title: data?.message,
					})
				}
			})
		}
	}

	return (
		<div className="grid gap-6">
			<div className="grid gap-2">
				<div className="flex items-center justify-between bg-primary" style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}>
					<p className="px-3 py-3 text-white" style={{ fontWeight: 500 }}>
						Work Experiences
					</p>
					<p className="px-3 py-3 text-white cursor-pointer select-none" style={{ borderLeft: "2px solid white" }} onClick={handleOnAdd}>
						+
					</p>
				</div>

				{workExperiences.map((v, i) => (
					<div className="flex items-center" key={i}>
						<div className="grid w-full gap-2">
							<Input
								id="title"
								type="text"
								placeholder="Title"
								onChange={(v) => handleOnChange(v, i, "title")}
								value={workExperiences[i]["title"]}
							/>
							<div className="flex gap-2">
								<Datepicker
									useRange={false}
									asSingle={true}
									displayFormat={"DD-MM-YYYY"}
									value={{ startDate: workExperiences[i]["start_date"], endDate: workExperiences[i]["start_date"] }}
									onChange={({ startDate }) => handleOnChange(startDate, i, "start_date")}
									inputClassName="shadow-none outline-none focus:shadow-none focus:ring-0 focus:border-[#E5E7EB] ring-0 text-sm w-full border-2 border-[#E5E7EB] rounded-md"
								/>
								<Datepicker
									useRange={false}
									asSingle={true}
									displayFormat={"DD-MM-YYYY"}
									value={{ startDate: workExperiences[i]["end_date"], endDate: workExperiences[i]["end_date"] }}
									onChange={({ endDate }) => handleOnChange(endDate, i, "end_date")}
									inputClassName="shadow-none outline-none focus:shadow-none focus:ring-0 focus:border-[#E5E7EB] ring-0 text-sm w-full border-2 border-[#E5E7EB] rounded-md"
								/>
							</div>
							<TextArea
								id="description"
								placeholder="Keterangan"
								onChange={(v) => handleOnChange(v, i, "description")}
								value={workExperiences[i]["description"]}
							/>
						</div>
						<div className="flex items-center justify-center" style={{ minWidth: "63.91px" }}>
							<div className="p-2 cursor-pointer select-none" onClick={() => handleOnDelete(i)}>
								<TrashIcon width={24} height={24} color="gray" />
							</div>
						</div>
					</div>
				))}
			</div>

			<Button onClick={handleOnSave} label="Simpan" className="px-8 mx-auto w-fit" disabled={isLoading} />
		</div>
	)
}
