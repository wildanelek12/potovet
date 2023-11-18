import { Tooltip } from "chart.js";
import { Fragment, useEffect, useRef, useState } from "react";
import { BsFillPlusCircleFill, BsTrash } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
const editorConfiguration = {
  toolbar: ["heading", "|", "bold", "italic", "|", "link", "|", "outdent", "indent", "|", "bulletedList", "numberedList", "|", "insertTable", "|", "uploadImage", "blockQuote", "|", "undo", "redo"],
  //   height: "50px",
};

export default function RichTextEditor({ value, onChange, label, isTextArea }) {
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
    if (count > 2000) {
      var old_data = value;
      console.log("here");
      editor.setData(old_data);
      return old_data;
    } else {
      console.log("else");
      return editor.getData();
    }
  }

  function insertTemplate() {
    const template = "<p>Ini adalah contoh template yang sudah di copy dan akan diisi oleg pengguna</p>"; // Define your template HTML
    onChange(template); // Update the content using the onChange function
  }

  // useEffect(() => {
  //   var text = value;
  //   const count = text.replace(/(<([^>]+)>)/gi, "").length;
  //   console.log(text.replace(/(<([^>]+)>)/gi, ""));

  //   setCount(count);
  // }, [value]);
  return (
    <div className="grid mt-4">
      <div className="flex items-center  ">
        {label && <label className="capitalize font-semibold">{label}</label>}
        {/* Rounded button */}
        <AiFillInfoCircle color="blue" className="ml-1" size={24} onMouseEnter={() => setIsOpen(true)} />

        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
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
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Information
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Please fill this as a description of your project, bla bla bla bla</p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>

        <button className="rounded-md ml-2 bg-red-500 text-white text-sm font-bold px-3 py-1  flex items-center" onClick={insertTemplate}>
          <BsTrash className="mr-2" /> {/* Icon component */}
          Clear Text
        </button>
        <button className="rounded-md ml-auto bg-blue-500 text-white text-sm font-bold px-3 py-1  flex items-center" onClick={insertTemplate}>
          <BsFillPlusCircleFill className="mr-2" /> {/* Icon component */}
          Copy Template
        </button>
      </div>

      <div className="py-1 h-fit mt-2">
        {rendered && <CKEditor editor={Editor} data={value} config={!isTextArea && editorConfiguration} onChange={(_, editor) => onChange(handleChange(editor))} />}
      </div>
      <p className="font-normal text-xs">{count} / 2000 Character</p>
    </div>
  );
}
