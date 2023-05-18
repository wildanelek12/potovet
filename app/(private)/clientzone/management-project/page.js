"use client";

import { useState } from "react";
import Card from "../../Parts/Card";
import RichTextEditor from "../../Parts/RichTextEditor";
import FileInput from "../../Parts/FileInput";
import Input from "../../Parts/Input";
import Button from "@/components/Button";
import { list } from "postcss";
import ProjectOverview from "./project-overview/form";

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
  const listComponent = [<ProjectOverview/>];
  var renderComponent = (index) => {
    return listComponent[index];
  };

  return (
    <>
      <p className="col-span-12 mt-4">Project Area</p>

      <Card className="col-span-full p-8 h-fit border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mb-4">
          <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                aria-hidden="true"
                class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="mr-2">1</span>
              Overview
            </span>
          </li>
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span class="mr-2">2</span>
              Process
            </span>
          </li>
          <li class="flex items-center">
            <span class="mr-2">3</span>
            Result
          </li>
        </ol>

        <div>{renderComponent(index)}</div>
        <div className="flex justify-between mt-2">
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
            label="Next"
          />
        </div>
      </Card>
    </>
  );
}
