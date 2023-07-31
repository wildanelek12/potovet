import { baseApi } from "./baseApi"

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
        login: builder.mutation({
			query: ({ data }) => ({
				url: "/api/login",
				method: "POST",
                data
			}),
		}),
        register: builder.mutation({
			query: ({ data }) => ({
				url: "/api/register",
				method: "POST",
                data
			}),
		}),
		logout: builder.mutation({
			query: ({ headers }) => ({
				url: "/api/logout",
				method: "POST",
				headers
			}),
		}),
	}),
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi
