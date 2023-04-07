export default function Input({ id, label, type, onChange, value, placeholder, beforeElement, afterElement, className, inputClassName, labelClassName, disabled }) {
    return (
        <div className="grid gap-1 font-work-sans">
            {label && <label className={["capitalize", labelClassName].join(' ')} htmlFor={id}>{label}</label>}
            <div className={["flex gap-4 justify-between items-center border-2 border-[C6C6C6] p-3 rounded-md bg-white", className].join(' ')}>
                {beforeElement && <span className="select-none">{beforeElement}</span>}
                <input
                    id={id}
                    type={type}
                    className={["w-full bg-white focus:outline-none", inputClassName].join(' ')}
                    onChange={(e) => onChange(e.target.value)}
                    value={value ?? ''}
                    placeholder={placeholder}
                    autoComplete="off"
                    disabled={disabled}
                />
                {afterElement && <span className="select-none">{afterElement}</span>}
            </div>
        </div>
    )
}