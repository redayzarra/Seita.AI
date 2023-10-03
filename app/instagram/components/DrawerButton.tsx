"use client"; // Indicate this is a client component

import React, { useState } from "react";
import Drawer from "@mui/joy/Drawer";
import IconButton from "@mui/joy/IconButton";
import ModalClose from "@mui/joy/ModalClose";

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
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M3 6h10v2H3V6m0 10h10v2H3v-2m0-5h12v2H3v-2m13-4l-1.42 1.39L18.14 12l-3.56 3.61L16 17l5-5l-5-5Z"
    />
  </svg>
);

const DrawerButton: React.FC<DrawerButtonProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        variant="plain"
        color="neutral"
        onClick={() => setOpen(true)}
        className="block lg:hidden" // Replace sx prop with Tailwind classes
      >
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
