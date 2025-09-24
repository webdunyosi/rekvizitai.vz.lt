"use client";

import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import MaxWidthWrapper from "../Core/MaxWidthWrapper";
import NavbarDesktop from "./NavbarDesktop";
import Logo from "../Core/Logo";

export const Navbar = () => {
  return (
    <div className="relative bg-[#010066] py-6 text-white">
      <MaxWidthWrapper className="flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Logo size="md" />
        </Link>

        {/* NavbarDesktop */}
        <NavbarDesktop />

        <div className="flex items-center justify-center gap-4">
          {/* Avatar */}
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* Menu */}
          <MobileMenu className="bg-[#010066] text-white" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
