"use client";
import React, { useState } from "react";

export default function Accountmanage() {
  const [mainHeading, setmainHeading] = useState("Manage Bank Accounts");
  return (
    <div>
      <div className="flex flex-row justify-center items-center  h-10 shadow-md shadow-blue-100">
        <label className="text-xl text-blue-500">{mainHeading}</label>
      </div>
      <div className="border mt-4 h-9 flex flex-row justify-center items-center space-x-16">
        <label
          onClick={() => setmainHeading("Add New Bank Account")}
          className="hover:text-red-500 hover:underline cursor-pointer">
          Add New Bank Account
        </label>
        <label
          onClick={() => setmainHeading("Update Bank Details")}
          className="hover:text-red-500 hover:underline cursor-pointer">
          Update Bank Details
        </label>
        <label
          onClick={() => setmainHeading("Delete Bank Account")}
          className="hover:text-red-500 hover:underline cursor-pointer">
          Delete Bank Account
        </label>
        <label
          onClick={() => setmainHeading("Account Report")}
          className="hover:text-red-500 hover:underline cursor-pointer">
          Account Report
        </label>
      </div>
    </div>
  );
}
