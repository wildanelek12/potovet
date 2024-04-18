'use client'

import { Dialog, Transition } from '@headlessui/react'
import _ from 'lodash'
import React from 'react'
import { Select } from '../../add-project/components'
import { categoriesData } from '../../add-project/partials/introduction/constants'
import { useCreateLibraryMutation } from '@/redux/services/libraryApi'
import { message } from 'antd'

const intialPayload = {
	image_path: null,
	category_id: 0,
}

export default function AddLibrary({}) {
	const [isOpen, setIsOpen] = React.useState(false)
	const [payload, setPayload] = React.useState(intialPayload)

	const [createLibrary, { isLoading }] = useCreateLibraryMutation()

	const toggleModal = () => setIsOpen(!isOpen)
	const handleOnCloseModal = () => {
		toggleModal()
		setPayload(_.cloneDeep(intialPayload))
	}
	const handleFileChange = (e) => {
		const file = e.target.files[0]
		setPayload((prev) => ({ ...prev, image_path: file }))
	}
	const handleOnChangeCategory = ({ id }) => setPayload((prev) => ({ ...prev, category_id: id }))
	const handleOnSubmit = (e) => {
		e.preventDefault()

		if (!isLoading) {
			const formData = new FormData()

			formData.append('image_path', payload.image_path)
			formData.append('category_id', payload.category_id)

			createLibrary({ data: formData })
				.then(({ data }) => {
					if (data) {
						message.success(data?.message)
						handleOnCloseModal()
					}
				})
				.catch((err) => {
					message.error(err?.data?.message)
				})
		}
	}

	return (
		<React.Fragment>
			<button
				type="button"
				onClick={toggleModal}
				className="order-first px-4 py-2 text-xs font-medium text-white transition-colors bg-blue-700 border border-blue-600 rounded-md sm:order-last sm:text-sm whitespace-nowrap"
			>
				Add library
			</button>

			<Transition appear show={isOpen} as={React.Fragment}>
				<Dialog as="div" className="relative z-50" onClose={handleOnCloseModal}>
					<Transition.Child
						as={React.Fragment}
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
								as={React.Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md p-6 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
									<form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
										<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
											Update Photo
										</Dialog.Title>

										<div className="flex flex-col">
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
											{payload.image_path && (
												<p className="mt-2 text-sm text-gray-500">{payload.image_path?.name}</p>
											)}
										</div>

										<Select
											label="Categories"
											options={categoriesData}
											defaultValue={categoriesData[0]}
											selected={categoriesData.find(({ id }) => id === payload.category_id)}
											onChange={handleOnChangeCategory}
										/>

										<div className="flex justify-end mt-4">
											<button
												type="submit"
												className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md me-2 bg-primary hover:bg-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-default disabled:bg-primary/50"
												disabled={!payload.image_path || !payload.category_id || isLoading}
											>
												Submit
											</button>

											<button
												type="button"
												className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
												onClick={handleOnCloseModal}
											>
												Cancel
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</React.Fragment>
	)
}
