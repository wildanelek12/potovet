/** @format */

import { axiosBaseQuery } from "@/utils/Axios"
import { createApi } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Profile"],
  endpoints: () => ({}),
})
