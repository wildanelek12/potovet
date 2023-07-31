import { baseApi } from "./baseApi"

export const profileApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
        getProfile: builder.query({
			query: ({ headers }) => ({
				url: "/api/profile",
				method: "GET",
                headers
			}),
            providesTags: ["Profile"]
		})
	}),
})

export const { useGetProfileQuery } = profileApi
