import React from "react";

interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div className="bg-transparent w-full flex justify-between items-center">
      {children}
      NavBar
    </div>
  );
};

export default NavBar;
