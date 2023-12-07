"use client";

import { useGetProfileQuery, useUpdateProfileMutation } from "@/redux/services/profileApi";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Toast } from "@/utils/SweetAlert";

export default function Page() {
  const [interests, setInterests] = useState([""]);

  const { data: user } = useGetProfileQuery();
  const [update, { isLoading }] = useUpdateProfileMutation();

  useEffect(() => {
    if (user?.data?.detail_user) {
      const { interests } = user.data.detail_user;

      if (interests.length > 0) {
        setInterests(interests);
      }
    }
  }, [user]);

  const handleOnChange = (value, index) => {
    setInterests([...interests.map((v, i) => (i === index ? value : v))]);
  };

  const handleOnAdd = () => {
    setInterests(["", ...interests]);
  };

  const handleOnDelete = (index) => {
    if (interests.length > 0) {
      setInterests([...interests.filter((_v, i) => i !== index)]);
    }
  };
  const onCancel = () => {
    window.location.reload();
  };
  const handleOnSave = () => {
    if (!isLoading) {
      update({ data: { interests: JSON.stringify(interests) } }).then(({ data }) => {
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
            Interests
          </p>
          <p className="px-3 py-3 text-white cursor-pointer select-none group relative" style={{ borderLeft: "2px solid white" }} onClick={handleOnAdd}>
            +<span class="absolute  top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Tambah Data</span>
          </p>
        </div>

        {interests.map((v, i) => (
          <div className="flex items-center" key={i}>
            <Input id="job" type="text" placeholder={"Web Development"} onChange={(v) => handleOnChange(v, i)} value={interests[i]} />
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
