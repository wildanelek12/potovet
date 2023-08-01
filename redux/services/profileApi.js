import { baseApi } from "./baseApi"

export const profileApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getProfile: builder.query({
			query: () => ({
				url: "/api/profile",
				method: "GET",
			}),
			providesTags: ["Profile"],
		}),
		updateProfile: builder.mutation({
			query: ({ data }) => ({}),
		}),
	}),
})

export const { useGetProfileQuery } = profileApi
