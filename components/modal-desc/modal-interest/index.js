import { showModalEducation, showModalInterest } from '@/recoil/atom';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment } from 'react'
import { useRecoilState } from 'recoil';



export default function ModalInterest(props) {
    let [isOpen, setIsOpen] = useRecoilState(showModalInterest);
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
                                <Dialog.Title
                                    as="h3"
                                    className="flex flex-row items-center justify-center leading-6 text-gray-900"
                                >
                                    <Image width={36} height={36} src={"/modal-desc/education-modal.svg"} alt="" />
                                    <p className='ml-2 text-xl font-semibold text-secondary'>Education</p>
                                </Dialog.Title>
                                <div className="grid grid-cols-3 gap-2 mt-8 ">
                                    <span className="bg-secondary text-white text-xs font-medium  px-3 py-2 rounded text-center self-center">Art</span>
                                    <span className="bg-secondary text-white text-xs font-medium  px-3 py-2 rounded text-center self-center">React Native</span>
                                    <span className="bg-secondary text-white text-xs font-medium  px-3 py-2 rounded text-center self-center">Laravel</span>
                                    <span className="bg-secondary text-white text-xs font-medium  px-3 py-2 rounded text-center self-center ">Android</span>
                                    <span className="bg-secondary text-white text-xs font-medium  px-3 py-2 rounded text-center self-center">PHP</span>
                                    <span className="bg-secondary text-white text-xs font-medium  px-3 py-2 rounded text-center self-center">Machine Learning</span>
                                    <span className="bg-secondary text-white text-xs font-medium  px-3 py-2 rounded text-center self-center">Art</span>

                                </div>

                                <div className="flex justify-center mt-8">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-600 border border-transparent rounded-md bg-secondary/50 hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div >
            </Dialog >
        </Transition >
    )
}
