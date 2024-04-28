"use client";

import { useGetProfileQuery } from "@/redux/services/profileApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
export default function Layout({ children }) {
  const pathname = usePathname();

  const { data: user } = useGetProfileQuery();
  const handleNavigation = async (href) => {
    const result = await Swal.fire({
      title: "Perhatian?",
      text: "Apakah anda yakin ingin berpindah halaman?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
    });

    if (result.isConfirmed) {
      // If the user clicks "Yes, continue!" in the confirmation dialog,
      // navigate to the specified page.
      window.location.href = href;
    }
  };
  return (
    <div className="grid w-1/2 gap-8 mx-auto mt-20">
      <div className="flex w-full gap-8">
        <div className="flex flex-col justify-center basis-2/3">
          <p className="text-xl font-bold tracking-wide text-black">{user?.data?.name}</p>
          <p className="text-sm font-normal tracking-wide text-black">Set up your POTOVET Account</p>
        </div>
      </div>

      <div className="flex w-full gap-8">
        <div className="basis-1/3">
          <div className="grid gap-2">
            <Link
              href="/profile"
              className={[
                "block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
                pathname === "/profile" ? "bg-primary/50 text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
              ].join(" ")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/profile");
              }}
            >
              User Profile
            </Link>
            <Link
              href="/profile/skills"
              className={[
                "block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
                pathname === "/profile/skills" ? "bg-primary/50 text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
              ].join(" ")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/profile/skills");
              }}
            >
              Skills
            </Link>
            <Link
              href="/profile/work-experiences"
              className={[
                "block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
                pathname === "/profile/work-experiences" ? "bg-primary/50 text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
              ].join(" ")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/profile/work-experiences");
              }}
            >
              Work Experiences
            </Link>
            <Link
              href="/profile/educations"
              className={[
                "block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
                pathname === "/profile/educations" ? "bg-primary/50 text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
              ].join(" ")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/profile/educations");
              }}
            >
              Educations
            </Link>
            <Link
              href="/profile/interests"
              className={[
                "block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
                pathname === "/profile/interests" ? "bg-primary/50 text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
              ].join(" ")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/profile/interests");
              }}
            >
              Interests
            </Link>
            <Link
              href="/profile/social-media"
              className={[
                "block w-full px-4 py-2 rounded-lg cursor-pointer transition duration-500 ",
                pathname === "/profile/social-media" ? "bg-primary/50 text-white" : "hover:bg-neutral-100 hover:text-neutral-500",
              ].join(" ")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/profile/social-media");
              }}
            >
              Social Media
            </Link>
          </div>
        </div>
        <div className="basis-2/3">{children}</div>
      </div>
    </div>
  );
}
