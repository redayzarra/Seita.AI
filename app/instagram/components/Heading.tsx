import React from "react";
import ProfilePic from "./ProfilePic";
import Logo from "./Logo";
import Link from "next/link";

const Heading = () => {
  const userName = "Steve Rodgers";
  const userAccount = "captainamerica";

  return (
    <div className="flex justify-between items-center mt-5 ml-2 -mr-8">
      <div className="flex flex-col justify-between flex-grow">
        <Logo />
        <h2 className="text-md mt-4 font-bold">{userName}</h2>
        <Link
          href={`https://www.instagram.com/${userAccount}/`}
          className="text-sm"
        >
          @{userAccount}
        </Link>
      </div>
      <ProfilePic />
    </div>
  );
};

export default Heading;
