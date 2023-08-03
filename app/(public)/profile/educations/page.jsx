"use client"

import { useGetProfileQuery, useUpdateProfileMutation } from "@/redux/services/profileApi"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import Input from "../components/Input"
import { TrashIcon } from "@heroicons/react/20/solid"
import Datepicker from "react-tailwindcss-datepicker"

export default function Page() {
	const [educations, setEducations] = useState([
		{
			title: "",
			start_date: null,
			end_date: null,
		},
	])

	const { data: user } = useGetProfileQuery()
	const [update, { isLoading }] = useUpdateProfileMutation()

	useEffect(() => {
		if (user?.data?.detail_user) {
			const { educations } = user.data.detail_user

			if (educations.length > 0) {
				setEducations(educations)
			}
		}
	}, [user])

	const handleOnChange = (value, index, key) => {
		setEducations([...educations.map((v, i) => (i === index ? { ...v, [key]: value } : v))])
	}

	const handleOnAdd = () => {
		setEducations([
			{
				title: "",
				start_date: null,
				end_date: null,
			},
			...educations,
		])
	}

	const handleOnDelete = (index) => {
		if (educations.length > 1) {
			setEducations([...educations.filter((_v, i) => i !== index)])
		}
	}

	const handleOnSave = () => {
		if (!isLoading) {
			update({ data: { educations: JSON.stringify(educations) } }).then(({ data }) => {
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
						Educations
					</p>
					<p className="px-3 py-3 text-white cursor-pointer select-none" style={{ borderLeft: "2px solid white" }} onClick={handleOnAdd}>
						ADD
					</p>
				</div>

				{educations.map((v, i) => (
					<div className="flex items-center" key={i}>
						<div className="grid w-full gap-2">
							<Input id="title" type="text" placeholder="title" onChange={(v) => handleOnChange(v, i, "title")} value={educations[i]["title"]} />
							<div className="flex gap-2">
								<Datepicker
									useRange={false}
									asSingle={true}
									displayFormat={"DD-MM-YYYY"}
									value={{ startDate: educations[i]["start_date"], endDate: educations[i]["start_date"] }}
									onChange={({ startDate }) => handleOnChange(startDate, i, "start_date")}
									inputClassName="shadow-none outline-none focus:shadow-none focus:ring-0 focus:border-[#E5E7EB] ring-0 text-sm w-full border-2 border-[#E5E7EB] rounded-md"
								/>
								<Datepicker
									useRange={false}
									asSingle={true}
									displayFormat={"DD-MM-YYYY"}
									value={{ startDate: educations[i]["end_date"], endDate: educations[i]["end_date"] }}
									onChange={({ endDate }) => handleOnChange(endDate, i, "end_date")}
									inputClassName="shadow-none outline-none focus:shadow-none focus:ring-0 focus:border-[#E5E7EB] ring-0 text-sm w-full border-2 border-[#E5E7EB] rounded-md"
								/>
							</div>
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
