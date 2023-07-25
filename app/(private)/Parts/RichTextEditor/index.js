import { useEffect, useRef, useState } from "react";

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

  // useEffect(() => {
  //   var text = value;
  //   const count = text.replace(/(<([^>]+)>)/gi, "").length;
  //   console.log(text.replace(/(<([^>]+)>)/gi, ""));

  //   setCount(count);
  // }, [value]);
  return (
    <div className="grid">
      {label && <label className="capitalize font-semibold">{label}</label>}
      <div className="py-1 h-fit">
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
