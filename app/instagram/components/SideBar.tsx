import React from "react";
import Heading from "./Heading";
import Bio from "./Bio";

const SideBar = () => {
  return (
    <div className="ml-3">
      <Heading />
      <div className="mr-3">
        <Bio />
      </div>
    </div>
  );
};

export default SideBar;
