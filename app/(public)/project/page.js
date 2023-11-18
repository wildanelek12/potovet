"use client";

import Image from "next/image";
import IconButtonDescription from "@/components/icon-project-desc";
import ProjectCard from "@/components/project-card";
import ModalSkill from "@/components/modal-desc/modal-skill";
import { useRecoilState, useSetRecoilState } from "recoil";
import ModalWork from "@/components/modal-desc/modal-work";
import {
  showModalEducation,
  showModalInterest,
  showModalSkill,
  showModalSocialMedia,
  showModalWork,
  showMonthContent,
  showProjectContent,
  showYearContent,
} from "@/recoil/atom";
import ModalEducation from "@/components/modal-desc/modal-education";
import ModalInterest from "@/components/modal-desc/modal-interest";
import ModalSosmed from "@/components/modal-desc/modal-sosmed";
import SelectYear from "@/components/select-step-project/select-year";
import SelectMonth from "@/components/select-step-project/select-month";
import { useGetProfileQuery } from "@/redux/services/profileApi";

export default function Home() {
  let setSkillOpen = useSetRecoilState(showModalSkill);
  let setWorkOpen = useSetRecoilState(showModalWork);
  let setModalEducationOpen = useSetRecoilState(showModalEducation);
  let setModalIntertestOpen = useSetRecoilState(showModalInterest);
  let setModalSocialMediaOpen = useSetRecoilState(showModalSocialMedia);

  const [isShowMonthContent, setShowMonthContent] =
    useRecoilState(showMonthContent);
  const [isShowYearContent, setShowYearContent] =
    useRecoilState(showYearContent);
  const [isShowProjectContent, setIsShowProject] =
    useRecoilState(showProjectContent);

  const { data: user } = useGetProfileQuery();

  const renderSelectContent = () => {
    if (isShowYearContent) {
      return <SelectYear></SelectYear>;
    } else if (isShowMonthContent) {
      return <SelectMonth></SelectMonth>;
    } else if (isShowProjectContent) {
      return (
        <div className="grid mx-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-x-4">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
      );
    }
  };

  return (
    <>
      <div className={` h-auto flex font-sans  flex-col flex-1 mb-8`}>
        <div
          className="flex flex-col items-center justify-center flex-1 py-16"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.7), rgba(0, 0, 0,0.3)),url("/bg-profile.jpg")`,
            height: "fit-content",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain,cover",
          }}
        >
          <div className="relative overflow-hidden rounded-full w-36 h-36">
            <Image
              src={
                user?.data?.photo ??
                "https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
              }
              alt="photo-profile"
              className="absolute object-cover"
              sizes="100%"
              fill
            />
          </div>

          <p className="mt-4 text-4xl font-bold tracking-wide text-white">
            {user?.data?.name}
          </p>
          <p className="text-sm font-semibold text-white ">
            {user?.data?.detail_user?.jobs}
          </p>
          <p className="w-1/4 mt-4 font-normal text-center text-white text-normal">
            {user?.data?.detail_user?.descriptions}
          </p>

          <div className="flex flex-row mt-4 space-x-4 ">
			
            <div onClick={() => setModalEducationOpen(true)} className="group relative">
              <IconButtonDescription src="/education.svg" />
			  <span class="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Education</span>
            </div>
			
            <div onClick={() => setWorkOpen(true)}  className="group relative">
              <IconButtonDescription src="/suitcase-3.png" />
			  <span class="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Work Experience</span>
            </div>

            <div onClick={() => setSkillOpen(true)}  className="group relative">
              <IconButtonDescription src="/skills.png" />
			  <span class="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Skills</span>
            </div>

            <div onClick={() => setModalIntertestOpen(true)}  className="group relative">
              <IconButtonDescription src="/magnifying-glass.png" />
			  <span class="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Interest</span>
            </div>
            <div onClick={() => setModalSocialMediaOpen(true)}  className="group relative">
              <IconButtonDescription src="/sosmed.svg" />
			  <span class="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Social Media</span>
            </div>
          </div>
        </div>
        <div className="mt-8 font-medium text-center">
          <p className="text-xl font-extrabold">{"Portofolio's"}</p>
        </div>
        <div className="flex h-0.5 mt-4 bg-gray-200 w-auto mx-16" />
        <div>{renderSelectContent()}</div>
      </div>

      <ModalSkill data={user?.data?.detail_user?.skills} />
      <ModalWork data={user?.data?.detail_user?.work_experiences} />
      <ModalEducation data={user?.data?.detail_user?.educations} />
      <ModalInterest data={user?.data?.detail_user?.interests} />
      <ModalSosmed
        data={{
          email: user?.data?.email,
          instagram: user?.data?.detail_user?.instagram,
          linkedin: user?.data?.detail_user?.linkedin,
          facebook: user?.data?.detail_user?.facebook,
        }}
      />
    </>
  );
}
