import React from "react"

export default function ListSkill(props) {
	return (
		<div>
			<span className="flex items-center text-lg text-gray-900 font-regular dark:text-white">
				<span className="flex w-3 h-3 bg-secondary rounded-full mr-1.5 flex-shrink-0"></span>
				{props?.label}
			</span>
			<hr className="my-4 rounded bg-secondary border-1 border-secondary" />
		</div>
	)
}
