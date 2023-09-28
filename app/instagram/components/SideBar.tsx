import React from "react";
import Heading from "./Heading";
import Bio from "./Bio";
import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className="my-3">
      <Logo />
      <div className="ml-3">
        <Heading />
      </div>
    </div>
  );
};

export default SideBar;
