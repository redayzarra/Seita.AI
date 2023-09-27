import Image from "next/image";
import React from "react";
import Avatar from "./Avatar";

const SideBar = () => {
  return (
    <div>
      <Avatar />
      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="text-2xl font-semibold">ReDay</h1>
        <h2 className="text-sm text-gray-500">Welcome to my Instagram</h2>
      </div>
    </div>
  );
};

export default SideBar;
