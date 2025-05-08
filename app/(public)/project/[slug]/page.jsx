"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaArrowAltCircleLeft } from "react-icons/fa";
import { MdOutlineEmail, MdCopyAll, MdEdit } from "react-icons/md";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPrinter,
  BsShareFill,
} from "react-icons/bs";
import ReactStars from "react-stars";
import {
  useCreateRatingProjectMutation,
  useGetProjectPreviewQuery,
} from "@/redux/services/projectApi";
import Modal from "@/components/modal";
import { useRouter } from "next/navigation";
import moment from "moment";
import { jobsData } from "./constants";
import { message } from "antd";
// import CommentsDialog from './comments'

export default function Page({ params }) {
  const [isShowButton, setIsShowButton] = React.useState(false);
  const [isOpenShare, setIsOpenShare] = React.useState(false);
  const [user, setUser] = React.useState();
  const [userId, setUserId] = useState(null);

  const [ratingMutation, { isLoading }] = useCreateRatingProjectMutation();
  const { data } = useGetProjectPreviewQuery({ params });

  const router = useRouter();
  const printRef = useRef(null);

  const handleOnCopy = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_BASE_URL}/project/${data?.data?.slug}`
    );
    message.info("URL Berhasil di salin!");
  };

  const closeModal = () => setIsShowComments(false);
  const onClickCta = () => setIsShowButton(!isShowButton);
  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            @media print {
              .navbar-selector {
                display: none !important;
              }
            }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };
  const ratingChanged = (rating) => {
    if (!isLoading) {
      ratingMutation({
        params: {
          id: data?.data?.id,
        },
        data: {
          rating,
        },
      })
        .then(({ data }) => {
          if (data) {
            message.success("Terimakasih atas Feedback Anda");
          }
        })
        .catch((err) => {
          message.error(err?.data?.message);
        });
    }
  };

  useEffect(() => {
    const userIdFromLocalStorage = localStorage.getItem("user"); // Replace with your key
    setUserId(JSON.parse(userIdFromLocalStorage).id);
  }, []);

  return (
    <>
      <div
        className={` h-auto flex font-sans px-8 py-2 flex-col flex-1`}
        ref={printRef}
      >
        <div className="flex flex-col items-center justify-center flex-1 ">
          <div className="flex flex-row items-center justify-start w-full mt-4 justify-items-center ms-4">
            <button
              type="button"
              className="px-5 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 me-8"
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => router.back()}
            >
              <FaArrowAltCircleLeft style={{ marginRight: "0.5rem" }} />
              Back
            </button>
          </div>

          <div className="flex flex-row items-center justify-center w-full mt-4 justify-items-center">
            <p className="text-3xl font-bold ">{data?.data?.title}</p>
          </div>
          <p className="mt-1 text-sm font-medium">
            By : {data?.data?.user.name}
          </p>
          <p className="mt-1 text-xs">
            Categories : {data?.data?.category.title}{" "}
          </p>
          <p className="mt-1 text-xs">
            Project Time Elapsed :{" "}
            {moment(data?.data?.project_start_at).format("DD MMMM YYYY")} -{" "}
            {moment(data?.data?.project_end_at).format("DD MMMM YYYY")}
          </p>
          <p className="mt-1 text-xs">
            Job Role :{" "}
            {jobsData.find((item) => item.id === data?.data?.job_role)?.name}{" "}
          </p>
          <div className="flex flex-row justify-end w-1/2 mt-4 gap-x-2">
            {data?.data?.user?.detail_user?.instagram ? (
              <Link
                href={data?.data?.user?.detail_user?.instagram}
                target="_blank"
              >
                <BsInstagram className="cursor-pointer" />
              </Link>
            ) : null}
            {data?.data?.user?.detail_user?.facebook ? (
              <Link
                href={data?.data?.user?.detail_user?.facebook}
                target="_blank"
              >
                <BsFacebook className="cursor-pointer" />
              </Link>
            ) : null}
            {data?.data?.user?.detail_user?.linkedin ? (
              <Link
                href={data?.data?.user?.detail_user?.linkedin}
                target="_blank"
              >
                <BsLinkedin className="cursor-pointer " />
              </Link>
            ) : null}
          </div>
          <Image
            src={
              data?.data?.images?.find(({ type }) => type === "cover")
                ? `/${
                    data.data.images.find(({ type }) => type === "cover")
                      .image_path
                  }`
                : "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
            }
            alt=""
            width={900}
            height={600}
            className="object-cover w-1/2 mt-4"
          />
        </div>

        <div className="flex flex-col items-start flex-1 p-32">
          <p className="text-xs mt-19">
            at : {moment(data?.data?.created_at).format("DD MMMM YYYY")}{" "}
          </p>
          <h3 className="mt-4 font-bold">Project Overview</h3>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.data?.overview }}
          />
          <h3 className="mt-4 font-bold">Project Methodology</h3>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.data?.methodology }}
          />
          <h3 className="mt-4 font-bold">Project Findings</h3>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.data?.findings }}
          />
          <h3 className="mt-4 font-bold">Project Sketches</h3>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.data?.sketches }}
          />
          <h3 className="mt-4 font-bold">Project Visual</h3>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.data?.visual }}
          />
          <h3 className="mt-4 font-bold">Prototype URL</h3>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.data?.prototype_url }}
          />
          <h3 className="mt-4 font-bold">Github URL</h3>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.data?.git_url }}
          />
          <h3 className="mt-4 font-bold">Project Experience</h3>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.data?.experience }}
          />
          <h3 className="mt-4 font-bold">Project Challenge</h3>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: data?.data?.challenge }}
          />
          <div className="flex flex-col items-center justify-center w-full mt-8">
            <p className="mb-2 text-4xl font-bold">Rate this</p>
            <div className="text-center">
              <ReactStars
                onChange={ratingChanged}
                count={5}
                size={38}
                color2={"#ffd700"}
              />
            </div>
          </div>
        </div>

        <div className="fixed flex flex-col bottom-10 right-10">
          <>
            <Modal isOpen={isOpenShare} onClose={closeModal}>
              <h2 className="mb-4 text-2xl">This is a url for your profile</h2>
              <p>
                lioke.codesmedioa.cloud/PXYNAM{" "}
                <span>
                  {" "}
                  <button
                    type="button"
                    onClick={() => closeModalShare()}
                    className="flex items-center px-3 py-1 mt-2 text-sm font-semibold text-white rounded-full bg-slate-400"
                  >
                    <MdCopyAll />
                    Copy to clipboard
                  </button>
                </span>{" "}
              </p>
            </Modal>
          </>
          <div className="fixed flex flex-col bottom-20 right-10">
            <a
              className="relative p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary group"
              onClick={onClickCta}
            >
              <FaPlus />
              <span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
                More
              </span>
            </a>

            {isShowButton ? (
              <>
                <button
                  type="button"
                  onClick={handleOnCopy}
                  className="relative p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary group"
                >
                  <BsShareFill />
                  <span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
                    Share
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="relative p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary group"
                >
                  <BsPrinter />
                  <span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
                    Print
                  </span>
                </button>

                <Link
                  className="relative p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary group"
                  href={
                    "mailto:wildan.romiza@gmail.com?subject=SendMail&body=Description"
                  }
                >
                  <MdOutlineEmail />
                  <span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
                    Message
                  </span>
                </Link>
                {userId === data?.data?.user.id && (
                  <Link
                    className="relative p-6 mb-2 text-xl font-semibold text-white rounded-full bg-primary group"
                    href={"/clientzone/edit-project/" + data?.data?.id}
                  >
                    <MdEdit />
                    <span className="absolute p-2 text-xs text-white scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">
                      Edit
                    </span>
                  </Link>
                )}
                {/* <CommentsDialog
									setModalComments={setIsShowComments}
									showModalComments={isShowComments}
								/> */}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
