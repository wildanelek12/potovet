import React, { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

export default function ModalSosmed({ data, isOpen = false, onClose }) {
	return (
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
					<div className="fixed inset-0 bg-black bg-opacity-25" />
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
							<Dialog.Panel className="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
								<div className="flex flex-row ">
									<Dialog.Title
										as="h3"
										className="flex flex-col items-center justify-center leading-6 text-gray-900 basis-1/2 "
									>
										<Image width={100} height={100} src={'/modal-desc/sosmed-modal.svg'} alt="" />
										<p className="mt-8 ml-2 text-xl font-semibold text-secondary">Social Media</p>
									</Dialog.Title>
									<div className="flex flex-col basis-1/2 gap-y-4">
										<div className="flex flex-row place-items-center">
											<Image width={30} height={30} src={'/logo-sosmed/instagram.svg'} alt="" />
											<p className="ml-2 text-sm font-medium">{data?.instagram}</p>
										</div>
										<div className="flex flex-row place-items-center">
											<Image width={30} height={30} src={'/logo-sosmed/linkedin.svg'} alt="" />
											<p className="ml-2 text-sm font-medium">{data?.linkedin}</p>
										</div>
										<div className="flex flex-row place-items-center">
											<Image width={30} height={30} src={'/logo-sosmed/facebook.svg'} alt="" />
											<p className="ml-2 text-sm font-medium">{data?.facebook}</p>
										</div>
										<div className="flex flex-row place-items-center">
											<Image width={30} height={30} src={'/logo-sosmed/email.svg'} alt="" />
											<p className="ml-2 text-sm font-medium">{data?.email}</p>
										</div>
									</div>
								</div>

								<div className="flex justify-center mt-8 ">
									<button
										type="button"
										onClick={onClose}
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-600 border border-transparent rounded-md bg-secondary/50 hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
									>
										Close
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
