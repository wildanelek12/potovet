import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import { FileUploader } from 'react-drag-drop-files'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'
import { cn } from '@/utils'

export default function FileInput({
	label,
	className,
	onChange,
	value,
	types,
	multiple,
	preview,
	previewClassName,
	previewInitial = [],
	labelClassName,
	fileOrFiles,
	isRequired = false,
	placeholder = 'No File Choosen',
	isHint = false,
	hintText,
}) {
	const [previews, setPreviews] = useState([])

	useEffect(() => {
		if (preview) {
			const temp = value.map((v) => URL.createObjectURL(v))
			setPreviews(temp)

			return () => {
				temp.forEach((v) => {
					URL.revokeObjectURL(v)
				})
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])

	let [isOpen, setIsOpen] = useState(false)

	const closeModal = () => setIsOpen(false)

	const openModal = () => setIsOpen(true)

	const handleChange = (file) => {
		if (multiple) {
			if (file.length > 0) {
				onChange([...file])
			}
		} else {
			onChange([file])
		}
	}

	return (
		<React.Fragment>
			<div className="flex flex-col gap-1">
				<div className="flex items-center">
					{label && <label className={cn('font-semibold capitalize', labelClassName)}>{label}</label>}
					{isHint && (
						<button
							type="button"
							className="relative flex items-center px-3 py-1 ml-2 text-sm font-bold text-white bg-transparent rounded-full z-999 group"
							onClick={openModal}
						>
							<AiFillQuestionCircle color="blue" size={24} />
							<span className="absolute bottom-0 p-2 text-xs text-white scale-0 bg-gray-800 rounded left-10 group-hover:scale-100">
								Get Info
							</span>
						</button>
					)}
				</div>

				<div className="flex flex-col gap-3">
					{previews.length === 0 && previewInitial.length > 0 && (
						<div className={cn('grid gap-4 w-full grid-cols-1 h-56', previewClassName)}>
							{previewInitial.map(
								(v, i) =>
									v && (
										<div key={i} className="relative grid items-center justify-cente border-500">
											<Image
												src={`/${v}`}
												alt={`image-preview-${i}`}
												layout="fill"
												objectFit="cover"
												className="rounded-lg"
												priority
											/>
										</div>
									)
							)}
						</div>
					)}

					{previews.length > 0 && (
						<div className={cn('grid gap-4 w-full grid-cols-1 h-56', previewClassName)}>
							{previews.map(
								(v, i) =>
									v && (
										<div key={i} className="relative grid items-center justify-center h-56">
											<Image
												src={v}
												alt={`image-preview-${i}`}
												layout="fill"
												objectFit="cover"
												className="rounded-lg"
												priority
											/>
										</div>
									)
							)}
						</div>
					)}

					<div className="w-full overflow-hidden">
						<FileUploader
							multiple={multiple}
							handleChange={handleChange}
							types={types}
							fileOrFiles={fileOrFiles}
						>
							<div
								className={cn(
									'flex gap-4 justify-between items-center border rounded-sm',
									previews.length === 0 &&
										previewInitial.length === 0 &&
										!isRequired &&
										'border-red-500',
									className
								)}
							>
								<div className="flex items-center w-full gap-4 px-3 py-2">
									<button
										type="button"
										className="px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out border border-gray-300 rounded-md select-none hover:text-secondary-orange hover:border-secondary-orange focus:outline-none"
									>
										Upload
									</button>
									<span className="select-none text-[#7D7D7D] truncate text-sm">
										{value.length > 0 ? value.map((v) => v.name).join(', ') : placeholder}
									</span>
								</div>
							</div>
						</FileUploader>
					</div>
				</div>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={closeModal}>
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
										Information
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500">{hintText}</p>
									</div>

									<div className="mt-4 text-end">
										<button
											type="button"
											className="inline-flex justify-center px-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											OK
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</React.Fragment>
	)
}
