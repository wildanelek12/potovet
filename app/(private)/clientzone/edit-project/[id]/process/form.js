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
          label="Project Methodology"
          value={project.method}
          onChange={(e) => setProject({ ...project, method: e })}
          hintText={"Isikan dengan cara atau pendekatan apa yang dipilih untuk mengembangkan produk. poin ini dilengkapi dengan argumentasi mengapa cara atau pendekatan dapat dipilih."}
        />
        <RichTextEditor
          label="Project Findings"
          value={project.research_results}
          onChange={(e) => setProject({ ...project, research_results: e })}
          hintText={"Isikan dengan hasil penelitian yang diperoleh selama pengembangan produk."}
        />
        <RichTextEditor
          label="Project Sketches"
          value={project.wireframing}
          onChange={(e) => setProject({ ...project, wireframing: e })}
          hintText={"Isikan tampilan produk dengan bentuk sketsa. poin ini memuat tampilan produk dengan layout berwarna hitam putih."}
        />
        <RichTextEditor
          label="Project Visual"
          value={project.prototype}
          onChange={(e) => setProject({ ...project, prototype: e })}
          hintText={"Isikan tampilan produk dengan desain layout berwarna."}
        />
        <Input
          id="prototype-url"
          label="Prototype URL"
          type="text"
          isUrl={true}
          isHint={true}
          value={project.prototype_url}
          onChange={(e) => setProject({ ...project, prototype_url: e })}
          hintText={"Isikan tampilan produk yang dilengkapi dengan interaksi. desain ini akan memberikan tampilan dan interaksi dengan user secara langsung seperti produk nyata."}
        />
        <Input
          id="prototype-url"
          label="Github URL"
          type="text"
          isUrl={true}
          isHint={true}
          value={project.github_url}
          onChange={(e) => setProject({ ...project, github_url: e })}
          isRequired={false}
          hintText={"Isikan kode program yang digunakan untuk mengembangkan produk"}
        />
      </div>
    </>
  );
}
