import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarDesktop = () => {
  return (
    <nav className="hidden sm:flex">
      <ul className="flex space-x-4 text-start">
        {/* Navbar links */}
        <li>
          <Link className="text-lg no-underline py-2 hover:bg-[#03018d] px-3 rounded" href={"/data-files"}>Data files</Link>
        </li>
        <li>
          <Link className="text-lg no-underline py-2 hover:bg-[#03018d] px-3 rounded" href={"/advertisement"}>Advertising</Link>
        </li>
        <li>
          <Link className="text-lg no-underline py-2 hover:bg-[#03018d] px-3 rounded" href={"/detailed-search"}>Detailed search</Link>
        </li>
        <li>
          <Link className="text-lg no-underline py-2 hover:bg-[#03018d] px-3 rounded" href={"/help"}>Help</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
