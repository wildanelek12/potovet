import { showModalEducation } from '@/recoil/atom';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment } from 'react'
import { useRecoilState } from 'recoil';
import ListEducation from './list-education';



export default function ModalEducation(props) {
    let [isOpen, setIsOpen] = useRecoilState(showModalEducation);
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)} >
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
                            <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="leading-6 text-gray-900 flex flex-row items-center justify-center"
                                >
                                    <Image width={36} height={36} src={"/modal-desc/education-modal.svg"} />
                                    <p className='font-semibold text-xl text-secondary ml-2'>Education</p>
                                </Dialog.Title>
                                <div className="mt-8">
                                    <ol class="relative border-l border-secondary dark:border-gray-700">
                                        <ListEducation />
                                        <ListEducation />
                                        <ListEducation />

                                    </ol>
                                </div>

                                <div className="mt-8 flex justify-center">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-secondary/50 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                                    >
                                        Got it, thanks!
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
