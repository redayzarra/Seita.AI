"use client"; // Indicate this is a client component

import React, { useState } from "react";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import ModalClose from "@mui/joy/ModalClose";

interface DrawerButtonProps {
  children: React.ReactNode;
}

const DrawerButton: React.FC<DrawerButtonProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
        Open Drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <ModalClose onClick={() => setOpen(false)} />
        {children}
      </Drawer>
    </>
  );
};

export default DrawerButton;
