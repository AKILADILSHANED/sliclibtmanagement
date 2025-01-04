"use client";
import { validateLogin } from "@/app/libs/server";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailerror] = useState("");
  const [passwordError, setPassworderror] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email) {
      setEmailerror("Email is required");
    } else {
      setEmailerror("");
    }

    if (!password) {
      setPassworderror("Password is required");
    } else {
      setPassworderror("");
    }

    if (email && password) {
      //if email and password is available, call for end point http://localhost:3000/Api/login
      const loginResponse = await validateLogin(email, password);
      if (loginResponse === "1") {
        router.push("/Components/Dashboard");
      } else {
        alert("Invalid Username or password.");
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" bg-blue-300 w-[370px] h-[35px] shadow-2xl rounded-sm flex flex-col justify-center items-center">
        <label className="font-bold text-lg text-white">
          IBT Management System - SLICGL
        </label>
      </div>

      <div className="flex flex-col justify-center items-left w-[370px] py-6 px-8 h-81 mt-0 bg-white rounded shadow-2xl">
        <div className="pt-2">
          <label className="text-xl font-bold text-indigo-500">
            Sing in to your account
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 mt-2">
            <label className="block text-indigo-500">E-mail:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="name@slicgl.com"
              className="w-full border border-gray-300 py-2 pl-3 rounded-md mt-2 hover:ring-1 hover:ring-blue-300"
            />
            <label className="text-red-400 text-sm">{emailError}</label>
          </div>
          <div>
            <label className="block text-indigo-500">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 py-2 pl-3 rounded-md mt-2 hover:ring-1 hover:ring-blue-300"
            />
            <label className="text-red-400 text-sm">{passwordError}</label>
            <div>
              <a
                href="#"
                className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">
                Forget Password
              </a>
            </div>
          </div>
          <button className="cursor-pointer py-2 px-4 block mt-2 mb-5 bg-blue-400 text-white font-bold w-full text-center rounded hover:bg-blue-500">
            Login
          </button>
        </form>
        <div>
          <label className="text-slate-400">
            Designed by - Akila Edirisooriya
          </label>
        </div>
      </div>
    </div>
  );
}
