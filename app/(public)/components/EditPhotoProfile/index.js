import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

const UpdateProfileModal = ({ isOpen, onClose }) => {
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (event) => {
		const file = event.target.files[0]
		setSelectedFile(file)
	}

	const handleSubmit = () => {
		// Add logic here to handle the file submission
		// For example, you can send the file to a server using an API
		// and update the user's profile with the new photo.

		// After handling the submission, close the modal
		onClose()
	}

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={onClose}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex items-center justify-center min-h-full p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
									<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										Update Photo
									</Dialog.Title>
									<div className="mt-4">
										<label
											htmlFor="photoInput"
											className="block p-2 text-sm text-gray-500 border-2 border-gray-300 border-dashed cursor-pointer"
										>
											<span className="text-blue-500">Choose a file</span>
										</label>
										<input
											id="photoInput"
											type="file"
											className="hidden"
											onChange={handleFileChange}
										/>
										{selectedFile && (
											<p className="mt-2 text-sm text-gray-500">{selectedFile.name}</p>
										)}
									</div>

									<div className="flex justify-end mt-4">
										<button
											type="button"
											className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md me-2 bg-primary hover:bg-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={handleSubmit}
										>
											Update Photo
										</button>

										<button
											type="button"
											className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
											onClick={onClose}
										>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default UpdateProfileModal
