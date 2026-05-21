"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AdBanner = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  targetUrl: string;
  ctaText: string;
};

export const Banner = () => {
  const [banners, setBanners] = useState<AdBanner[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch advertisements from our backend API route
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch("/api/banners");
        if (res.ok) {
          const data = await res.json();
          setBanners(data);
        }
      } catch (error) {
        console.error("Failed to fetch advertisements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  // Auto-rotate banners every 5 seconds, unless hovered
  useEffect(() => {
    if (banners.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners, isHovered]);

  if (loading) {
    return (
      <div className="w-full h-40 md:h-48 my-8 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse flex items-center justify-center border border-gray-200">
        <span className="text-gray-400 font-medium tracking-wide">Reklama yuklanmoqda...</span>
      </div>
    );
  }

  if (banners.length === 0) {
    return (
      <div className="w-full h-40 md:h-48 my-8 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center border border-dashed border-gray-300">
        <span className="text-gray-400 font-medium text-sm">Reklama joyi (REKVIZITAI ADs)</span>
      </div>
    );
  }

  const currentBanner = banners[currentIndex];

  return (
    <div
      className="relative w-full h-40 md:h-48 my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={currentBanner.targetUrl} className="block w-full h-full relative">
        {/* Animated Banner Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with Zoom on Hover */}
            <img
              src={currentBanner.imageUrl}
              alt={currentBanner.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/30 md:to-black/60" />

            {/* Glassmorphism content overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white z-10">
              <div className="max-w-xl md:max-w-2xl space-y-2">
                {/* Badge */}
                <span className="inline-block px-2.5 py-0.5 text-[10px] md:text-xs font-semibold tracking-wider bg-amber-500 text-black uppercase rounded-full shadow-sm animate-pulse">
                  REKLAMA
                </span>
                {/* Title */}
                <h3 className="text-lg md:text-2xl font-bold tracking-tight text-white leading-tight drop-shadow-md group-hover:text-amber-300 transition-colors duration-300">
                  {currentBanner.title}
                </h3>
                {/* Description */}
                <p className="text-xs md:text-sm font-medium text-gray-200 line-clamp-2 leading-relaxed max-w-lg hidden sm:block">
                  {currentBanner.description}
                </p>
              </div>

              {/* Call to Action Button */}
              <div className="absolute right-6 md:right-12 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-gray-900 bg-white hover:bg-amber-400 hover:text-black rounded-xl shadow-md transition-all duration-300 transform active:scale-95 group-hover:shadow-lg group-hover:shadow-white/10">
                  {currentBanner.ctaText}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Small Dot Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-amber-400 w-5"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </a>
    </div>
  );
};
