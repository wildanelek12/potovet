"use client";

import { useGetProfileQuery, useUpdateProfileMutation } from "@/redux/services/profileApi";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import { TrashIcon } from "@heroicons/react/20/solid";
import TextArea from "../components/TextArea";
import Datepicker from "react-tailwindcss-datepicker";
import { Toast } from "@/utils/SweetAlert";
import Swal from "sweetalert2";
export default function Page() {
  const [workExperiences, setWorkExperiences] = useState([
    {
      title: "",
      start_date: null,
      end_date: null,
      description: "",
    },
  ]);

  const { data: user } = useGetProfileQuery();
  const [update, { isLoading }] = useUpdateProfileMutation();

  useEffect(() => {
    if (user?.data?.detail_user) {
      const { work_experiences } = user.data.detail_user;

      if (work_experiences?.length > 0) {
        setWorkExperiences(work_experiences);
      }
    }
  }, [user]);

  const handleOnChange = (value, index, key) => {
    setWorkExperiences([...workExperiences.map((v, i) => (i === index ? { ...v, [key]: value } : v))]);
  };

  const handleOnAdd = () => {
    setWorkExperiences([
      {
        title: "",
        start_date: null,
        end_date: null,
        description: "",
      },
      ...workExperiences,
    ]);
  };

  const handleOnDelete = (index) => {
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
        if (workExperiences.length > 0) {
          setWorkExperiences([...workExperiences.filter((_v, i) => i !== index)]);
        }
      }
    });
  };
  const onCancel = () => {
    window.location.reload();
  };
  const handleOnSave = () => {
    if (!isLoading) {
      update({ data: { work_experiences: JSON.stringify(workExperiences) } }).then(({ data }) => {
        if (data) {
          Toast.fire({
            icon: "success",
            title: data?.message,
          });
        }
      });
    }
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <div className="flex items-center justify-between bg-primary" style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}>
          <p className="px-3 py-3 text-white" style={{ fontWeight: 500 }}>
            Work Experiences
          </p>
          <p className="px-3 py-3 text-white cursor-pointer select-none hover:text-white/40 group relative" style={{ borderLeft: "2px solid white" }} onClick={handleOnAdd}>
            +<span class="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Tambah Data</span>
          </p>
        </div>

        {workExperiences.map((v, i) => (
          <div className="flex items-center" key={i}>
            <div className="grid w-full gap-2">
              <Input id="title" type="text" placeholder={"Tuliskan pengalaman kerja yang anda miliki"} onChange={(v) => handleOnChange(v, i, "title")} value={workExperiences[i]["title"]} />
              <div className="flex gap-2">
                <Datepicker
                  useRange={false}
                  asSingle={true}
                  displayFormat={"DD-MM-YYYY"}
                  value={{ startDate: workExperiences[i]["start_date"], endDate: workExperiences[i]["start_date"] }}
                  onChange={({ startDate }) => handleOnChange(startDate, i, "start_date")}
                  inputClassName="shadow-none outline-none focus:shadow-none focus:ring-0 focus:border-[#E5E7EB] ring-0 text-sm w-full border-2 border-[#E5E7EB] rounded-md"
                />
                <Datepicker
                  useRange={false}
                  asSingle={true}
                  displayFormat={"DD-MM-YYYY"}
                  value={{ startDate: workExperiences[i]["end_date"], endDate: workExperiences[i]["end_date"] }}
                  onChange={({ endDate }) => handleOnChange(endDate, i, "end_date")}
                  inputClassName="shadow-none outline-none focus:shadow-none focus:ring-0 focus:border-[#E5E7EB] ring-0 text-sm w-full border-2 border-[#E5E7EB] rounded-md"
                />
              </div>
              <TextArea id="description" placeholder="Keterangan" onChange={(v) => handleOnChange(v, i, "description")} value={workExperiences[i]["description"]} />
            </div>
            <div className="flex items-center justify-center" style={{ minWidth: "63.91px" }}>
              <div className="p-2 cursor-pointer select-none group relative" onClick={() => handleOnDelete(i)}>
                <TrashIcon width={24} height={24} color="gray" />
                <span class="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Hapus Data</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center mt-5 ">
        <button
          onClick={onCancel}
          className={[
            "text-white select-none text-center bg-red-400 disabled:bg-primary/50 hover:bg-red-900/50 focus:ring-4 focus:outline-none focus:ring-red-950 font-medium rounded-xl text-sm px-5 py-2.5 transition-all",
            ,
          ].join(" ")}
        >
          Batal
        </button>
        <Button onClick={handleOnSave} label="Simpan" className="px-8 mx-2 w-fit" disabled={isLoading} />
      </div>
    </div>
  );
}
