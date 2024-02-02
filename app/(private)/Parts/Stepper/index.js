import { useEffect } from 'react'

export default function Stepper({ items, activeIndex }) {
	useEffect(() => {
		console.log(activeIndex)
	}, [activeIndex])

	return (
		<ol className="flex items-center w-full mb-4 text-sm font-medium text-center sm:text-base">
			{items.map((item, index) => (
				<li
					key={index}
					className={
						index == items.length - 1
							? 'flex items-center text-base ' +
							  (index <= activeIndex ? ' text-blue-600 dark:text-blue-500' : '')
							: 'flex md:w-full items-center' +
							  (index <= activeIndex
									? ' text-blue-600 dark:text-blue-500'
									: 'text-yellow-300 dark:text-yellow-300') +
							  "sm:after:content-[''] after:w-full after:h-1 after:border-b items-center after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
					}
				>
					<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 ">
						{index <= activeIndex ? (
							<>
								<svg
									aria-hidden="true"
									className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									></path>
								</svg>
							</>
						) : (
							''
						)}

						<span className="mr-2">{index + 1}</span>
						{item}
					</span>
				</li>
			))}
		</ol>
	)
}
