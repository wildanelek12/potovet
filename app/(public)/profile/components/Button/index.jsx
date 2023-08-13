function Button({ type, className, label, onClick, disabled }) {
	const handleOnClick = () => {
		if (!disabled && onClick) {
			onClick()
		}
	}

	return (
		<button
			type={type}
			onClick={handleOnClick}
			className={[
				"text-white select-none text-center bg-primary disabled:bg-primary/50 hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 transition-all",
				className,
			].join(" ")}
			disabled={disabled}
		>
			{label}
		</button>
	)
}

export default Button
