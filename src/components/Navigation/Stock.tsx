"use client";

import Link from 'next/link';
import { useState, useEffect } from "react";
import StockSkeletonLoader from "./SkeletonLoader/SkeletonLoader"; // SkeletonLoader import

const Stock = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const stocks = [
    {
      name: "Oracle",
      price: "132.06",
      change: "+2.40%",
      changeClass: "text-green-600",
    },
    {
      name: "American Express",
      price: "237.85",
      change: "+1.85%",
      changeClass: "text-green-600",
    },
    {
      name: "Meta",
      price: "517.77",
      change: "+1.60%",
      changeClass: "text-green-600",
    },
    {
      name: "Hewlett-Packard",
      price: "33.54",
      change: "+1.57%",
      changeClass: "text-green-600",
    },
    {
      name: "McDonald's",
      price: "267.91",
      change: "-1.21%",
      changeClass: "text-red-500",
    },
    {
      name: "Harley-Davidson",
      price: "35.41",
      change: "-1.83%",
      changeClass: "text-red-500",
    },
    {
      name: "Goodyear",
      price: "7.70",
      change: "-2.65%",
      changeClass: "text-red-500",
    },
    {
      name: "Intel",
      price: "19.71",
      change: "-3.81%",
      changeClass: "text-red-500",
    },
  ];
  

  if (loading) {
    return <StockSkeletonLoader />;
  }

  return (
    <div className="w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-5">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        Stock prices
      </h3>
      <div className="mt-7">
        <table className="w-full table-auto">
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index}>
                <td>
                  <Link
                    href="#"
                    className="text-blue-800 transition hover:underline"
                  >
                    {stock.name}
                  </Link>
                </td>
                <td>{stock.price}</td>
                <td className={`mb-3 flex justify-end ${stock.changeClass}`}>
                  {stock.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="#" className="mt-3 inline-block font-semibold text-blue-900">
        More stock prices
      </Link>
    </div>
  );
};

export default Stock;
