import React from "react";
import ProfilePic from "./ProfilePic";
import Logo from "./Logo";

const Heading = () => {
  const userName = "Steve Rodgers";
  const userAccount = "@capamerica";

  return (
    <div className="flex justify-between items-center mt-5 ml-2 -mr-8">
      <div className="flex flex-col justify-between flex-grow">
        <Logo />
        <h2 className="text-md mt-4">{userName}</h2>
        <h3 className="text-sm">{userAccount}</h3>
      </div>
      <ProfilePic />
    </div>
  );
};

export default Heading;
