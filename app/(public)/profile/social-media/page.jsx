"use client"

import { useGetProfileQuery, useUpdateProfileMutation } from "@/redux/services/profileApi"
import { useEffect, useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Page() {
	const [instagram, setInstagram] = useState("")
	const [linkedin, setLinkedin] = useState("")
	const [facebook, setFacebook] = useState("")

	const { data: user } = useGetProfileQuery()
	const [update, { isLoading }] = useUpdateProfileMutation()

	useEffect(() => {
		if (user?.data?.detail_user) {
			const { instagram, linkedin, facebook } = user.data.detail_user

			setInstagram(instagram)
			setLinkedin(linkedin)
			setFacebook(facebook)
		}
	}, [user])

	const handleOnSave = () => {
		if (!isLoading) {
			update({ data: { instagram, linkedin, facebook } }).then(({ data }) => {
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
						Social Media
					</p>
				</div>
				<Input id="instagram" label="Instagram" type="text" onChange={setInstagram} value={instagram} />
				<Input id="linkedin" label="Linkedin" type="text" onChange={setLinkedin} value={linkedin} />
				<Input id="facebook" label="Facebook" type="text" onChange={setFacebook} value={facebook} />
			</div>

			<Button onClick={handleOnSave} label="Simpan" className="px-8 mx-auto w-fit" disabled={isLoading} />
		</div>
	)
}
