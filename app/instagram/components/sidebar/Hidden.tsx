import Logo from "@/app/components/Logo";
import React from "react";
import SideBar from "./Sidebar";

const HiddenSideBar = () => {
  return (
    <div className="p-2 h-screen border-dashed w-[256px] bg-component-dark">
      <SideBar />
    </div>
  );
};

export default HiddenSideBar;
