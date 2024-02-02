import React, { useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function Select({ labelClassname, label, onChange, options, value, defaultValue, selected }) {
	return (
		<>
			<div className="flex flex-col gap-1">
				{label && <label className={['capitalize', labelClassname].join(' ') + 'font-semibold'}>{label}</label>}
				<Listbox value={value ?? defaultValue} onChange={(e) => onChange(e)}>
					<div className="relative ">
						<Listbox.Button className="relative z-auto w-full py-2 pl-3 pr-10 text-left bg-white border rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
							<span className="block truncate">{selected.name ?? 'Select Categories'}</span>
							<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
								<ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
							</span>
						</Listbox.Button>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 w-full py-1 mt-1 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{options.map((option, optionIdx) => (
									<Listbox.Option
										key={optionIdx}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-2 pr-8 ${
												active ? 'bg-white text-amber-900' : 'text-gray-900'
											}`
										}
										value={option}
									>
										{({ selected }) => (
											<>
												<span
													className={`block truncate ${
														selected ? 'font-medium' : 'font-normal'
													}`}
												>
													{option.name}
												</span>
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</Listbox>
			</div>
		</>
	)
}
