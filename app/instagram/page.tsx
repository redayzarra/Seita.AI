import React from "react";
import SideBar from "./components/SideBar";

const InstagramPage = () => {
  return (
    <div className="h-screen flex">
      <div className="w-56 bg-gray-200 shadow-dark z-10">
        <SideBar />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="h-16 bg-gray-300">Navbar</div>
        <div className="flex-grow bg-gray-100 overflow-y-auto">Main</div>
      </div>
    </div>
  );
};

export default InstagramPage;
