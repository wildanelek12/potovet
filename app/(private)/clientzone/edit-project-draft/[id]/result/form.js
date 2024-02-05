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

export default function Result() {
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
          label="Project Experience"
          value={project.lesson_learn}
          onChange={(e) => setProject({ ...project, lesson_learn: e })}
          hintText={"Isikan pengalaman yang didapat saat pengembangan produk"}
        />
        <RichTextEditor
          label="Project Challenge"
          value={project.challenging_impact}
          onChange={(e) => setProject({ ...project, challenging_impact: e })}
          hintText={"Isikan deskripsi yang memuat tentang tantangan atau kesulitan yang didapat saat pengembangan produk. poin ini juga menjelaskan manfaat penerapan produk dalam lingkup profesional"}
        />
      </div>
    </>
  );
}
