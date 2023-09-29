import React from "react";
import Heading from "./Heading";
import Bio from "./Bio";
import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className="pt-3 min-w-[225px] bg-neutral">
      <Logo />
      <Heading />
      <div className="divider -mt-0 mx-3"></div>
    </div>
  );
};

export default SideBar;
