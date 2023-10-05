// ClientRenderedSideLink.tsx
"use client";

import { usePathname } from "next/navigation";
import { SideLink } from "./SideLink";
import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  title: string;
  href: string;
}

const ClientSideLink = ({ icon, title, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return <SideLink icon={icon} title={title} href={href} isActive={isActive} />;
};

export default ClientSideLink;
