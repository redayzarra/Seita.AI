import Logo from "@/app/components/Logo";
import React from "react";

const SideBar = () => {
  return (
    <div className="p-2 h-screen border-dashed bg-gradient-to-b from-start-color to-end-color w-[256px]">
      <Logo />
      SideBar
    </div>
  );
};

export default SideBar;
