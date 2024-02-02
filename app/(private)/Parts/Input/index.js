import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
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

	let [isOpen, setIsOpen] = useState(false)
	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	const [validatedUrl, setIsValidatedUrl] = useState(false)

	const handleInputChange = (e) => {
		const inputValue = e.target.value
		// Check if the input is a valid URL
		if (isUrl) {
			setIsValidatedUrl(isValidURL(inputValue))
		}

		return onChange(e.target.value) // Pass input value to the parent component
	}

	return (
		<div className="grid gap-1 font-work-sans">
			<div className="flex items-center">
				{label && <label className="font-semibold capitalize">{label}</label>}
				{/* Rounded button */}
				{isHint && (
					<button
						className="relative z-50 flex items-center px-3 py-1 ml-2 text-sm font-bold text-white bg-transparent rounded-full group"
						onClick={() => setIsOpen(true)}
					>
						<AiFillQuestionCircle className="" color="blue" size={24} />
						<span className="absolute bottom-0 p-2 text-xs text-white scale-0 bg-gray-800 rounded left-10 group-hover:scale-100">
							Get Info
						</span>
					</button>
				)}
			</div>
			<>
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
			</>

			<div
				className={[
					'flex gap-4 justify-between items-center border-2 focus:outline-none rounded-md bg-white outline-none',
					className,
					isRequired && (isValueNull || (isUrl && !validatedUrl)) ? 'border-red-500' : '',
				].join(' ')}
			>
				{beforeElement && <span className="select-none">{beforeElement}</span>}
				<input
					id={id}
					type={type}
					className={[
						'w-full bg-white focus:outline-none focus:border-none border-none outline-none',
						inputClassName,
					].join(' ')}
					onChange={handleInputChange}
					value={value ?? ''}
					placeholder={placeholder}
					autoComplete="off"
					style={{
						outline: 'none', // Adding inline style to override potential CSS conflicts
						// Add other styles as needed
					}}
					disabled={disabled}
				/>
				{afterElement && <span className="select-none">{afterElement}</span>}
				{value && validatedUrl ? <BsCheckCircleFill color="#64CCC5" /> : ''}
			</div>
			{isUrl && !validatedUrl && (
				<div className="row">
					<p className="text-sm text-red-500">Format Url Salah</p>
				</div>
			)}
		</div>
	)
}
