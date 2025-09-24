import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "dark";
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  variant = "default",
}) => {
  const sizeClasses = {
    sm: {
      text: "text-lg",
      emblem: "px-2 py-1 text-sm",
      spacing: "ml-2",
    },
    md: {
      text: "text-lg",
      emblem: "px-1.5 py-0.5 text-lg",
      spacing: "ml-3",
    },
    lg: {
      text: "text-4xl",
      emblem: "px-4 py-2 text-2xl",
      spacing: "ml-4",
    },
  };

  const textColor = variant === "dark" ? "text-gray-900" : "text-white";

  return (
    <div className={`flex items-center ${className}`}>
      {/* Main REKVIZITAI text */}
      <span
        className={`font-bold ${textColor} uppercase tracking-wide ${sizeClasses[size].text}`}
      >
        REKVIZITAI
      </span>

      {/* VŽ emblem */}
      <div
        className={`${sizeClasses[size].spacing} bg-red-600 ${sizeClasses[size].emblem} rounded-sm`}
      >
        <span
          className={`font-bold uppercase text-white ${sizeClasses[size].text}`}
        >
          VŽ
        </span>
      </div>
    </div>
  );
};

export default Logo;
