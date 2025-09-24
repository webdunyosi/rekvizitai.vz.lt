"use client";

import Link from "next/link";

function Companies() {
  return (
    <div className="my-5 w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-5">
      <h3 className="text-2xl font-semibold tracking-tight">New Companies</h3>
      <div className="mt-4">
        {[
          "Calisthenics Vši",
          "Squirrel",
          "Aluprom",
          "STNK",
          "Sounena",
          "Wellness clinic treat it",
          "Interior formula",
          "Into luminosa",
          "Solitaire",
          "Tjaysolutions",
          "Bad Decisions",
          "Fox throw",
          "LM team",
          "Dear body physiotherapy clinic",
          "Pure food supplements, MB",
          "Viderika",
          "Container time",
          "Mickevičius 38A",
          "AG Production",
          "The old mountaineers",
          "Saddle",
          "Eltegra",
          "Local Agency",
          "SMART GAME",
          "Multispectrum",
          "Marquis' works",
          "Private property",
          "Proactum, MB",
          "Agroston",
          "Fortura",
        ].map((company, index) => (
          <Link key={index} href="#" className="text-base text-blue-800 transition hover:underline mr-2">
            {company}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Companies;
