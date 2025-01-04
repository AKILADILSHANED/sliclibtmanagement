"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Sidepanel({ setFunction, setUrl }) {
  const router = useRouter();

  return (
    <div className="flex flex-col border border-blue-100 h-[580px] w-[300px] mt-1 shadow-md shadow-blue-100">
      <div className="flex flex-col mt-1 justify-center items-start w-[290px] ml-1 bg-blue-400 shadow-lg text-black h-9">
        <label className="font-bold mt-1 ml-2">Menu</label>
      </div>

      <div className="flex flex-col justify-center items-start mt-2 ml-1 border w-[290px] h-[525px]">
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label
            onClick={() => {
              setUrl("../Components/UserManagement");
            }}
            className="mt-1 ml-2 cursor-pointer">
            User Management
          </label>
        </div>
        <div onClick={() => {
              setUrl("../Components/AccountManagement");
            }}
            className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2 cursor-pointer">Account Management</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2 cursor-pointer">Account Balances</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2 cursor-pointer">Fund Request</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2 cursor-pointer">Forecasted Request</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2">Fund Transfer</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2 cursor-pointer">Repo Management</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2 cursor-pointer">Print</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2 cursor-pointer">Admin</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2 cursor-pointer">Payment Options</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label className="mt-1 ml-2 cursor-pointer">Authorization</label>
        </div>
        <div className=" mt-3 ml-1 w-[280px] hover:bg-blue-100 hover:border-none h-7 shadow-md">
          <label onClick={() => {
              router.push("..");
            }}
            className="mt-1 ml-2 cursor-pointer">Log Out</label>
        </div>
      </div>
    </div>
  );
}
