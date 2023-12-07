import ProjectCard from "@/components/project-card";
import CardYear from "@/components/year-card";
import { showMonthContent, showProjectContent, showYearContent } from "@/recoil/atom";
import React from "react";
import { useSetRecoilState } from "recoil";

export default function SelectProject() {
  return (
    <div className="flex-1 w-full mt-4 grid grid-cols-5 gap-8 px-16">
      <ProjectCard />
    </div>
  );
}
