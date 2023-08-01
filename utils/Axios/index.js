/** @format */

import axios from "axios"

export const axiosBaseQuery =
	({ baseUrl } = { baseUrl: "" }) =>
	async ({ url, method, data, params, headers }) => {
		const token = localStorage.getItem("token")

		try {
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

			return { data: res.data }
		} catch (err) {
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			}
		}
	}
