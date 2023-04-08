import { showModalSocialMedia } from '@/recoil/atom';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment } from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { useRecoilState } from 'recoil';


export default function ModalSosmed(props) {
    let [isOpen, setIsOpen] = useRecoilState(showModalSocialMedia);
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
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className='flex flex-row '>


                                    <Dialog.Title
                                        as="h3"
                                        className="leading-6 basis-1/2 text-gray-900 flex flex-col items-center justify-center  "
                                    >
                                        <Image width={100} height={100} src={"/modal-desc/sosmed-modal.svg"} />
                                        <p className='mt-8 font-semibold text-xl text-secondary ml-2'>Education</p>
                                    </Dialog.Title>
                                    <div className="basis-1/2 flex flex-col gap-y-4">
                                        <div className='flex flex-row place-items-center'>
                                            <Image width={30} height={30} src={"/logo-sosmed/instagram.svg"} />
                                            <p className=' font-medium text-sm ml-2'>@wildan.rmza</p>
                                        </div>
                                        <div className='flex flex-row place-items-center'>
                                            <Image width={30} height={30} src={"/logo-sosmed/linkedin.svg"} />
                                            <p className=' font-medium text-sm ml-2'>wildan romiza</p>
                                        </div>
                                        <div className='flex flex-row place-items-center'>
                                            <Image width={30} height={30} src={"/logo-sosmed/facebook.svg"} />
                                            <p className=' font-medium text-sm ml-2'>wildan romiza</p>
                                        </div>
                                        <div className='flex flex-row place-items-center'>
                                            <Image width={30} height={30} src={"/logo-sosmed/email.svg"} />
                                            <p className=' font-medium text-sm ml-2'>wildan.romiza@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-center ">
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
                </div >
            </Dialog >
        </Transition >
    )
}
