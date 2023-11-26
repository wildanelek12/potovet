import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiOutlineEdit, AiFillStar } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { FaLock, FaUnlock } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

export default function ProjectListCard({
  status,
  src,
  title,
  desc,
  date,
  privacy,
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  function deleteData() {
    Swal.fire({
      title: "Perhatian",
      text: "Apakah anda yakin akan menghapus data?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oke",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sukses",
          text: "Berhasil menghapus data",
          icon: "success",
        });
      }
    });
  }
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="relative">
          <Image
            className="rounded-t-lg w-full h-full"
            src={src}
            alt=""
            width={500}
            height={500}
          />
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
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-500 truncate">
            {/* Apply truncate class to the title */}
            {title}
          </h5>
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
              {privacy === "public" ? (
                <>
                  <FaUnlock
                    className="w-5 h-5  mx-2 text-green-400"
                    onClick={openModal}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Public"
                  />
                  {/* Render the unlock icon if privacy is public */}
                </>
              ) : (
                <>
                  <FaLock
                    className="w-5 h-5  mx-2 text-red-400"
                    onClick={openModal}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Private"
                  />
                  {/* Render the lock icon if privacy is private */}
                </>
              )}
              <BsFillTrashFill
                className="w-5 h-5  mx-2 text-gray-400 hover:text-red-500"
                onClick={() => deleteData()}
              />
              <Tooltip id="my-tooltip" />
              <Link href="/clientzone/edit-project/1">
                <AiOutlineEdit className="w-5 h-5  mx-2 text-gray-400" />
              </Link>
            </div>
          </div>
          <h5 className="mt-4 text-sm font-light tracking-tight text-gray-500">
            at : {date}
          </h5>
        </div>
      </div>
    </>
  );
}
