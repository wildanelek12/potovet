import { useState } from "react";
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
  isHaveTemplate,
  isError, // Add this prop for handling error state
  isUrl = false,
}) {
  const isValueNull = value === null || value === undefined || value === "";
  const isValidURL = (input) => {
    // Regular expression for URL validation
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(input);
  };

  const [validatedUrl, setIsValidatedUrl] = useState(false);

  var validFormUrl = false;
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Check if the input is a valid URL
    if (isUrl) {
      setIsValidatedUrl(isValidURL(inputValue));
    }

    return onChange(e.target.value); // Pass both input value and validity to the parent component
  };

  return (
    <div className="grid gap-1 font-work-sans">
      {label && (
        <label
          className={["capitalize", labelClassName].join(" ") + "font-semibold"}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={[
          "flex gap-4 justify-between items-center border-2 focus:outline-none rounded-md bg-white outline-none",
          className,
          isValueNull || (isUrl && !validatedUrl) ? "border-red-500" : "",
        ].join(" ")}
      >
        {beforeElement && <span className="select-none">{beforeElement}</span>}
        <input
          id={id}
          type={type}
          className={[
            "w-full bg-white focus:outline-none focus:border-none border-none outline-none",
            inputClassName,
          ].join(" ")}
          onChange={handleInputChange}
          value={value ?? ""}
          placeholder={placeholder}
          autoComplete="off"
          style={{
            outline: "none", // Adding inline style to override potential CSS conflicts
            // Add other styles as needed
          }}
          disabled={disabled}
        />
        {afterElement && <span className="select-none">{afterElement}</span>}
        {value && validatedUrl ? <BsCheckCircleFill color="#64CCC5" /> : ""}
      </div>
      {isUrl ? (
        <>
          <div className="row">
            {validatedUrl ? (
              ""
            ) : (
              <p className="text-red-500 text-sm">Format Url Salah</p>
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
