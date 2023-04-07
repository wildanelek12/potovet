"use client"

import { useState } from "react";
import Card from "../../Parts/Card";
import RichTextEditor from "../../Parts/RichTextEditor";
import FileInput from "../../Parts/FileInput";
import Input from "../../Parts/Input";
import Button from "@/components/Button";

export default function Page() {
    const [image, setImage] = useState([])
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()

        console.log(image, name, desc)
    }

    return (
        <>
            <Card className="col-span-full p-8 h-fit border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">

                <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                    <Input
                        id="project-name"
                        label="Name"
                        type="text"
                        value={name}
                        onChange={setName}
                    />

                    <FileInput
                        label="Image"
                        types={['jpg', 'png', 'jpeg']}
                        onChange={setImage}
                        value={image}
                        fileOrFiles={image}
                        previewClassName="w-full grid-cols-4"
                        preview
                        multiple
                    />


                    <RichTextEditor
                        label="Description"
                        value={desc}
                        onChange={setDesc}
                    />
                    <div className="flex justify-end">
                        <Button type="submit" className="px-10 text-white transition-all bg-black hover:bg-black/80 rounded-xl w-fit" label="Save" />
                    </div>
                </form>
            </Card>
        </>
    )
}
