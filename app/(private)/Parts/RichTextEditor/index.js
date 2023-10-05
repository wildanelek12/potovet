import { useEffect, useRef, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs"; 
const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "|",
    "link",
    "|",
    "outdent",
    "indent",
    "|",
    "bulletedList",
    "numberedList",
    "|",
    "insertTable",
    "|",
    "uploadImage",
    "blockQuote",
    "|",
    "undo",
    "redo",
  ],
  //   height: "50px",
};

export default function RichTextEditor({ value, onChange, label,isTextArea }) {
  const editorRef = useRef();
  const [rendered, setRendered] = useState(false);
  const [count, setCount] = useState(0);
  const { CKEditor, Editor } = {
    CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
    Editor: require("ckeditor5-custom-build/build/ckeditor"),
  };

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
    if(count > 500){
      var old_data = value;
      console.log("here");
      editor.setData(old_data)
      return old_data;
    }else{
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
         <div className="flex items-center">
        {label && <label className="capitalize font-semibold">{label}</label>}
        {/* Rounded button */}
        <button className="rounded-md bg-blue-500 text-white text-sm font-bold px-3 py-1 ml-2 flex items-center" onClick={insertTemplate}>
          <BsFillPlusCircleFill className="mr-2" /> {/* Icon component */}
          Copy Template
        </button>
      </div>
      
      <div className="py-1 h-fit mt-2">
        {rendered && (
          <CKEditor
            editor={Editor}
            data={value}
            config={!isTextArea && editorConfiguration}
            onChange={(_, editor) => onChange(handleChange(editor))}
          />
        )}
      </div>
      <p className="font-normal text-xs">{count} / 500 Character</p>
    </div>
  );
}
