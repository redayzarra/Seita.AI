import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Link href="/" className="mr-5 font-gloock text-2xl">Seita</Link>
      <Link href="/demo">Demo</Link>
    </div>
  );
};

export default NavBar;
