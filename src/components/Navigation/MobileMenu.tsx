import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { AlignJustify } from "lucide-react";
import React from "react";

export const MobileMenu = ({ className }: { className?: string }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className={cn("w-screen sm:w-[540px]", className)}
      >
        <SheetHeader>
          <SheetTitle className="text-center">XYZ</SheetTitle>
        </SheetHeader>
        <Navbar withSheetClose />
      </SheetContent>
    </Sheet>
  );
};

const Navbar = (props: any) => {
  const [SheetCloseWrapper, shetCloseWrapperProps] = props.withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  return (
    <nav>
      {/* Navbar */}
      <ul className="text-start">
        <li>
          <SheetCloseWrapper {...shetCloseWrapperProps}>
            <Link href={"/profile"}>
              <Avatar className="-mt-8 mb-4 ml-3">
                <AvatarFallback>
                  <User color="grey" />
                </AvatarFallback>
              </Avatar>
            </Link>
          </SheetCloseWrapper>
        </li>
        {/* Navbar link */}
        <li className="w-full border-b-2 border-b-slate-500 hover:bg-[#03018d]">
          <SheetCloseWrapper {...shetCloseWrapperProps}>
            <Link
              className="inline-block py-2 pl-3 text-lg no-underline"
              href={"/data-files"}
            >
              Data files
            </Link>
          </SheetCloseWrapper>
        </li>
        <li className="w-full border-b-2 border-b-slate-500 hover:bg-[#03018d]">
          <SheetCloseWrapper {...shetCloseWrapperProps}>
            <Link
              className="inline-block py-2 pl-3 text-lg no-underline"
              href={"/advertisement"}
            >
              Advertising
            </Link>
          </SheetCloseWrapper>
        </li>
        <li className="w-full border-b-2 border-b-slate-500 hover:bg-[#03018d]">
          <SheetCloseWrapper {...shetCloseWrapperProps}>
            <Link
              className="inline-block py-2 pl-3 text-lg no-underline"
              href={"/detailed-search"}
            >
              Detailed search
            </Link>
          </SheetCloseWrapper>
        </li>
        <li className="w-full border-b-2 border-b-slate-500 hover:bg-[#03018d]">
          <SheetCloseWrapper {...shetCloseWrapperProps}>
            <Link
              className="inline-block py-2 pl-3 text-lg no-underline"
              href={"/help"}
            >
              Help
            </Link>
          </SheetCloseWrapper>
        </li>
      </ul>
    </nav>
  );
};
