import React from "react";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import NavBar from "./components/NavBar";

const InstagramPage = () => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="flex flex-col flex-grow">
        {/* I can add a navbar here if I want to */}
        <Body />
      </div>
    </div>
  );
};

export default InstagramPage;
