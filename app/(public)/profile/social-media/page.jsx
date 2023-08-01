"use client"

import { useGetProfileQuery } from "@/redux/services/profileApi"

export default function Page() {
	const { data: user } = useGetProfileQuery()

	return <>social-media</>
}
