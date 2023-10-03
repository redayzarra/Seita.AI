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

const DrawerButton: React.FC<DrawerButtonProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        variant="plain"
        color="neutral"
        onClick={() => setOpen(true)}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
        <HamburgerIcon />
      </IconButton>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <ModalClose onClick={() => setOpen(false)} />
        {children}
      </Drawer>
    </>
  );
};

export default DrawerButton;
