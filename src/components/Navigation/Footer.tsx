import Link from "next/link";
import MaxWidthWrapper from "@/components/Core/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { CurrentYear } from "@/components/ui/current-year";
import Logo from "@/components/Core/Logo";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn("h-fit w-full bg-slate-900 py-8 text-slate-50", className)}
    >
      <MaxWidthWrapper>
        <div className="text-balance">
          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-3">
            <ul className="space-y-4">
              <li>
                <h3 className="mb-4 text-lg font-semibold">Useful pages</h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Company search
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Company database
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Exchange rates
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Postal codes
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Taxi in Lithuania
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li>
                <h3 className="mb-4 text-lg font-semibold">
                  The directory of Lithuanian companies
                </h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Vilnius
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Kaunas
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Klaipėda
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Šiauliai
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Panevėžys
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Alytus
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Marijampolė
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Mažeikiai
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li>
                <h3 className="mb-4 text-lg font-semibold">About us</h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Advertising
                  </Link>
                  <Link
                    className="text-white/80 duration-300 hover:opacity-80"
                    href={"/"}
                  >
                    Contacts
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <hr className="border-slate-700" />
          <div className="flex flex-col items-center justify-between py-4 text-sm md:flex-row">
            <p className="mb-4 md:mb-0">
              Lithuanian companies, information about companies
            </p>
            <span className="flex items-center space-x-2">
              <CurrentYear />
              <Logo size="sm" variant="dark" />
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
