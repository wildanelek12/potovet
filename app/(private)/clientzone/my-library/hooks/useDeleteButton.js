import Swal from 'sweetalert2'
import { Toast } from '@/utils/SweetAlert'
import { useDeleteLibraryMutation } from '@/redux/services/libraryApi'

export const useDeleteButton = ({ id }) => {
	const [deleteLibrary, { isLoading }] = useDeleteLibraryMutation()

	return {
		onClick: () => {
			Swal.fire({
				title: 'Perhatian',
				text: 'Apakah anda yakin akan menghapus data?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Oke',
				cancelButtonText: 'Batal',
			}).then((result) => {
				if (result.isConfirmed) {
					if (!isLoading) {
						deleteLibrary({ params: { id } }).then(({ data }) => {
							if (data) {
								Toast.fire({
									icon: 'success',
									title: 'Berhasil menghapus data.',
								})
							}
						})
					}
				}
			})
		},
	}
}
