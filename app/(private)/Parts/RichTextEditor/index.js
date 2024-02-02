import { Tooltip } from 'chart.js'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsFillPlusCircleFill, BsTrash } from 'react-icons/bs'
import { RiStackFill } from 'react-icons/ri'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'
import { Dialog, Transition } from '@headlessui/react'
const editorConfiguration = {
	toolbar: [
		'heading',
		'|',
		'bold',
		'italic',
		'|',
		'link',
		'|',
		'outdent',
		'indent',
		'|',
		'bulletedList',
		'numberedList',
		'|',
		'insertTable',
		'|',
		'uploadImage',
		'blockQuote',
		'|',
		'undo',
		'redo',
	],
	//   height: "50px",
}

export default function RichTextEditor({ value, onChange, label, isTextArea, hintText }) {
	const editorRef = useRef()
	const [rendered, setRendered] = useState(false)
	const [count, setCount] = useState(0)
	const { CKEditor, Editor } = {
		CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
		Editor: require('ckeditor5-custom-build/build/ckeditor'),
	}
	const isValueNull = value === null || value === undefined || value === ''
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	useEffect(() => {
		editorRef.current = { CKEditor, Editor }
		setRendered(true)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function handleChange(editor) {
		var data = editor.getData()
		var replaced_text = data.replace(/(<([^>]+)>)/gi, '')
		const count = replaced_text.length
		setCount(count)
		// if (count > 2000) {
		//   var old_data = value;
		//   console.log("here");
		//   editor.setData(old_data);
		//   return old_data;
		// } else {
		//   console.log("else");
		return editor.getData()
		// }
	}

	function insertTemplate() {
		const template = '<p>Ini adalah contoh template yang sudah di copy dan akan diisi oleg pengguna</p>' // Define your template HTML
		onChange(template) // Update the content using the onChange function
	}

	// useEffect(() => {
	//   var text = value;
	//   const count = text.replace(/(<([^>]+)>)/gi, "").length;
	//   console.log(text.replace(/(<([^>]+)>)/gi, ""));

	//   setCount(count);
	// }, [value]);
	return (
		<div className="grid mt-4">
			<div className="flex items-center  ">
				{label && <label className="capitalize font-semibold">{label}</label>}
				{/* Rounded button */}

				<button
					className="rounded-full ml-2 px-2 py-2 bg-transparent text-white text-sm font-bold px-3 py-1 z-999  flex items-center group relative"
					onClick={() => setIsOpen(true)}
				>
					<AiFillQuestionCircle className="" color="blue" size={24} />
					<span className="absolute  bottom-0 left-10  scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
						Get Info
					</span>
				</button>
				{/* <div className="group relative">
          <AiFillQuestionCircle
            color="blue"
            className="ml-1"
            size={24}
            onClick={() => setIsOpen(true)}
          />
          <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            Share
          </span>
        </div> */}

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
								<div className="flex min-h-full items-center justify-center p-4 text-center">
									<Transition.Child
										as={Fragment}
										enter="ease-out duration-300"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
											<Dialog.Title
												as="h3"
												className="text-lg font-medium leading-6 text-gray-900"
											>
												Information
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-gray-500">{hintText}</p>
											</div>

											<div className="mt-4 text-end">
												<button
													type="button"
													className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

				<button
					className="rounded-md ml-auto bg-secondary text-white text-sm font-bold px-3 py-1  flex items-center"
					onClick={insertTemplate}
				>
					<RiStackFill className="mr-2" /> {/* Icon component */}
					Template
				</button>
				<button
					className="rounded-md ml-2 px-2 py-2 bg-blue-500 text-white text-sm font-bold px-3 py-1 z-999  flex items-center group relative"
					onClick={insertTemplate}
				>
					<FiRefreshCcw className="" />
					<span className="absolute  bottom-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
						Reset
					</span>
				</button>
			</div>

			<div className="py-1 h-fit mt-2">
				{rendered && (
					<CKEditor
						editor={Editor}
						data={value}
						config={!isTextArea && editorConfiguration}
						onChange={(_, editor) => onChange(handleChange(editor))}
					/>
				)}
			</div>

			{isValueNull ? (
				<>
					<p className="font-normal text-sm text-red-500">
						{' '}
						Isikan Kolom dengan kombinasi huruf, video, dan angka{' '}
					</p>
				</>
			) : (
				''
			)}
		</div>
	)
}
