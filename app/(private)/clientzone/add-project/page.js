"use client";

import { useEffect, useState } from "react";
import Card from "../../Parts/Card";
import RichTextEditor from "../../Parts/RichTextEditor";
import FileInput from "../../Parts/FileInput";
import Input from "../../Parts/Input";
import Button from "@/components/Button";
import { list } from "postcss";
import ProjectOverview from "./project-overview/form";
import { useRecoilValue } from "recoil";
import { atomFormProject } from "@/recoil/atom";
import ProjectProcess from "./process/form";
import Stepper from "../../Parts/Stepper";
import Result from "./result/form";

export default function Page() {
  const defaultProblemStatement =
    " <p> here is the problem, .............., you must ....... and then ........ </p>";
  const defaultRolesAndResponsibilities =
    " <p> here is roles and responsibilities, .............., you must ....... and then ........ </p>";
  const [name, setName] = useState("");
  const [descProblemStatement, setDescProblemStatement] = useState(
    defaultProblemStatement
  );
  const [descRolesAndResponsibilities, setRolesAndResponsibilities] = useState(
    defaultRolesAndResponsibilities
  );
  var [index, setIndex] = useState(0);
  const listComponent = [<ProjectOverview />, <ProjectProcess />, <Result />];
  var renderComponent = (index) => {
    return listComponent[index];
  };

  const project = useRecoilValue(atomFormProject);
  useEffect(() => {
    console.log(project);
  }, [project]);

  return (
    <>
      <p className="col-span-12 mt-4">Project Area</p>

      <Card className="col-span-full p-8 h-fit border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <Stepper
          items={["Overview", "Process", "Result"]}
          activeIndex={index}
        />
        <div>{renderComponent(index)}</div>
        <div className="flex justify-between mt-8">
          {index != 0 ? (
            <Button
              type="button"
              onClick={() => {
                setIndex(index - 1);
              }}
              className="px-10 text-white transition-all bg-black hover:bg-black/80 rounded-xl w-fit"
              label="Previous"
            />
          ) : (
            <div></div>
          )}

          <Button
            type="button"
            onClick={() => {
              setIndex(index + 1);
            }}
            className="px-10 text-white transition-all bg-black hover:bg-black/80 rounded-xl w-fit"
            label={index == listComponent ? "Publish" : "Submit"}
          />
        </div>
      </Card>
    </>
  );
}
