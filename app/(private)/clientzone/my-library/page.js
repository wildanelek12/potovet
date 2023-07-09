import Card from "../../Parts/Card";
import { Chart } from "../../Parts/Chart";
import { AiFillAlert } from "react-icons/ai";
import TopItemCard from "../../Parts/TopItemCard";
import Image from "next/image";
import {BsFillTrashFill} from 'react-icons/bs'

export default function Page() {
  return (
    <>
      <p className="col-span-12 mt-8 font-bold text-xl flex-1 text-center">
        My Library
      </p>
      <Card className="col-span-full lg:col-span-12 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <div className="p-8">
          <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
              type="button"
              class="text-white hover:text-white border  bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-2xl text-base font-medium px-5 py-2.5 text-center mr-3 mb-3"
            >
              + Image
            </button>
            <button
              type="button"
              class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
            >
              All categories
            </button>
            <button
              type="button"
              class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            >
              Academic
            </button>
            <button
              type="button"
              class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            >
              Professional
            </button>
            <button
              type="button"
              class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            >
              Research
            </button>
            <button
              type="button"
              class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            >
              Informal Trainings
            </button>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative">
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://cdn.dribbble.com/users/3126500/screenshots/6023737/adventure.jpg"
                alt=""
              />
              <div className="absolute shadow-lg bottom-2 right-2 w-12 h-12 flex items-center justify-center bg-white rounded-full p-2">
                <BsFillTrashFill
                  class="w-6 h-6 text-gray-400"
                  color="#FE7263"
                />
              </div>
            </div>
            <div className="relative">
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://i.pinimg.com/originals/1a/29/04/1a29046bb1bea902f9f3b4cd2dc2e727.png"
                alt=""
              />
              <div className="absolute shadow-lg bottom-2 right-2 w-12 h-12 flex items-center justify-center bg-white rounded-full p-2">
                <BsFillTrashFill
                  class="w-6 h-6 text-gray-400"
                  color="#FE7263"
                />
              </div>
            </div>
            <div className="relative">
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://img.freepik.com/free-vector/gradient-texture-travel-agency-landing-page_23-2149342695.jpg"
                alt=""
              />
              <div className="absolute shadow-lg bottom-2 right-2 w-12 h-12 flex items-center justify-center bg-white rounded-full p-2">
                <BsFillTrashFill
                  class="w-6 h-6 text-gray-400"
                  color="#FE7263"
                />
              </div>
            </div>
            <div className="relative">
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
              <div className="absolute shadow-lg bottom-2 right-2 w-12 h-12 flex items-center justify-center bg-white rounded-full p-2">
                <BsFillTrashFill
                  class="w-6 h-6 text-gray-400"
                  color="#FE7263"
                />
              </div>
            </div>
            <div className="relative">
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
              <div className="absolute shadow-lg bottom-2 right-2 w-12 h-12 flex items-center justify-center bg-white rounded-full p-2">
                <BsFillTrashFill
                  class="w-6 h-6 text-gray-400"
                  color="#FE7263"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
