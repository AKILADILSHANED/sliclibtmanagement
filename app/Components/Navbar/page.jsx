import React from "react";
import Sidepanel from "../SidePanel/page";

export default function Navbar() {
  return (
    <div>
      <div>
        <div className="flex flex-row bg-blue-800 h-[60px]">
          <div className="mt-4 ml-2 font-bold text-white">
            <a href="#"> Welcome Mr. Akila Edirisooriya!</a>
          </div>

          <div>
            <input
              placeholder="Search here"
              className="rounded-md h-7 mt-4 ml-[700px] w-[300px] hover:ring-2 hover:ring-white"></input>
          </div>
          <div>
            <button
              type="submit"
              className="text-black hover:bg-slate-400 h-7 mt-4 ml-2 bg-slate-200 rounded-md w-[70px]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
