import { useState, useEffect } from "react";
import Image from "next/image";
import { FileUploader } from "react-drag-drop-files";

export default function FileInput({
  label,
  className,
  onChange,
  value,
  types,
  multiple,
  preview,
  previewClassName,
  previewInitial,
  labelClassName,
  fileOrFiles,
}) {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    if (preview) {
      const temp = value.map((v) => URL.createObjectURL(v));
      setPreviews(temp);

      return () => {
        temp.forEach((v) => {
          URL.revokeObjectURL(v);
        });
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (file) => {
    if (multiple) {
      if (file.length > 0) {
        onChange([...file]);
      }
    } else {
      onChange([file]);
    }
  };

  return (
    <div className="grid gap-1">
      {label && (
        <label
          className={
            ["capitalize", labelClassName].join(" ") + " font-semibold"
          }
        >
          {label}
        </label>
      )}
      {previews.length == 0 && previewInitial?.length > 0 && (
        <div
          className={[
            "grid gap-4 w-full grid-cols-1 h-56",
            previewClassName,
          ].join(" ")}
        >
          {previewInitial.map((v, i) => {
            if (v) {
              return (
                <div
                  key={i}
                  className="relative grid items-center justify-center"
                >
                  <Image
                    src={`/${v}`}
                    alt={`image-preview-${i}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority
                  />
                </div>
              );
            }
          })}
        </div>
      )}
      {previews.length > 0 && (
        <div
          className={["grid gap-4 w-full grid-cols-1", previewClassName].join(
            " "
          )}
        >
          {previews.map((v, i) => (
            <div
              key={i}
              className="relative grid items-center justify-center h-56"
            >
              <Image
                src={v}
                alt={`image-preview-${i}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          ))}
        </div>
      )}
      <div className="w-full overflow-hidden">
        <FileUploader
          multiple={multiple}
          handleChange={handleChange}
          types={types}
          fileOrFiles={fileOrFiles}
        >
          <div
            className={[
              "flex gap-4 justify-between items-center border-2 border-[C6C6C6] rounded-md",
              className,
            ].join(" ")}
          >
            <div className="flex items-center w-full gap-4 p-3">
              <button className="px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out border border-gray-300 rounded-md select-none hover:text-secondary-orange hover:border-secondary-orange focus:outline-none">
                Upload
              </button>
              <span className="select-none text-[#7D7D7D] truncate">
                {value.length > 0
                  ? value.map((v) => v.name).join(", ")
                  : "No file chosen"}
              </span>
            </div>
          </div>
        </FileUploader>
      </div>
    </div>
  );
}
