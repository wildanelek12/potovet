"use client"
import Card from "../../Parts/Card";
import { Chart } from "../../Parts/Chart";
import { AiFillAlert } from "react-icons/ai";
import TopItemCard from "../../Parts/TopItemCard";
import Image from "next/image";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import Swal from "sweetalert2";

export default function Page() {
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
      <p className="flex-1 col-span-12 mt-8 text-xl font-bold text-center">
        My Library
      </p>
      <Card className="col-span-full lg:col-span-12 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <div className="p-8">
          <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button
              type="button"
              className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
            >
              All categories
            </button>
            <button
              type="button"
              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            >
              Academic
            </button>
            <button
              type="button"
              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            >
              Professional
            </button>
            <button
              type="button"
              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            >
              Research
            </button>
            <button
              type="button"
              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            >
              Informal Trainings
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative">
              <Image
                className="h-full max-w-full rounded-lg object-cover"
                src="https://i.pinimg.com/originals/1a/29/04/1a29046bb1bea902f9f3b4cd2dc2e727.png"
                alt=""
                width={500}
                height={500}
              />
              <div className="absolute flex flex-row bottom-2 right-2 gap-x-3">
                <div className="items-center justify-center p-2 bg-white rounded-full shadow-lg">
                  <FaDownload
                    className="w-6 h-6 text-gray-400 "
                    color="#0CADB7"
                  />
                </div>
                <div className="items-center justify-center p-2 bg-white rounded-full shadow-lg">
                  <BsFillTrashFill
                    className="w-6 h-6 text-gray-400 "
                    color="#FE7263"
                    onClick={() => deleteData()}
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                className="h-full max-w-full rounded-lg object-cover"
                src="https://img.freepik.com/free-vector/gradient-texture-travel-agency-landing-page_23-2149342695.jpg"
                alt=""
                width={500}
                height={800}
              />
              <div className="absolute flex flex-row bottom-2 right-2 gap-x-3">
                <div className="items-center justify-center p-2 bg-white rounded-full shadow-lg">
                  <FaDownload
                    className="w-6 h-6 text-gray-400 "
                    color="#0CADB7"
                  />
                </div>
                <div className="items-center justify-center p-2 bg-white rounded-full shadow-lg">
                  <BsFillTrashFill
                    className="w-6 h-6 text-gray-400 "
                    color="#FE7263"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                className="h-full max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
                width={500}
                height={500}
              />
              <div className="absolute flex flex-row bottom-2 right-2 gap-x-3">
                <div className="items-center justify-center p-2 bg-white rounded-full shadow-lg">
                  <FaDownload
                    className="w-6 h-6 text-gray-400 "
                    color="#0CADB7"
                  />
                </div>
                <div className="items-center justify-center p-2 bg-white rounded-full shadow-lg">
                  <BsFillTrashFill
                    className="w-6 h-6 text-gray-400 "
                    color="#FE7263"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                className="h-full max-w-full rounded-lg object-cover"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
                width={500}
                height={500}
              />
              <div className="absolute flex flex-row bottom-2 right-2 gap-x-3">
                <div className="items-center justify-center p-2 bg-white rounded-full shadow-lg">
                  <FaDownload
                    className="w-6 h-6 text-gray-400 "
                    color="#0CADB7"
                  />
                </div>
                <div className="items-center justify-center p-2 bg-white rounded-full shadow-lg">
                  <BsFillTrashFill
                    className="w-6 h-6 text-gray-400 "
                    color="#FE7263"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed flex flex-col bottom-10 right-10">
          <Link
            className="p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary"
            href={
              "mailto:support@example.com?subject=SendMail&body=Description"
            }
          >
            <AiOutlinePlus />
          </Link>
        </div>
      </Card>
    </>
  );
}
