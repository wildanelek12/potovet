import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { FileUploader } from "react-drag-drop-files";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";

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
  isRequired = false,
  placeholder = "No File Choosen",
  isHint = false,
  hintText
}) {
  const [previews, setPreviews] = useState([]);
  const isValueNull = value === null || value === undefined || value === "";
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

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
      <div className="flex items-center">
        {label && <label className="capitalize font-semibold">{label}</label>}
        {/* Rounded button */}
        {isHint && (
          <button
            className="rounded-full ml-2 px-2 py-2 bg-transparent text-white text-sm font-bold px-3 py-1 z-999  flex items-center group relative"
            onClick={() => setIsOpen(true)}
          >
            <AiFillQuestionCircle className="" color="blue" size={24} />
            <span className="absolute  bottom-0 left-10  scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
              Get Info
            </span>
          </button>
        )}
      </div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Information
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{hintText}</p>
                    </div>

                    <div className="mt-4 text-end">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        OK
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      {previews.length == 0 && previewInitial?.length > 0 && (
        <div
          className={[
            "grid gap-4 w-full grid-cols-1 h-56",
            previewClassName,
            isValueNull || (isUrl && !validatedUrl) ? "border-red-500" : "",
          ].join(" ")}
        >
          {previewInitial.map((v, i) => {
            if (v) {
              return (
                <div
                  key={i}
                  className="relative grid items-center justify-cente border-500"
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
              "flex gap-4 justify-between items-center border-2  rounded-md",
              className,
              previews.length == 0 && !isRequired
                ? "border-red-500"
                : "border-[C6C6C6]",
            ].join(" ")}
          >
            <div className="flex items-center w-full gap-4 p-3">
              <button className="px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out border border-gray-300 rounded-md select-none hover:text-secondary-orange hover:border-secondary-orange focus:outline-none">
                Upload
              </button>
              <span className="select-none text-[#7D7D7D] truncate">
                {value.length > 0
                  ? value.map((v) => v.name).join(", ")
                  : placeholder}
              </span>
            </div>
          </div>
        </FileUploader>
      </div>
    </div>
  );
}
