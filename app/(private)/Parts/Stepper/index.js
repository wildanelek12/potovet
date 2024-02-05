import { cn } from '@/utils'

export default function Stepper({ items, activeIndex, onChange, status }) {
	const handleOnClickStep = (id) => typeof onChange !== 'undefined' && status === 'PUBLISH' && onChange(id)

	return (
		<ol className="flex items-center justify-between w-full mb-4 text-sm font-medium text-center sm:text-base">
			{items.map((item, index) => (
				<li
					key={index}
					className={cn(
						'flex items-center',
						(index <= activeIndex || status === 'PUBLISH') && 'text-blue-600 dark:text-blue-500',
						typeof onChange !== 'undefined' && 'cursor-pointer'
					)}
					onClick={() => handleOnClickStep(index)}
				>
					<span className="flex flex-row items-center gap-2">
						{index <= activeIndex || status === 'PUBLISH' ? (
							<svg
								aria-hidden="true"
								className="w-4 h-4 sm:w-5 sm:h-5"
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
						) : null}

						<span className="leading-4">
							{index + 1}. {item}
						</span>
					</span>
				</li>
			))}
		</ol>
	)
}
