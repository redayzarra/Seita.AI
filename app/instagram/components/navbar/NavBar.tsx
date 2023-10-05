import React from "react";
import NavStack from "./NavStack";

interface Props {
  children?: React.ReactNode;
}

const NavBar = ({ children }: Props) => {
  return (
    <div className="bg-transparent w-full flex justify-between items-center px-2 py-1">
      {children}
      <NavStack />
    </div>
  );
};

export default NavBar;
