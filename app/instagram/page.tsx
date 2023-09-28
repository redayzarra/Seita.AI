import React from "react";
import SideBar from "./components/SideBar";
import Body from "./components/Body";

const InstagramPage = () => {
  return (
    <div className="h-screen flex drawer lg:drawer-open">
      <div className="w-56 bg-base-100 shadow-bar z-10">
        <SideBar />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="h-16 bg-gray-300">Navbar</div>
        <div className="flex-grow bg-white overflow-y-auto">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default InstagramPage;
