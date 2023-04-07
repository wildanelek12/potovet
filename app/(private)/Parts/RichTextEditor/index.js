import { useEffect, useRef, useState } from 'react'

const editorConfiguration = {
    toolbar: [
        'heading', '|',
        'bold', 'italic', '|',
        'link', '|',
        'outdent', 'indent', '|',
        'bulletedList', 'numberedList', '|',
        'insertTable', '|',
        'uploadImage', 'blockQuote', '|',
        'undo', 'redo'
    ],
    height: '40vh'
};

export default function RichTextEditor({ value, onChange, label }) {
    const editorRef = useRef();
    const [rendered, setRendered] = useState(false)
    const { CKEditor, Editor } = {
        CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
        Editor: require("ckeditor5-custom-build/build/ckeditor"),
    }

    useEffect(() => {
        editorRef.current = { CKEditor, Editor }
        setRendered(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="grid">
            {label && <label className="capitalize">{label}</label>}
            <div className="py-1">
                {rendered && (
                    <CKEditor
                        editor={Editor}
                        data={value}
                        config={editorConfiguration}
                        onChange={(_, editor) => onChange(editor.getData())}
                    />
                )}
            </div>
        </div>
    );
}