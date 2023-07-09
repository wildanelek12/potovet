import { Dialog, Transition } from "@headlessui/react";
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
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div class="relative">
          <img class="rounded-t-lg" src={src} alt="" />
          <AiFillStar
            class={`absolute top-2 right-3  
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
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-500">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            {desc}
          </p>
          <div className="flex flex-row items-center">
            <Link href={"/project/2"}>
              <button
                type="button"
                class="text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
              >
                Read More
              </button>
            </Link>
            <div className="flex-1 flex flex-row justify-end ">
              <BsFillTrashFill
                class="w-5 h-5  mx-2 text-gray-400"
                onClick={openModal}
              />
              <Link href="/clientzone/project-list/1">
                <AiOutlineEdit class="w-5 h-5  mx-2 text-gray-400" />
              </Link>
            </div>
          </div>
          <h5 class="mt-4 text-sm font-light tracking-tight text-gray-500">
            at : {date}
          </h5>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-100" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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

                  <div className="mt-4 flex flex-row gap-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
