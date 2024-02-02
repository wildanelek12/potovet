'use client'
import React, { useState } from 'react'
import { Montserrat } from 'next/font/google'
import { BsFacebook, BsInstagram, BsLinkedin, BsPrinter, BsShareFill } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineEmail, MdCopyAll, MdComment } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/modal'
import { FaPlus, FaArrowAltCircleLeft, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import AlertDialog from '@/components/alert-dialog'
import CommentsDialog from './comments'
import Rating from './rating'
import ReactStars from 'react-stars'
const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})
export default function Detail() {
	const [isOpenShare, setIsOpenShare] = useState(false)

	const openModalShare = () => {
		setIsOpenShare(true)
	}

	const closeModalShare = () => {
		setIsOpenShare(false)
	}
	const [isShowButton, setIsShowButton] = useState(false)
	const onClickCta = () => {
		setIsShowButton(!isShowButton)
	}
	let [isShowComments, setIsShowComments] = useState(false)

	function closeModal() {
		setIsShowComments(false)
	}

	function openModal() {
		setIsShowComments(true)
	}

	return (
		<>
			<div className={` h-auto flex font-sans px-8 py-2 flex-col flex-1`}>
				<div className="flex flex-col items-center justify-center flex-1 ">
					<div className="flex flex-row justify-items-center justify-start items-center mt-4 ms-4  w-full">
						<button
							type="button"
							className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-8"
							style={{ display: 'flex', alignItems: 'center' }}
						>
							<FaArrowAltCircleLeft style={{ marginRight: '0.5rem' }} />
							Back
						</button>
					</div>

					<div className="flex flex-row justify-items-center justify-center items-center mt-4  w-full">
						<p className=" text-3xl font-bold ">Website Promosi International BAG for backpaker</p>
					</div>
					<p className="mt-1 text-sm font-medium">By : Ario Bayu</p>
					<p className="mt-1 text-xs">Categories : Professional </p>
					<p className="mt-1 text-xs">Project Time Elapsed : 20 Februari 2023 - 20 December 2023 </p>
					<p className="mt-1 text-xs">Job Role : Programmer </p>
					<div className="flex flex-row mt-4 gap-x-2 w-1/2 justify-end">
						<BsInstagram className="cursor-pointer" />
						<BsFacebook className="cursor-pointer" />
						<BsLinkedin className="cursor-pointer " />
					</div>
					<Image
						src={'https://cdn.dribbble.com/users/3126500/screenshots/6023737/adventure.jpg'}
						alt=""
						width={900}
						height={600}
						className="object-cover w-1/2 mt-4"
					/>
				</div>

				<div className="flex flex-col items-start flex-1 p-32">
					<p className="text-xs mt-19">at : 20 February 2023 </p>
					<p className="text-justify ">
						{`Introducing AdventureGear.com - your ultimate destination for all your
          adventurous journeys! If you're a passionate explorer seeking
          high-quality backpacks and gear, look no further. Our website offers a
          wide range of adventure-friendly backpacks designed to accompany you
          on thrilling expeditions, hikes, and outdoor escapades. At
          AdventureGear.com, we understand the importance of durability and
          functionality when it comes to adventure gear. That's why we
          meticulously curate our collection to ensure every product meets the
          highest standards of quality. From rugged backpacks with ample storage
          space to waterproof designs that can withstand any weather conditions,
          we have the perfect companion for your next adventure. But that's not
          all - we go the extra mile to cater to your specific needs. Our
          website features detailed product descriptions, customer reviews, and
          expert guides to help you make an informed choice. We believe in
          providing exceptional customer service, so our friendly support team
          is always ready to assist you with any queries or concerns.
          AdventureGear.com also offers competitive prices without compromising
          on quality. We believe everyone should have access to reliable
          adventure gear, regardless of their budget. With our secure payment
          options and fast shipping, you can gear up and hit the trails in no
          time. Visit AdventureGear.com today and embark on unforgettable
          adventures with confidence. Your next thrilling expedition awaits!`}
					</p>
					<Image
						src={
							'https://lh5.googleusercontent.com/8gwdZIlrONenDA5NJsi6tLsSFXOijfkzeOOVTEG8P1u2lPntRLKdgL6ozNkldkvb8Fcf801B6s2pj2_dNtoaVTTKDlHSZ6ViSwgZZPi8JtlbUUKGiiyvInV2IbC_49BjB1xgcKgc'
						}
						alt=""
						width={900}
						height={600}
						className="self-center object-cover w-1/2 mt-8"
					/>
					<p className="mt-2 text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac ullamcorper velit. Duis
						consequat ipsum at iaculis euismod. Donec non finibus ligula. Quisque volutpat magna non mi
						auctor consequat. Aenean metus mi, fringilla vel varius eget, scelerisque nec sem. Praesent at
						ligula non neque pulvinar molestie non ut lacus. Vestibulum quis vulputate odio, at placerat
						risus. Nunc semper dolor sit amet neque volutpat sagittis. Maecenas eget est bibendum, lobortis
						arcu sed, cursus ipsum. Pellentesque vitae vehicula lacus. Morbi blandit libero eget turpis
						porta, sed dapibus velit iaculis. Integer imperdiet est vitae pellentesque dignissim. In hac
						habitasse platea dictumst. Nulla laoreet urna in est rhoncus, sit amet ornare neque egestas.
						Phasellus id viverra massa, eget posuere felis. Quisque eu nunc nec ipsum sodales sodales.
						Pellentesque non aliquet felis. Vestibulum lectus purus, pretium vel nulla ut, iaculis malesuada
						orci. Suspendisse potenti. Maecenas egestas faucibus dui, ut vestibulum nunc porta nec. Nunc
						interdum ante at turpis porta, convallis blandit ante dapibus.
					</p>
					<p className="mt-2 text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac ullamcorper velit. Duis
						consequat ipsum at iaculis euismod. Donec non finibus ligula. Quisque volutpat magna non mi
						auctor consequat. Aenean metus mi, fringilla vel varius eget, scelerisque nec sem. Praesent at
						ligula non neque pulvinar molestie non ut lacus. Vestibulum quis vulputate odio, at placerat
						risus. Nunc semper dolor sit amet neque volutpat sagittis. Maecenas eget est bibendum, lobortis
						arcu sed, cursus ipsum. Pellentesque vitae vehicula lacus. Morbi blandit libero eget turpis
						porta, sed dapibus velit iaculis. Integer imperdiet est vitae pellentesque dignissim. In hac
						habitasse platea dictumst. Nulla laoreet urna in est rhoncus, sit amet ornare neque egestas.
						Phasellus id viverra massa, eget posuere felis. Quisque eu nunc nec ipsum sodales sodales.
						Pellentesque non aliquet felis. Vestibulum lectus purus, pretium vel nulla ut, iaculis malesuada
						orci. Suspendisse potenti. Maecenas egestas faucibus dui, ut vestibulum nunc porta nec. Nunc
						interdum ante at turpis porta, convallis blandit ante dapibus.
					</p>
					<div className="flex flex-col items-center justify-center mt-8 w-full">
						<p className="text-4xl font-bold mb-2">Rate this</p>
						<div className="text-center">
							<ReactStars count={5} size={38} color2={'#ffd700'} />
						</div>
					</div>
				</div>
				<div className="fixed flex flex-col bottom-10 right-10">
					<>
						<Modal isOpen={isOpenShare} onClose={closeModal}>
							<h2 className="text-2xl mb-4">This is a url for your profile</h2>
							<p>
								lioke.codesmedioa.cloud/PXYNAM{' '}
								<span>
									{' '}
									<button
										onClick={() => closeModalShare()}
										className="py-1 px-3 text-sm font-semibold text-white rounded-full bg-slate-400 flex mt-2 items-center"
									>
										<MdCopyAll />
										Copy to clipboard
									</button>
								</span>{' '}
							</p>
						</Modal>
					</>
					<div className="fixed flex flex-col bottom-20 right-10">
						<a
							className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary group relative"
							onClick={onClickCta}
						>
							<FaPlus />
							<span className="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
								More
							</span>
						</a>

						{isShowButton ? (
							<>
								<Link href={'/clientzone/project-list/1'}>
									<button className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary group relative">
										<BsShareFill />
										<span className="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
											Share
										</span>
									</button>
								</Link>
								<button className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary group relative">
									<BsPrinter />
									<span className="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
										Print
									</span>
								</button>
								{/* <Link href={"/clientzone/project-list/1"}>
              <button className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary">
                <AiOutlineEdit />
              </button>
            </Link> */}
								{/* <a className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary" onClick={openModal}>
                  <MdComment />
                </a> */}
								<Link
									className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary group relative"
									href={'mailto:wildan.romiza@gmail.com?subject=SendMail&body=Description'}
								>
									<MdOutlineEmail />
									<span className="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
										Message
									</span>
								</Link>
								<CommentsDialog
									setModalComments={setIsShowComments}
									showModalComments={isShowComments}
								/>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
