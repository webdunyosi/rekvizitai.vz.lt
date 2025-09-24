"use client";

import Link from "next/link";

const Reviews = () => {
  return (
    <div className="mb-5 w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-5">
      <h3 className="text-2xl font-semibold tracking-tight">
        New reviews, complaints about companies
      </h3>
      <div className="mt-4">
        {[
          "Jonresta, MB",
          "GSMARENA, UAB",
          "Noriauto, MB",
          "Eurovija, UAB",
          "Domo Solutions, UAB",
          "Rasų valda, UAB",
          "Treatwell LT, UAB",
          "Montepi, MB",
          "Akrusta, UAB",
          "Glasvega, UAB",
          "TOP SPORT, UAB",
          "Elektrogreen, UAB",
          "Ev one, MB",
          "Paysera LT, UAB",
          "Verslo krantas, UAB",
          "Paradise Arboretum, MB",
          "Advertising hawk, MB",
          "Via Solis Energia, UAB",
          "Agrautoma, UAB",
          "DEPO DIY LT, UAB",
          "IPA motors, MB",
          "Lintrail, UAB",
          "Vetmarket, UAB",
          "Lošimų strateginė grupė, UAB",
          "Cheers to you, MB",
          "Družu Park House, MB",
          "EuroEra, UAB",
          "MARINO PROJECTS, UAB",
          "DPD Lithuania, UAB",
          "Astila, UAB",
        ].map((company, index) => (
          <Link
            key={index}
            href="#"
            className="mr-2 text-base text-blue-800 transition hover:underline"
          >
            {company}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
