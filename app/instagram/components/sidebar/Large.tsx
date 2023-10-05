import Logo from "@/app/components/Logo";
import React from "react";
import SideBar from "./Sidebar";

const LargeSideBar = () => {
  return (
    <div className="p-2 h-screen bg-transparent w-[256px] border-dotted border-2 border-transparent border-r-gray-800">
      <SideBar />
    </div>
  );
};

export default LargeSideBar;
