import { useState } from "react";

function TextArea({ id, inputClassName, onChange, value, placeholder, disabled, label, labelClassName, beforeElement, className, afterElement, rows, maxlength }) {
	const [textLength, setTextLength] = useState(value ? value.length : 0);

	const handleInputChange = (newValue) => {
		onChange(newValue);
		setTextLength(newValue.length);
	};
	return (
		<div className="grid w-full gap-1 text-sm">
			{label && (
				<label className={["capitalize", labelClassName].join(" ")} htmlFor={id} style={{ fontWeight: 500 }}>
					{label}
				</label>
			)}
			<div className={["flex gap-4 justify-between items-center border-2 border-[C6C6C6] rounded-md bg-white", className].join(" ")}>
				{beforeElement && <span className="select-none">{beforeElement}</span>}
				<textarea
					id={id}
					className={["w-full bg-white outline-none border-none rounded-md", inputClassName].join(" ")}
					style={{ boxShadow: "none", fontSize: "14px" }}
					onChange={(e) => handleInputChange(e.target.value)}
					value={value ?? ""}
					placeholder={placeholder}
					rows={rows}
					maxLength={maxlength}
					disabled={disabled}
				/>
				{afterElement && <span className="select-none">{afterElement}</span>}
			</div>
			<div className="text-gray-500 text-xs mt-1">
				Length: {textLength}/{maxlength}
			</div>
		</div>
	)
}

export default TextArea
