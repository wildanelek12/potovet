/** @format */

import axios from "axios"

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const res = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
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
