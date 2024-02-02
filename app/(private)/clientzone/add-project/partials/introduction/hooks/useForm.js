export const useForm = () => {
	const handleOnSubmit = (e) => {
		e.preventDefault()

		console.log('submited')
	}

	return {
		onSubmit: handleOnSubmit,
	}
}
