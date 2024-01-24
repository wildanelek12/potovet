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
import "../../../../../../style.css";
export default function ProjectOverview() {
  const optionCategories = [
    { id: 0, name: "Select Project Categories", unavailable: false },
    { id: 1, name: "Academic", unavailable: false },
    { id: 2, name: "Professional", unavailable: false },
    { id: 3, name: "Research", unavailable: false },
    { id: 4, name: "Informal Trainings", unavailable: false },
    { id: 5, name: "Case Study", unavailable: false },
  ];
  const optionJobRole = [
    { id: 0, name: "Select Job Role", unavailable: false },
    { id: 1, name: "Programmer", unavailable: false },
    { id: 2, name: "Designer", unavailable: false },
  ];
  //const [projectName, setProjectName] = useRecoilState(atomProjectName);
  const [project, setProject] = useRecoilState(atomFormProject);
  const [value, setValue] = useState("");

  return (
    <>
      <div className="grid gap-4 ">
        <Input id="project-name" label="Project Name" type="text" value={project.name_project} onChange={(e) => setProject({ ...project, name_project: e })} />
        <Select options={optionCategories} defaultValue={optionCategories[0]} selected={project.categories} onChange={(e) => setProject({ ...project, categories: e })} label={"Project Categories"} />

        {["Informal Trainings", "Professional"].includes(project.categories.name) && (
          <>
            <Input
              id="partner-name"
              isRequired={false}
              label="Project Partner"
              type="text"
              isHint={true}
              value={project.partner}
              onChange={(e) => setProject({ ...project, partner: e })}
              hintText={"Isikan nama industri yang menjadi client dalam pengembangan produk."}
            />
            <FileInput
              label="Recommendation Letter"
              types={["jpg", "png", "jpeg"]}
              onChange={(e) => setProject({ ...project, project_image: e })}
              value={project.project_image}
              fileOrFiles={project.project_image}
              previewClassName="w-full grid-cols-4"
              preview
              multiple
              isRequired={true}
              isHint={true}
              placeholder="File belum dipilih"
              hintText={"Isikan lampiran surat kerjasama atau surat pernah bekerja dengan industri dalam mengembangkan product."}
            />
          </>
        )}
        <DatePickerComponent asSingle={false} value={project.time_elapsed} onChange={(newValue) => setProject({ ...project, time_elapsed: newValue })} />

        <Select options={optionJobRole} defaultValue={optionJobRole[0]} selected={project.job_role} onChange={(e) => setProject({ ...project, job_role: e })} label={"Job Role"} />
        <FileInput
          label="Project Cover"
          types={["jpg", "png", "jpeg"]}
          onChange={(e) => setProject({ ...project, project_image: e })}
          value={project.project_image}
          fileOrFiles={project.project_image}
          previewClassName="w-full grid-cols-4"
          preview
          multiple
        />
        <RichTextEditor
          label="Project Overview"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e })}
          hintText={
            "Isikan dengan deskripsi pengantar pengembangan produk. poin ini memuat deskripsi tentang pendefinisian masalah yang ingin dipecahkan, peranan dalam pengembangan produk, hal menarik yang ditemukan dalam masalah, dan solusi yang dipilih untuk di implementasikan."
          }
        />
        {/* <ReactQuill  theme="snow" value={value} onChange={setValue} />; */}
      </div>
    </>
  );
}
