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
    height="30px"
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
    width="30"
    height="30"
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
    />
  </svg>
);

const DrawerButton: React.FC<DrawerButtonProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        variant="plain"
        size="lg"
        onClick={() => setOpen(true)}
        sx={{
          color: "#cbd5e1",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#475569",
          },
        }}
      >
        <HamburgerIcon />
      </IconButton>

      <Drawer open={open} onClose={() => setOpen(false)} size="sm">
        <div className="relative">
          {/* <IconButton
            variant="plain"
            onClick={() => setOpen(false)}
            size="sm"
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 10,
              color: "#cbd5e1",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#475569",
              },
            }}
          >
            <MenuClose />
          </IconButton> */}
          {children}
        </div>
      </Drawer>
    </>
  );
};

export default DrawerButton;
