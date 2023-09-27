import Image from "next/image";
import React from "react";
import SteveRodgers from "@/public/images/SteveRodgers.jpg";

const Avatar = () => {
  const userName = "ReDay";

  return (
    <div className="relative w-20 h-20 overflow-hidden rounded-full">
      <Image
        src={SteveRodgers}
        alt={`${userName}'s Instagram profile picture`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
