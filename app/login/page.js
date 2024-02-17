'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'
import AlertDialog from '@/components/alert-dialog'
import Link from 'next/link'
import { useLoginMutation } from '@/redux/services/authApi'

export default function Page() {
	const router = useRouter()

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const [showModalError, setShowModalError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const [login] = useLoginMutation()

	const handleOnClick = () => {
		login({ data: formData }).then(({ data, error }) => {
			if (!error) {
				const { user, token } = data?.data

				localStorage.setItem('token', token)
				localStorage.setItem('user', JSON.stringify(user))
				router.push('/')
			} else {
				setErrorMessage(error?.data?.message)
				setShowModalError(true)
			}
		})
	}

	return (
		<>
			{showModalError && (
				<AlertDialog
					message={errorMessage}
					setShowModalError={setShowModalError}
					showModalError={showModalError}
				/>
			)}

			<div className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
						<h1 className="mr-8 text-4xl font-bold text-primary">POTOVET</h1>
					</a>
					<div className="w-full bg-white rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl ">
								Sign In
							</h1>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 "
									placeholder="name@company.com"
									required=""
								/>
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-primary ">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 "
									required=""
								/>
							</div>
							<button
								type="button"
								className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
								onClick={handleOnClick}
							>
								Sign In
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Don’t have an account yet?{' '}
								<Link
									href="/sign-up"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Sign Up
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
