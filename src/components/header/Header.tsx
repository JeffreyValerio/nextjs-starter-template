import { Box } from "lucide-react";
import Link from "next/link";
import { Logo } from "../shared/Logo";

export const Header = () => {
  return (
    <header className="h-16 absolute top-0 z-50 w-full">
      <div className="max-width flex items-center h-full justify-between">
        <Logo />

        <nav>
          <ul className="flex items-center gap-x-4 text-accent">
            <li className="hover:underline">
              <Link href={"/"}>About</Link>{" "}
            </li>
            <li className="hover:underline">
              <Link href={"/"}>Services</Link>{" "}
            </li>
            <li className="hover:underline">
              <Link href={"/"}>Portfolio</Link>{" "}
            </li>
            <li className="hover:underline rounded-full px-4 bg-primary text-accent">
              <Link href={"/"}>Hire me</Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
