"use client"; // Indicate this is a client component

import Drawer from "@mui/joy/Drawer";
import IconButton from "@mui/joy/IconButton";
import React, { useState } from "react";
import { HamburgerIcon } from "../Icons";

interface Props {
  children: React.ReactNode;
}

const DrawerButton = ({ children }: Props) => {
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
            color: "#d97706",
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
