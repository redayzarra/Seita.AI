import Logo from "@/app/components/Logo";
import React from "react";

const HiddenSideBar = () => {
  return (
    <div className="p-2 h-screen border-dashed w-[256px] bg-component-dark">
      <Logo />
      HiddenSideBar
    </div>
  );
};

export default HiddenSideBar;
