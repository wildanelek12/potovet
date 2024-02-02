import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function CommentsDialog({ message, showModalComments, setModalComments }) {
	//   const [isShow, setIsShow] = useState(false);
	//   useEffect(() => {
	//     setIsShow(true);
	//     const timer = setTimeout(() => {
	//         setIsShow(false);
	//     }, 3000);

	//     return () => clearTimeout(timer);
	//   }, [message]);
	return (
		<>
			<Transition appear show={showModalComments} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={() => setModalComments(false)}>
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
								<Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										<section className="bg-white dark:bg-gray-900 py-4 lg:py-4 antialiased">
											<div className="w-full mx-auto px-2">
												<div className="flex justify-between items-center mb-6">
													<h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
														Discussion
													</h2>
												</div>

												<article className="p-2 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
													<footer className="flex justify-between items-center mb-2">
														<div className="flex items-center">
															<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
																<img
																	className="mr-2 w-6 h-6 rounded-full"
																	src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
																	alt="Michael Gough"
																/>
																Michael Gough
															</p>
															<p className="text-sm text-gray-600 dark:text-gray-400">
																<time
																	pubdate
																	datetime="2022-02-08"
																	title="February 8th, 2022"
																>
																	Feb. 8, 2022 10:00 WIB
																</time>
															</p>
														</div>
														<button
															id="dropdownComment1Button"
															data-dropdown-toggle="dropdownComment1"
															className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
															type="button"
														>
															<svg
																className="w-4 h-4"
																aria-hidden="true"
																xmlns="http://www.w3.org/2000/svg"
																fill="currentColor"
																viewBox="0 0 16 3"
															>
																<path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
															</svg>
															<span className="sr-only">Comment settings</span>
														</button>

														<div
															id="dropdownComment1"
															className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
														>
															<ul
																className="py-1 text-sm text-gray-700 dark:text-gray-200"
																aria-labelledby="dropdownMenuIconHorizontalButton"
															>
																<li>
																	<a
																		href="#"
																		className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
																	>
																		Edit
																	</a>
																</li>
																<li>
																	<a
																		href="#"
																		className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
																	>
																		Remove
																	</a>
																</li>
																<li>
																	<a
																		href="#"
																		className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
																	>
																		Report
																	</a>
																</li>
															</ul>
														</div>
													</footer>
													<p className="text-gray-500 dark:text-gray-400">
														Very straight-to-point article. Really worth time reading. Thank
														you! But tools are just the instruments for the UX designers.
														The knowledge of the design tools are as important as the
														creation of the design strategy.
													</p>
												</article>

												<form className="mb-0">
													<div className="px-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
														<label for="comment" className="sr-only">
															Your comment
														</label>
														<textarea
															id="comment"
															rows="6"
															className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
															placeholder="Write a comment..."
															required
														></textarea>
													</div>
												</form>
											</div>
										</section>
									</Dialog.Title>
									<div className="flex items-center justify-end flex-1">
										<button
											type="button"
											onClick={() => setModalComments(false)}
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
										>
											Submit
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
