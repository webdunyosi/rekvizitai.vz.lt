import Link from "next/link";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";

const LINKS = [
  { link: "/", title: "Accounting services", firstLetter: "A" },
  { link: "/qw", title: "Accounting services", firstLetter: "A" },
  { link: "/qwr", title: "Bailiffs", firstLetter: "B" },
];

export const CompanyActivityCategories = ({
  className,
}: {
  className?: string;
}) => {
  let currentFirstLetter = "";

  return (
    <div
      className={cn(
        "w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-4",
        className,
      )}
    >
      <h2 className="text-2xl font-semibold">Company activity categories</h2>
      <div className="">
        {LINKS.map((link, index) => {
          const isNewLetter = link.firstLetter !== currentFirstLetter;
          currentFirstLetter = link.firstLetter;

          return (
            <BlurFade key={index} delay={0.25 + index * 0.05} inView>
              <div className={cn(isNewLetter ? "pt-4" : "", "py-1")}>
                {isNewLetter && (
                  <h3 className="py-2 text-xl font-semibold">
                    {link.firstLetter}
                  </h3>
                )}
                <Link href={link.link}>
                  <p>{link.title}</p>
                </Link>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
};
