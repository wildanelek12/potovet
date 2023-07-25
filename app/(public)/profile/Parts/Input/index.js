import { BsCheckCircleFill } from "react-icons/bs";
export default function Input({
  id,
  label,
  type,
  onChange,
  value,
  placeholder,
  beforeElement,
  afterElement,
  className,
  inputClassName,
  labelClassName,
  disabled,
}) {
  return (
    <div className="grid gap-1 font-work-sans">
      {label && (
        <label
          className={["capitalize", labelClassName].join(" ") + "font-normal"}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={[
          "flex justify-between items-center border-2 border-[#cccccc] px-2 rounded-md bg-white",
          className,
        ].join(" ")}
      >
        {beforeElement && <span className="select-none">{beforeElement}</span>}
        <input
          id={id}
          type={type}
          className={[
            "w-full bg-white outline-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none",
            inputClassName,
          ].join(" ")}
          onChange={(e) => onChange(e.target.value)}
          value={value ?? ""}
          placeholder={placeholder}
          autoComplete="off"
          disabled={disabled}
        />
        {afterElement && <span className="select-none">{afterElement}</span>}
        {value ? <BsCheckCircleFill color="#64CCC5" /> : ""}
      </div>
    </div>
  );
}
