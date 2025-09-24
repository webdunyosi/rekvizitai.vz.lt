"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import NewsSkeletonLoader from "./SkeletonLoader/NewsSkeletonLoader";

const News = ({ news }: { news: News[] }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating 2 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <NewsSkeletonLoader />;
  }

  return (
    <div className="my-5 w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-5">
      {news?.map((newsItem, index) => (
        <article
          key={index}
          className="mt-7 flex flex-col items-center gap-3 sm:mt-4 sm:flex-row sm:items-stretch"
        >
          <Image
            className="rounded-md max-md:w-full"
            src={newsItem.thumbnail}
            width={200}
            height={150}
            style={{ objectFit: "cover" }}
            alt={newsItem.title}
            priority
          />
          <div>
            <Link
              href={newsItem.link}
              className="inline-block text-lg font-semibold text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {newsItem.title}
            </Link>
            <p className="mt-1 text-base">{newsItem.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default News;
