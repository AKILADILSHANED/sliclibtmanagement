"use client";
import React, { useState } from "react";

export default function Mainheading({currentUrl}) {
  
  return <iframe className="mt-1 ml-1 w-[1035px] h-[565px]" src={currentUrl}></iframe>;
}
