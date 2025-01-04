import React from "react";
import Mainheading from "../MainPanelHeading/page";

export default function Mainpanel({currentUrl}) {
  return (
    <div className="border border-blue-100 h-[580px] w-[1045px] ml-[305px] mt-[-580px] shadow-md">
        <Mainheading currentUrl={currentUrl}/>
    </div>
  );
}
