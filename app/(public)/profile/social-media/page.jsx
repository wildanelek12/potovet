"use client";

import { useGetProfileQuery, useUpdateProfileMutation } from "@/redux/services/profileApi";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Toast } from "@/utils/SweetAlert";

export default function Page() {
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");

  const { data: user } = useGetProfileQuery();
  const [update, { isLoading }] = useUpdateProfileMutation();

  useEffect(() => {
    if (user?.data?.detail_user) {
      const { instagram, linkedin, facebook } = user.data.detail_user;

      setInstagram(instagram);
      setLinkedin(linkedin);
      setFacebook(facebook);
    }
  }, [user]);
  const onCancel = () => {
    window.location.reload();
  };
  const handleOnSave = () => {
    if (!isLoading) {
      update({ data: { instagram, linkedin, facebook } }).then(({ data }) => {
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
            Social Media
          </p>
        </div>
        <Input id="instagram" placeholder={"Isikan URL Akun Instagram Anda"} label="Instagram" type="text" onChange={setInstagram} value={instagram} />
        <Input id="linkedin" placeholder={"Isikan URL Akun Linkedin Anda"} label="Linkedin" type="text" onChange={setLinkedin} value={linkedin} />
        <Input id="facebook" placeholder={"Isikan URL Akun Facebook Anda"} label="Facebook" type="text" onChange={setFacebook} value={facebook} />
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
