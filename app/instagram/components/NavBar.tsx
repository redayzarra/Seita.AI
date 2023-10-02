import React from "react";

interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div className="bg-slate-400">
      NavBar
      {children}
    </div>
  );
};

export default NavBar;
