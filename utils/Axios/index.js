/** @format */

import axios from "axios"
import { Toast, ToastLoading } from "../SweetAlert"

export const axiosBaseQuery =
	({ baseUrl } = { baseUrl: "" }) =>
	async ({ url, method, data, params, headers }) => {
		const token = localStorage.getItem("token")

		try {
			const isVisible = Toast.isVisible()
			if (!isVisible) {
				ToastLoading.fire({
					title: "Loading...",
					didOpen: () => {
						ToastLoading.showLoading()
					},
				})
			}

			const res = await axios({
				url: baseUrl + url,
				method,
				data,
				params,
				headers: {
					Authorization: token && "Bearer " + token,
					...headers,
				},
			})

			if (!isVisible) {
				ToastLoading.close()
			}

			return { data: res.data }
		} catch (err) {
			Toast.fire({
				icon: "error",
				title: err?.response.data.message,
			})

			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			}
		}
	}
