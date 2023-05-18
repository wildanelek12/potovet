"use client"
import FileInput from "@/app/(private)/Parts/FileInput";
import Input from "@/app/(private)/Parts/Input";
import RichTextEditor from "@/app/(private)/Parts/RichTextEditor";
import { atomDescProblemStatement, atomProjectImage, atomProjectName } from "@/recoil/atom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

export default function ProjectOverview() {
    const [projectName,setProjectName] = useRecoilState(atomProjectName);
    const [projectImage,setProjectImage] = useRecoilState(atomProjectImage);
    const [projectDescProblemStatement,setProjectDescProblemStatement] = useRecoilState(atomDescProblemStatement);
  return (
    <>
      <div className="grid gap-4">
        <Input
          id="project-name"
          label="Name"
          type="text"
          value={projectName}
          onChange={setProjectName}
        />

        <FileInput
          label="Image"
          types={["jpg", "png", "jpeg"]}
          onChange={setProjectImage}
          value={projectImage}
          fileOrFiles={projectImage}
          previewClassName="w-full grid-cols-4"
          preview
          multiple
        />
        <RichTextEditor
          label="Description"
          value={projectDescProblemStatement}
          onChange={setProjectDescProblemStatement}
        />
      </div>
    </>
  );
}
