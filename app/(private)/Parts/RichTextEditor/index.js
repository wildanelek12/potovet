import { Tooltip } from "chart.js";
import { Fragment, useEffect, useRef, useState } from "react";
import { BsFillPlusCircleFill, BsTrash } from "react-icons/bs";
import { RiStackFill } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { template } from "lodash";
const editorConfiguration = {
  toolbar: ["heading", "|", "bold", "italic", "|", "link", "|", "outdent", "indent", "|", "bulletedList", "numberedList", "|", "insertTable", "|", "uploadImage", "blockQuote", "|", "undo", "redo"],
};

export default function RichTextEditor({ value, onChange, label, isTextArea, hintText, template, isHaveTemplate = true }) {
  const editorRef = useRef();
  const [rendered, setRendered] = useState(false);
  const [count, setCount] = useState(0);
  const { CKEditor, Editor } = {
    CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
    Editor: require("ckeditor5-custom-build/build/ckeditor"),
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    editorRef.current = { CKEditor, Editor };
    setRendered(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(editor) {
    var data = editor.getData();
    var replaced_text = data.replace(/(<([^>]+)>)/gi, "");
    const count = replaced_text.length;

    setCount(count);
    return editor.getData();
  }

  function insertTemplate() {
    const template_copied = template;

    onChange(template_copied);
  }

  return (
    <div className="grid mt-4 ">
      <div className="flex items-center ">
        {label && <label className="font-semibold capitalize">{label}</label>}

        <button type="button" className="relative z-10 flex items-center px-3 py-1 ml-2 text-sm font-bold text-white bg-transparent rounded-full group" onClick={openModal}>
          <AiFillQuestionCircle className="" color="blue" size={24} />
          <span className="absolute bottom-0 p-2 text-xs text-white scale-0 bg-gray-800 rounded left-10 group-hover:scale-100 whitespace-nowrap">Get Info</span>
        </button>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Information
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{hintText}</p>
                    </div>

                    <div className="mt-4 text-end">
                      <button
                        type="button"
                        className="inline-flex justify-center px-3 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

        {isHaveTemplate && (
          <>
            <button type="button" className="flex items-center px-3 py-1 ml-auto text-sm font-bold text-white rounded-md bg-secondary" onClick={insertTemplate}>
              <RiStackFill className="mr-2" /> {/* Icon component */}
              Template
            </button>

            <button type="button" className="relative z-10 flex items-center px-3 py-1 ml-2 text-sm font-bold text-white bg-blue-500 rounded-md group" onClick={insertTemplate}>
              <FiRefreshCcw className="" />
              <span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded bottom-10 group-hover:scale-100">Reset</span>
            </button>
          </>
        )}
      </div>

      <div className="py-1 mt-2 h-fit ">
        {rendered && <CKEditor editor={Editor} data={value} config={!isTextArea && editorConfiguration} onChange={(_, editor) => onChange(handleChange(editor))} />}
      </div>

      {!value ? <p className="text-sm font-normal text-red-500">Isikan Kolom dengan kombinasi huruf, video, dan angka.</p> : null}
    </div>
  );
}
