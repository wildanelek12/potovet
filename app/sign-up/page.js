"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import AlertDialog from "@/components/alert-dialog";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showModalError, setShowModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const login = async () => {
    var convertedData = new FormData();
    convertedData.append("name", formData.name);
    convertedData.append("email", formData.email);
    convertedData.append("password", formData.password);

    var requestOptions = {
      method: "POST",
      body: convertedData,
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "register",
        requestOptions
      );
      if (response.status == 200) {
        var data = await response.json();
        console.log(data);
        localStorage.setItem('token',data.data.token);
        localStorage.setItem('user',JSON.stringify(data.data.user));
        router.push("/");
      } else {
        var message = await response.json();
        setErrorMessage(message.message);
        setShowModalError(true);
      }
      // 👉️ 200
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showModalError && (
        <AlertDialog
          message={errorMessage}
          setShowModalError={setShowModalError}
          showModalError={showModalError}
        />
      )}
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <h1 className="font-bold text-primary text-4xl mr-8">POTOVET</h1>
          </a>
          <div className="w-full bg-white rounded-lg shadow-2xl  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl ">
                Sign Up
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 "
                    placeholder="ex : Ario Bayu"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-primary "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 "
                    required=""
                  />
                </div>
                <button
                  onClick={login}
                  className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
