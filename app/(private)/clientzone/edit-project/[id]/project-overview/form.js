"use client";
import FileInput from "@/app/(private)/Parts/FileInput";
import Input from "@/app/(private)/Parts/Input";
import RichTextEditor from "@/app/(private)/Parts/RichTextEditor";
import Select from "@/app/(private)/Parts/Select";
import Datepicker from "react-tailwindcss-datepicker";
import { atomFormProject } from "@/recoil/atom";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import DatePickerComponent from "@/app/(private)/Parts/DatePicker";
import '../../../../../../style.css'
export default function ProjectOverview() {
  const optionCategories = [
    { id: 1, name: "Academic", unavailable: false },
    { id: 2, name: "Professional", unavailable: false },
    { id: 2, name: "Research", unavailable: false },
    { id: 2, name: "Informal Trainings", unavailable: false },
  ];
  //const [projectName, setProjectName] = useRecoilState(atomProjectName);
  const [project, setProject] = useRecoilState(atomFormProject);
  const [value, setValue] = useState('');

  return (
    <>
      <div className="grid gap-4 ">
        <Input
          id="project-name"
          label="Name"
          type="text"
          value={project.name_project}
          onChange={(e) => setProject({ ...project, name_project: e })}
        />
        <Select
          options={optionCategories}
          defaultValue={optionCategories[0]}
          selected={project.categories}
          onChange={(e) => setProject({ ...project, categories: e })}
          label={"Project Categories"}
        />
        <DatePickerComponent
          asSingle={false}
          value={project.time_elapsed}
          onChange={(newValue) =>
            setProject({ ...project, time_elapsed: newValue })
          }
        />
        <FileInput
          label="Project Image"
          types={["jpg", "png", "jpeg"]}
          onChange={(e) => setProject({ ...project, project_image: e })}
          value={project.project_image}
          fileOrFiles={project.project_image}
          previewClassName="w-full grid-cols-4"
          preview
          multiple
        />
        <RichTextEditor
          label="Description"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e })}
        />
         {/* <ReactQuill  theme="snow" value={value} onChange={setValue} />; */}
      </div>
    </>
  );
}
