import Image from "next/image";
import React from "react";
import ProfilePic from "./ProfilePic";

const SideBar = () => {
  return (
    <div className="h-screen grid grid-cols-5 gap-4">
      <div className="col-span-1 bg-gray-200">Sidebar</div>
      <div className="col-span-4">
        <div className="h-16 bg-gray-300">Navbar</div>
        <div className="bg-gray-100 overflow-y-auto">Main</div>
      </div>
    </div>
  );
};

export default SideBar;
