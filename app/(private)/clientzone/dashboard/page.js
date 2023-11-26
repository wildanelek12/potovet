import Card from "../../Parts/Card";
import { Chart } from "../../Parts/Chart";
import { AiFillAlert } from "react-icons/ai";
import TopItemCard from "../../Parts/TopItemCard";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex flex-row justify-center mt-4 col-span-full lg:col-12">
        <p className="flex-1 text-xl font-bold text-center ">
          Portofolio Insights
        </p>

        <div
          className="inline-flex rounded-md shadow-sm justify-self-end"
          role="group"
        >
          <p
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Academic
          </p>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {"<"}
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {">"}
          </button>
        </div>
      </div>

      <Card className="col-span-full lg:col-span-12 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <div className="flex h-full">
          <div className="flex-1 flex flex-col pt-4 ">
            <p className="ml-8 font-semibold text-primary">
              Portofolio Summary
            </p>
            <div className="grid h-full grid-cols-2 mt-2 bg-primary">
              <div className="grid p-2 text-center border bg">
                <h2 className="text-sm font-light text-white ">Views</h2>
                <p className="mt-2 text-4xl font-bold text-white">200</p>
              </div>
              <div className="grid p-2 text-center border bg">
                <h2 className="text-sm font-light text-white ">Likes</h2>
                <p className="text-4xl font-bold text-white">64</p>
              </div>
              <div className="grid p-2 text-center border bg">
                <h2 className="text-sm font-light text-white ">Comments</h2>
                <p className="text-4xl font-bold text-white">10</p>
              </div>
              <div className="grid p-2 text-center border bg">
                <h2 className="text-sm font-light text-white ">Share</h2>
                <p className="text-4xl font-bold text-white">66</p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-8 ">
            <div className="grid gap-2 text-center place-items-center">
              <div className="justify-center">
                <AiFillAlert size={48} color="#E6846E" />
              </div>

              <p className="text-base font-normal">
                {"Portofolio draft dan publish tersimpan otomatis dalam menu 'Portofolio Journey'"}
              </p>
            </div>
          </div>
        </div>
      </Card>
      <Card className="col-span-full lg:col-span-12 p-8 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <Chart />
      </Card>
      <Card className="col-span-full h-full lg:col-span-4 p-8 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <p className="font-semibold text-primary">Top Items</p>
        <div className="flex flex-col mt-2 gap-y-6">
          <TopItemCard src={"https://cdn.dribbble.com/users/3126500/screenshots/6023737/adventure.jpg"} name={"Website Promosi International BAG for backpaker"} rank={1}/>
          <TopItemCard src={"https://i.pinimg.com/originals/1a/29/04/1a29046bb1bea902f9f3b4cd2dc2e727.png"} name={"Food & Beverages Landing Page"} rank={2}/>
          <TopItemCard src={"https://img.freepik.com/free-vector/gradient-texture-travel-agency-landing-page_23-2149342695.jpg"} name={"Travelio : lets around the world"} rank={3}/>
        </div>
      </Card>
      <Card className="col-span-full h-full lg:col-span-4 p-8 border-none shadow-[0_6px_20px_rgba(154,154,154,0.25),0_-6px_20px_rgba(154,154,154,0.2)]">
        <p className="font-semibold text-primary">Viewer Activity</p>

        <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-8">
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <Image
                className="rounded-full shadow-lg"
                src={
                  "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
                }
                alt="Thomas Lean image"
                width={120}
                height={120}
              />
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                1 day ago
              </time>
              <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                Noval has comment in your project
              </div>
            </div>
          </li>
          <li className="ml-6 mt-4">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <Image
                className="rounded-full shadow-lg"
                src={
                  "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
                }
                alt="Thomas Lean image"
                width={120}
                height={120}
              />
            </span>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                1 day ago
              </time>
              <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                Noval has Liked your project
              </div>
            </div>
          </li>
        </ol>
      </Card>
    </>
  );
}
