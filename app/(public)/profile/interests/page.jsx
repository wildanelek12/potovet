"use client"

import { useGetProfileQuery } from "@/redux/services/profileApi"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import Input from "../components/Input"
import { TrashIcon } from "@heroicons/react/20/solid"

export default function Page() {
	const [interests, setInterests] = useState([""])

	const { data: user } = useGetProfileQuery()

	useEffect(() => {
		if (user?.data?.detail_user) {
			const { interests } = user.data.detail_user

			if (interests) {
				const parse_interests = JSON.parse(interests)

				setInterests(parse_interests)
			}
		}
	}, [user])

	const handleOnChange = (value, index) => {
		setInterests([...interests.map((v, i) => (i === index ? value : v))])
	}

	const handleOnAdd = () => {
		setInterests(["", ...interests])
	}

	const handleOnDelete = (index) => {
		if (interests.length > 0) {
			setInterests([...interests.filter((v, i) => i !== index)])
		}
	}

	const handleOnSave = () => {}

	return (
		<div className="grid gap-6">
			<div className="grid gap-2">
				<div className="flex items-center justify-between bg-primary" style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}>
					<p className="px-3 py-3 text-white" style={{ fontWeight: 500 }}>
						Interests
					</p>
					<p className="px-3 py-3 text-white cursor-pointer select-none" style={{ borderLeft: "2px solid white" }} onClick={handleOnAdd}>
						ADD
					</p>
				</div>

				{interests.map((v, i) => (
					<div className="flex items-center" key={i}>
						<Input id="job" type="text" onChange={(v) => handleOnChange(v, i)} value={interests[i]} />
						<div className="flex items-center justify-center" style={{ minWidth: "63.91px" }}>
							<div className="p-2 cursor-pointer select-none" onClick={() => handleOnDelete(i)}>
								<TrashIcon width={24} height={24} color="gray" />
							</div>
						</div>
					</div>
				))}
			</div>

			<Button onClick={() => console.log("click!")} label="Simpan" className="px-8 mx-auto w-fit" />
		</div>
	)
}
