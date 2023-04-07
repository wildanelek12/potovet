"use client"

export default function Button({
    className,
    type,
    children,
    label,
    onClick,
    disabled,
}) {
    const clickHandle = () => {
        if (!disabled) {
            if (onClick) {
                onClick()
            }
        }
    }

    return (
        <button
            type={type}
            onClick={clickHandle}
            className={[
                "flex flex-row justify-center items-center gap-2 p-2 cursor-pointer select-none focus-visible:outline-none disabled:cursor-default rounded-lg",
                className,
            ].join(" ")}
            disabled={disabled}
        >
            {label && <p className="capitalize text-inherit">{label}</p>}
            {children}
        </button>
    )
}
