import Image from "next/image";
import Link from "next/link";
import React from "react";
import SeitaLogo from "@/public/images/SeitaLogo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center flex-grow">
      <Link href="/">
        <Image src={SeitaLogo} alt="Seita company logo" width={75}/>
      </Link>
    </div>
  );
};

export default Logo;
