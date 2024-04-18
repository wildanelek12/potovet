import { baseApi } from './baseApi'

export const dashboardApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getDashboard: builder.query({
			query: ({ searchParams }) => ({
				url: '/api/dashboard',
				method: 'GET',
				params: searchParams,
			}),
			providesTags: ['Dashboard'],
		}),
	}),
})

export const { useGetDashboardQuery } = dashboardApi
