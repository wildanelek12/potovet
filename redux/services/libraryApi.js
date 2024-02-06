import { baseApi } from './baseApi'

export const libraryApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getLibraries: builder.query({
			query: ({ searchParams }) => ({
				url: '/api/image-library',
				method: 'GET',
				params: searchParams,
			}),
			providesTags: ['Library'],
		}),
		createLibrary: builder.mutation({
			query: ({ data }) => ({
				url: '/api/image-library',
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				data,
			}),
			invalidatesTags: ['Library'],
		}),
		deleteLibrary: builder.mutation({
			query: ({ params }) => ({
				url: `/api/image-library/${params.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Library'],
		}),
	}),
})

export const { useCreateLibraryMutation, useDeleteLibraryMutation, useGetLibrariesQuery } = libraryApi
