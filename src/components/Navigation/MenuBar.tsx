import { PencilLine, ArrowUp } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export const MenuBar = () => {
  return (
    <div className="h-fit">
      <Link
        href={"#"}
        className="flex h-1/2 items-center gap-4 rounded-t-md bg-gradient-to-b from-gray-100 to-gray-200/80 px-4 py-2 duration-200 hover:bg-red-200"
      >
        <div className="rounded-full bg-white p-1">
          <PencilLine />
        </div>
        How to update company data?
      </Link>
      <Link
        href={"#"}
        className="flex h-1/2 items-center gap-4 rounded-b-md bg-gradient-to-t from-gray-200 to-gray-200/80 px-4 py-2 duration-200 hover:bg-red-200"
      >
        <div className="rounded-full bg-white p-1">
          <ArrowUp />
        </div>
        Add your company to the list
      </Link>
    </div>
  );
};
