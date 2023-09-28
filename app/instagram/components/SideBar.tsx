import React from "react";
import Heading from "./Heading";
import Bio from "./Bio";
import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className="mt-3">
      <Logo />
      <div className="ml-3 mb-1">
        <Heading />
      </div>
      <div className="divider mx-2 -my-0"></div>
    </div>
  );
};

export default SideBar;
