import { IconButton } from "@mui/joy";
import React, { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  label: string;
}

const SideLink = ({ icon, label }: Props) => {
  return (
    <div>
      <IconButton>
        {icon}
      </IconButton>
      <div>{label}</div>
    </div>
  );
};

export default SideLink;
