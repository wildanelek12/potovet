import Link from "next/link";
import { AiOutlineEdit, AiFillStar,Tras } from "react-icons/ai";
import {BsFillTrashFill} from "react-icons/bs"

export default function ProjectListCard({ status,src,title,desc,date }) {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div class="relative">
        <img
          class="rounded-t-lg"
          src={src}
          alt=""
        />
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
          <button
            type="button"
            class="text-white bg-primary hover:bg-primary/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
          >
            Read More
          </button>

          <div className="flex-1 flex flex-row justify-end ">
            <Link href="/clientzone/project-list/1">
              <BsFillTrashFill class="w-5 h-5  mx-2 text-gray-400" />
            </Link>
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
  );
}
