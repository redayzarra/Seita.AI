import Image from "next/image";
import React from "react";
import SteveRodgers from "@/public/images/SteveRodgers.jpg";

const ProfilePic = () => {
  const userName = "ReDay";

  return (
    <div className="">
      <div className="avatar online inline-block relative w-28 h-w-28 border-8 border-neutral rounded-full">
        <div className="relative w-full h-full overflow-hidden shadow-pic rounded-full">
          <Image
            src={SteveRodgers}
            alt={`${userName}'s Instagram profile picture`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
