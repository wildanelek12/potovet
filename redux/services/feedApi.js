import { baseApi } from './baseApi'

export const feedApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getFeeds: builder.query({
			query: ({ searchParams }) => ({
				url: '/api/feed',
				method: 'GET',
				params: searchParams,
			}),
			providesTags: ['Feed'],
		}),
	}),
})

export const { useGetFeedsQuery } = feedApi
