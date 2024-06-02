import { Box } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  color?: string;
}
export const Logo = ({ color }: Props) => {
  return (
    <Link
      href={"/"}
      className={`${color ?? "text-accent"} flex gap-x-1 items-center`}
    >
      <Box size={40} strokeWidth={1} className="flex-shrink-0" />
      <span className="sr-only lg:not-sr-only font-bold uppercase">
        Company Name
      </span>
    </Link>
  );
};
