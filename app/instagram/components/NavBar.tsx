import React from "react";

interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div className="bg-slate-400 w-full flex justify-between items-center px-2">
      {children}
      NavBar
    </div>
  );
};

export default NavBar;
