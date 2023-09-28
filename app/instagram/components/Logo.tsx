import Image from "next/image";
import Link from "next/link";
import React from "react";
import SeitaLogo from "@/public/images/SeitaLogo.png";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center flex-grow">
        <Image src={SeitaLogo} alt="Seita company logo" width={100} />
      </div>
    </Link>
  );
};

export default Logo;
