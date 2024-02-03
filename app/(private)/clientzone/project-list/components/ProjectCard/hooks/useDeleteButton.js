import Swal from 'sweetalert2'
import { Toast } from '@/utils/SweetAlert'

export const useDeleteButton = ({ id }) => {
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
					// TODO: implement delete service

					Toast.fire({
						icon: 'success',
						title: 'Berhasil menghapus data.',
					})
				}
			})
		},
	}
}
