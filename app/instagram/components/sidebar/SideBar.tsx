import Logo from "@/app/components/Logo";
import React from "react";

const SideBar = () => {
  return (
    <div className="p-2 h-screen bg-transparent w-[256px] border-dotted border-2 border-transparent border-r-gray-800">
      <Logo />
      SideBar
    </div>
  );
};

export default SideBar;
