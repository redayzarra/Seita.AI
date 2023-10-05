// SideLink.tsx
import { Stack } from "@mui/joy";
import Link from "next/link";
import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  title: string;
  href: string;
  isActive: boolean;
}

export const SideLink = ({ icon, title, href, isActive }: Props) => {
  return (
    <Link href={href}>
      <Stack
        direction="row"
        spacing={1}
        style={{
          backgroundColor: isActive ? "#f5f5f5" : "transparent",
          cursor: "pointer",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        {icon}
        <div>{title}</div>
      </Stack>
    </Link>
  );
};
