"use client";

import { Fragment, useEffect, useState } from "react";
import Card from "../../Parts/Card";
import Button from "@/components/Button";
import ProjectOverview from "./project-overview/form";
import { useRecoilValue } from "recoil";
import { atomFormProject } from "@/recoil/atom";
import ProjectProcess from "./process/form";
import Stepper from "../../Parts/Stepper";
import Result from "./result/form";
import { Dialog, Transition } from "@headlessui/react";
import AlertSuccesDialog from "@/components/alert-succes-dialog";

import Swal from "sweetalert2";

export default function Page() {
  const defaultProblemStatement = " <p> here is the problem, .............., you must ....... and then ........ </p>";
  const defaultRolesAndResponsibilities = " <p> here is roles and responsibilities, .............., you must ....... and then ........ </p>";
  const [name, setName] = useState("");
  const [rendered, setRendered] = useState(false);
  const [descProblemStatement, setDescProblemStatement] = useState(defaultProblemStatement);
  const [descRolesAndResponsibilities, setRolesAndResponsibilities] = useState(defaultRolesAndResponsibilities);
  let [isOpen, setIsOpen] = useState(false);
  let [isCompleteValidate, setIsCompleteValidate] = useState(false);
  let [isOpenAlertSuccesDialog, setIsOpenAlertSuccesDialog] = useState(false);
  var [index, setIndex] = useState(0);
  const listComponent = [<ProjectOverview key={1} />, <ProjectProcess key={2} />, <Result key={3} />];

  var renderComponent = (index) => {
    return listComponent[index];
  };

  const project = useRecoilValue(atomFormProject);
  useEffect(() => {
    if (index == 0) {
      if (project.name_project && project.categories && project.time_elapsed && project.description) {
        setIsCompleteValidate(true);
      } else {
        setIsCompleteValidate(false);
      }
    } else if (index == 1) {
      if (project.method && project.research_results && project.wireframing && project.prototype && project.prototype_url) {
        setIsCompleteValidate(true);
      } else {
        setIsCompleteValidate(false);
      }
    } else if (index == 2) {
      if (project.lesson_learn && project.challenging_impact) {
        setIsCompleteValidate(true);
      } else {
        setIsCompleteValidate(false);
      }
    }
  }, [project]);

  useEffect(() => {
    setRendered(true);
  }, []);

  const submitData = (currIndex) => {
    if (currIndex == 0) {
      if (project.name_project && project.categories && project.time_elapsed && project.description) {
        Swal.fire({
          title: "Success!",
          text: "Data Saved",
          icon: "success",
          confirmButtonText: "Oke",
        });
        setIsCompleteValidate(false);
        setIndex(currIndex + 1);
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Incomplete data",
          icon: "error",
          confirmButtonText: "Oke",
        });
      }
    } else if (currIndex == 1) {
      if (project.method && project.research_results && project.wireframing && project.prototype && project.prototype_url) {
        Swal.fire({
          title: "Success!",
          text: "Data saved",
          icon: "success",
          confirmButtonText: "Oke",
        });
        setIsCompleteValidate(false);
        setIndex(currIndex + 1);
      } else {
        setIsOpen(true);
      }
    } else if (currIndex == 2) {
      if (project.lesson_learn && project.challenging_impact) {
        Swal.fire({
          title: "Success!",
          text: "Portfolio has been created",
          icon: "success",
          confirmButtonText: "Oke",
        });
      } else {
        setIsOpen(true);
      }
    }
  };
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <p className="col-span-12 mt-8 font-bold text-xl flex-1 text-center">Create a Portfolio</p>

      <Card className="col-span-full p-8 h-fit border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <Stepper items={["Introduction", "Process", "Evaluation"]} activeIndex={index} />
        <div>{rendered && renderComponent(index)}</div>
        <div className="flex justify-between mt-8">
          {index != 0 ? (
            <Button
              type="button"
              onClick={() => {
                setIndex(index - 1);
              }}
              className="px-10 text-white transition-all bg-secondary hover:bg-secondary/80 rounded-xl w-fit"
              label="Back"
            />
          ) : (
            <div></div>
          )}

          <Button
            type="button"
            disabled={!isCompleteValidate}
            onClick={() => {
              submitData(index);
            }}
            className={["px-10 text-white transition-all  rounded-xl w-fit", isCompleteValidate ? "bg-primary hover:bg-primary/80" : "bg-gray-200"].join(" ")}
            label={index == 2 ? "Submit" : "Next"}
          />
        </div>
      </Card>
      {isOpenAlertSuccesDialog && <AlertSuccesDialog message={"tes"} setShowSuccesDialog={setIsOpenAlertSuccesDialog} showSuccesDialog={isOpenAlertSuccesDialog} />}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                    Warning
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Incomplete Data</p>
                  </div>

                  <div className="flex flex-row mt-4 gap-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Tutup
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
