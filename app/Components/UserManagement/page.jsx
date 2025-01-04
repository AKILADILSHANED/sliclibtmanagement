"use client";
import React, { useState } from "react";

export default function Usermanage() {
  const [mainHeading, setmainHeading] = useState("Manage Users");
  return (
    <div>
      <div className="flex flex-row justify-center items-center  h-10 shadow-md shadow-blue-100">
        <label className="text-xl text-blue-500">{mainHeading}</label>
      </div>
      <div className="border mt-4 h-9 flex flex-row justify-center items-center space-x-16">
        <label
          onClick={() => setmainHeading("Create New User")}
          className="hover:text-red-500 hover:underline cursor-pointer">
          Create New
        </label>
        <label
          onClick={() => setmainHeading("Update User Details")}
          className="hover:text-red-500 hover:underline cursor-pointer">
          Update User Details
        </label>
        <label
          onClick={() => setmainHeading("Delete User")}
          className="hover:text-red-500 hover:underline cursor-pointer">
          Delete User
        </label>
        <label
          onClick={() => setmainHeading("User Report")}
          className="hover:text-red-500 hover:underline cursor-pointer">
          User Report
        </label>
      </div>
    </div>
  );
}
