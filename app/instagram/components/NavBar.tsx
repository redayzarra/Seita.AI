import Logo from "@/app/components/Logo";
import React from "react";
import NavStack from "./NavStack";

interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div className="bg-transparent w-full flex justify-between items-center px-2 py-1">
      {children}
      <NavStack />
    </div>
  );
};

export default NavBar;
