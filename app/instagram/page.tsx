import React from "react";
import SideBar from "./components/SideBar";
import Body from "./components/Body";

const InstagramPage = () => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="flex flex-col flex-grow">
        <div className="bg-gray-300">Navbar</div>
        <div className="flex-grow bg-white overflow-y-auto">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default InstagramPage;
