import Image from "next/image";
import React from "react";
import SteveRodgers from "@/public/images/SteveRodgers.jpg";

const ProfilePic = () => {
  const userName = "Steve Rodgers";

  return (
    <div className="avatar online inline-block relative w-24 h-w-24 border-8 border-base-100 rounded-full">
      <div className="relative w-full h-full overflow-hidden shadow-pic rounded-full">
        <Image
          src={SteveRodgers}
          alt={`${userName}'s Instagram profile picture`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ProfilePic;
