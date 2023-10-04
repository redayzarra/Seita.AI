"use client"; // Indicate this is a client component

import Drawer from "@mui/joy/Drawer";
import IconButton from "@mui/joy/IconButton";
import React, { useState } from "react";

interface DrawerButtonProps {
  children: React.ReactNode;
}

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
    />
  </svg>
);

const MenuClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
  >
    <mask id="ipTCloseOne0">
      <g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4">
        <path
          fill="#555"
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
        />
        <path
          stroke-linecap="round"
          d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"
        />
      </g>
    </mask>
    <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCloseOne0)" />
  </svg>
);

const DrawerButton: React.FC<DrawerButtonProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
        <HamburgerIcon />
      </IconButton>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="relative">
          {" "}
          {/* Replace inline style with Tailwind class */}
          <IconButton
            variant="plain"
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 10,
            }}
          >
            <MenuClose />
          </IconButton>
          {children}
        </div>
      </Drawer>
    </>
  );
};

export default DrawerButton;
