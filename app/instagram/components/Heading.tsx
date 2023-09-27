import React from "react";
import ProfilePic from "./ProfilePic";

const Heading = () => {
  const userName = "Steve Rodgers";
  const userAccount = "@capamerica";

  return (
    <div className="flex justify-between items-center mt-2 mx-2">
      <div>
        <h1 className="text-lg mb-1">Seita AI</h1>
        <h2 className="text-md mb-1">{userName}</h2>
        <h3 className="text-sm">{userAccount}</h3>
      </div>
      <ProfilePic />
    </div>
  );
};

export default Heading;
