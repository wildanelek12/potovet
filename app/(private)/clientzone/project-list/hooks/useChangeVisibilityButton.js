import Swal from 'sweetalert2'
import { Toast } from '@/utils/SweetAlert'
import { useUpdateVisibilityProjectMutation } from '@/redux/services/projectApi'

export const useChangeVisibilityButton = ({ id, visibility }) => {
	const [updateVisibilityProject, { isLoading }] = useUpdateVisibilityProjectMutation()

	return {
		onClick: () => {
			Swal.fire({
				title: 'Perhatian',
				text: `Apakah anda yakin akan mengubah visibilitas portfolio menjadi ${
					visibility === 'FULL' ? 'private' : 'public'
				}?`,
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Oke',
				cancelButtonText: 'Batal',
			}).then((result) => {
				if (result.isConfirmed) {
					if (!isLoading) {
						updateVisibilityProject({
							data: { id, visibility: visibility === 'FULL' ? 'PRIVATE' : 'FULL' },
						}).then(({ data }) => {
							if (data) {
								Toast.fire({
									icon: 'success',
									title: 'Berhasil mengubah data.',
								})
							}
						})
					}
				}
			})
		},
	}
}
