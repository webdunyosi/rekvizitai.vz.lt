"use client"; 

import { useState, useEffect } from "react";
import RawSkeletonLoader from "./SkeletonLoader/SkeletonLoader"; // SkeletonLoader import

interface RawMaterial {
  name: string;
  price: string;
  change: string;
  changeClass: string;
}

export default function Raw() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const materials: RawMaterial[] = [
    {
      name: "Rice",
      price: "592.00",
      change: "-3.43%",
      changeClass: "text-red-500",
    },
    {
      name: "Oil",
      price: "68.65",
      change: "-0.72%",
      changeClass: "text-red-500",
    },
    {
      name: "Gas (US)",
      price: "1.60",
      change: "+6.67%",
      changeClass: "text-green-600",
    },
    {
      name: "Silver",
      price: "27.49",
      change: "+12.11%",
      changeClass: "text-green-600",
    },
    {
      name: "Oranges",
      price: "1.95",
      change: "+1.56%",
      changeClass: "text-green-600",
    },
    {
      name: "Diesel",
      price: "2.62",
      change: "-1.87%",
      changeClass: "text-red-500",
    },
    {
      name: "Sugar",
      price: "0.87",
      change: "-1.14%",
      changeClass: "text-red-500",
    },
    {
      name: "Copper",
      price: "9464.43",
      change: "+8.92%",
      changeClass: "text-green-600",
    },
  ];

  if (loading) {
    return <RawSkeletonLoader />;
  }

  return (
    <div className="w-full rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-5">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        Raw material prices in the world
      </h3>
      <div className="mt-7">
        <table className="w-full table-auto">
          <tbody>
            {materials.map((material, index) => (
              <tr key={index}>
                <td>
                  <a
                    href="#"
                    className="text-blue-800 transition hover:underline"
                  >
                    {material.name}
                  </a>
                </td>
                <td className="text-center">{material.price}</td>
                <td className={`mb-3 flex justify-end ${material.changeClass}`}>
                  {material.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href="#" className="mt-3 inline-block font-semibold text-blue-900">
        More raw material prices
      </a>
    </div>
  );
}
