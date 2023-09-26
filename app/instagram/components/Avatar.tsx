import Image from "next/image";
import React from "react";

const Avatar = () => {
  const userName = "ReDay";

  return (
    <div>
      <Image
        src="../../public/SteveRodgers.jpg"
        alt={`${userName}'s Instagram profile picture`}
        width={20}
        height={20}
      />
    </div>
  );
};

export default Avatar;
