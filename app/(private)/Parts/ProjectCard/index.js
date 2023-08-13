import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiOutlineEdit, AiFillStar, Tras } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

export default function ProjectListCard({ status, src, title, desc, date }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="relative">
          <Image className="rounded-t-lg" src={src} alt="" />
          <AiFillStar
            className={`absolute top-2 right-3  
          ${
            status === "edit"
              ? "text-red-500 drop-shadow-[0_5px_5px_rgba(255,0,0,0.6)]"
              : ""
          }
          ${status === "draft" ? "text-red-400 " : ""}
          ${status === "publish" ? "text-cyan-500 " : ""}
          
          `}
            size={30}
          ></AiFillStar>
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-500">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            {desc}
          </p>
          <div className="flex flex-row items-center">
            <Link href={"/project/2"}>
              <button
                type="button"
                className="text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
              >
                Read More
              </button>
            </Link>
            <div className="flex flex-row justify-end flex-1 ">
              <BsFillTrashFill
                className="w-5 h-5  mx-2 text-gray-400"
                onClick={openModal}
              />
              <Link href="/clientzone/project-list/1">
                <AiOutlineEdit className="w-5 h-5  mx-2 text-gray-400" />
              </Link>
            </div>
          </div>
          <h5 className="mt-4 text-sm font-light tracking-tight text-gray-500">
            at : {date}
          </h5>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Warning!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure to delete this project
                    </p>
                  </div>

                  <div className="flex flex-row mt-4 gap-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-600 bg-red-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      No
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
