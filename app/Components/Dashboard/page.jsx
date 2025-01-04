"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/page";
import Sidepanel from "../SidePanel/page";
import Mainpanel from "../MainPanel/page";

export default function Dashboard() {
  const [currentUrl, setUrl] = useState()
  
  return (
    <div>
      <Navbar />
      <Sidepanel setUrl={setUrl} />
      <Mainpanel currentUrl={currentUrl}/>
    </div>
  );
}
