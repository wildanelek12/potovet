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

export default function ProjectProcess() {
  const optionCategories = [
    { id: 1, name: "Academic", unavailable: false },
    { id: 2, name: "Professional", unavailable: false },
    { id: 2, name: "Reseacrh", unavailable: false },
    { id: 2, name: "Informal Trainings", unavailable: false },
  ];
  //const [projectName, setProjectName] = useRecoilState(atomProjectName);
  const [project, setProject] = useRecoilState(atomFormProject);

  return (
    <>
      <div className="grid gap-4">
        <RichTextEditor
          label="Method"
          value={project.method}
          onChange={(e) => setProject({ ...project, method: e })}
        />
        <RichTextEditor
          label="Research Result"
          value={project.research_results}
          onChange={(e) => setProject({ ...project, research_results: e })}
        />
        <RichTextEditor
          label="Wireframing"
          value={project.wireframing}
          onChange={(e) => setProject({ ...project, wireframing: e })}
        />
        <RichTextEditor
          label="Prototype"
          value={project.prototype}
          onChange={(e) => setProject({ ...project, prototype: e })}
        />
        <Input
          id="prototype-url"
          label="Prototype URL"
          type="text"
          isUrl = {true}
          value={project.prototype_url}
          onChange={(e) => setProject({ ...project, prototype_url: e })}
        />
      </div>
    </>
  );
}
