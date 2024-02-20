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
		getProjectsGroupByYear: builder.query({
			query: ({ searchParams }) => ({
				url: '/api/project/group-by-year',
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
		getProjectPreview: builder.query({
			query: ({ params }) => ({
				url: `/api/project/preview/${params.year}/${params.month}/${params.slug}`,
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
		updateVisibilityProject: builder.mutation({
			query: ({ data }) => ({
				url: '/api/project/visibility',
				method: 'POST',
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

export const {
	useGetProjectsQuery,
	useGetProjectsGroupByYearQuery,
	useGetProjectQuery,
	useGetProjectPreviewQuery,
	useCreateOrUpdateProjectMutation,
	useDeleteProjectMutation,
	useUpdateVisibilityProjectMutation,
} = projectApi
