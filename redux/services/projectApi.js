import { baseApi } from './baseApi'

export const projectApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getProjects: builder.query({
			query: ({ searchParams }) => ({
				url: '/api/project',
				method: 'GET',
				params: searchParams,
			}),
			providesTags: ['Project'],
		}),
		getProject: builder.query({
			query: ({ params }) => ({
				url: `/api/project/${params.id}`,
				method: 'GET',
			}),
			providesTags: ['Project'],
		}),
		createOrUpdateProject: builder.mutation({
			query: ({ params, data }) => ({
				url: `/api/project/${params.step}`,
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				data,
			}),
			invalidatesTags: ['Project'],
		}),
		deleteProject: builder.mutation({
			query: ({ params }) => ({
				url: `/api/project/${params.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Project'],
		}),
	}),
})

export const { useGetProjectsQuery, useGetProjectQuery, useCreateOrUpdateProjectMutation, useDeleteProjectMutation } =
	projectApi
