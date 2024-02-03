import Swal from 'sweetalert2'
import { Toast } from '@/utils/SweetAlert'

export const useChangeVisibilityButton = ({ id, visibility }) => {
	return {
		onClick: () => {
			Swal.fire({
				title: 'Perhatian',
				text: `Apakah anda yakin akan mengubah visibilitas portfolio menjadi ${
					visibility === 'PUBLIC' ? 'private' : 'public'
				}?`,
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Oke',
				cancelButtonText: 'Batal',
			}).then((result) => {
				if (result.isConfirmed) {
					// TODO: implement change visibility service

					Toast.fire({
						icon: 'success',
						title: 'Visibilitas portfolio berhasil diubah.',
					})
				}
			})
		},
	}
}
