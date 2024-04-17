import { baseApi } from './baseApi'

export const profileApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getProfile: builder.query({
			query: () => ({
				url: '/api/profile',
				method: 'GET',
			}),
			providesTags: ['Profile'],
		}),
		getProfileBySlug: builder.query({
			query: (slug) => ({
				url: `/api/profile/${slug}`,
				method: 'GET',
			}),
			providesTags: ['Profile'],
		}),
		updateProfile: builder.mutation({
			query: ({ data }) => ({
				url: '/api/profile',
				method: 'POST',
				data,
			}),
			invalidatesTags: ['Profile'],
		}),
	}),
})

export const { useGetProfileQuery, useUpdateProfileMutation, useGetProfileBySlugQuery } = profileApi
