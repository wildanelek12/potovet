import { cn } from '@/utils'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'

export default function Input({
	id,
	label,
	type,
	onChange,
	value,
	placeholder,
	beforeElement,
	afterElement,
	className,
	inputClassName,
	labelClassName,
	disabled,
	isHaveTemplate,
	isError, // Add this prop for handling error state
	isUrl = false,
	isRequired = true,
	isHint = false,
	hintText,
}) {
	const isValueNull = value === null || value === undefined || value === ''

	const isValidURL = (input) => {
		// Regular expression for URL validation
		var pattern = new RegExp(
			'^(https?:\\/\\/)?' + // protocol
				'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
				'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
				'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
				'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
				'(\\#[-a-z\\d_]*)?$',
			'i'
		) // fragment locator
		return !!pattern.test(input)
	}

	const [validatedUrl, setIsValidatedUrl] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const closeModal = () => setIsOpen(false)
	const openModal = () => setIsOpen(true)

	const handleInputChange = (e) => onChange(e.target.value)

	useEffect(() => {
		if (value) {
			if (isUrl) {
				setIsValidatedUrl(isValidURL(value))
			}
		}
	}, [value, isUrl])

	return (
		<div className="grid gap-1 font-work-sans">
			<div className="flex items-center">
				{label && <label className="font-semibold capitalize">{label}</label>}

				{isHint && (
					<button
						type="button"
						className="relative flex items-center px-3 py-1 ml-2 text-sm font-bold text-white bg-transparent rounded-full group"
						onClick={openModal}
					>
						<AiFillQuestionCircle color="blue" size={24} />
						<span className="absolute bottom-0 p-2 text-xs text-white scale-0 bg-gray-800 rounded left-10 group-hover:scale-100 whitespace-nowrap">
							Get Info
						</span>
					</button>
				)}
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

			<div
				className={cn(
					'flex flex-row gap-4 justify-between items-center border rounded-sm bg-white overflow-hidden px-3 py-2',
					isRequired && (isValueNull || (isUrl && !validatedUrl)) ? 'border-red-500' : 'border-[#CCCED1]',
					className
				)}
			>
				{beforeElement && <span className="select-none">{beforeElement}</span>}
				<input
					id={id}
					type={type}
					className={cn(
						'flex-1 bg-white !outline-none !border-none !shadow-none !ring-0 !p-0',
						inputClassName
					)}
					onChange={handleInputChange}
					value={value ?? ''}
					placeholder={placeholder}
					autoComplete="off"
					disabled={disabled}
				/>

				{afterElement && <span className="select-none">{afterElement}</span>}
				{value && validatedUrl ? (
					<div className="flex flex-row items-center justify-center w-6 min-w-[1.5rem] h-6">
						<BsCheckCircleFill color="#64CCC5" />
					</div>
				) : null}
			</div>

			{isUrl && !validatedUrl && (
				<div className="row">
					<p className="text-sm text-red-500">Format Url Salah</p>
				</div>
			)}
		</div>
	)
}
