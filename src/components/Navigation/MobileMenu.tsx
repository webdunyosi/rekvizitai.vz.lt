"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  AlignJustify,
  Database,
  Megaphone,
  Search,
  HelpCircle,
  ChevronRight,
  Globe,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "../Core/Logo";
import { motion } from "framer-motion";

export const MobileMenu = ({ className }: { className?: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 active:scale-95 flex items-center justify-center">
          <AlignJustify className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className={cn(
          "w-full sm:max-w-[450px] bg-gradient-to-b from-[#090b30] via-[#030419] to-[#01010c] text-white border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between h-full select-none",
          className
        )}
      >
        <div className="flex flex-col gap-6 h-full justify-between">
          <div className="space-y-6">
            {/* Header branding */}
            <SheetHeader className="text-left border-b border-white/5 pb-4">
              <SheetTitle className="text-left">
                <Logo size="md" variant="default" className="select-none" />
              </SheetTitle>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide uppercase mt-1">
                Lietuvos įmonių katalogas • Partner Portal
              </p>
            </SheetHeader>

            {/* Profile Section */}
            <NavbarProfile withSheetClose />

            {/* Menu Links */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-slate-400/80 uppercase ml-1 block">
                Navigacija / Navigation
              </span>
              <Navbar withSheetClose />
            </div>
          </div>

          {/* Premium Footer with stats/info */}
          <div className="border-t border-white/5 pt-6 space-y-4">
            {/* Database Sync Badge */}
            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-medium text-slate-300">Saugus ryšys (SSL)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Aktualus
              </div>
            </div>

            {/* Sub-footer copyright */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span>© {new Date().getFullYear()} rekvizitai.vz.lt</span>
              <div className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Globe className="h-3 w-3" />
                <span>Lietuvių / EN</span>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const NavbarProfile = ({ withSheetClose }: { withSheetClose?: boolean }) => {
  const [SheetCloseWrapper, shetCloseWrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  return (
    <SheetCloseWrapper {...shetCloseWrapperProps}>
      <Link
        href="/profile"
        className="group flex items-center justify-between p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer block"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-11 w-11 ring-2 ring-white/10 group-hover:ring-blue-400 transition-all duration-300">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-slate-800 text-slate-200">CN</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#090b30] animate-pulse" />
          </div>
          <div className="text-left">
            <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase block">Sveiki atvykę</span>
            <span className="text-sm font-semibold text-white tracking-wide group-hover:text-blue-300 transition-colors block">
              {"Joe's Partner"}
            </span>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
      </Link>
    </SheetCloseWrapper>
  );
};

const Navbar = ({ withSheetClose }: { withSheetClose?: boolean }) => {
  const [SheetCloseWrapper, shetCloseWrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  const menuItems = [
    {
      title: "Data files",
      href: "/data-files",
      description: "Įmonių mašininio nuskaitymo duomenys",
      icon: Database,
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400 group-hover:bg-blue-500 group-hover:text-white",
    },
    {
      title: "Advertising",
      href: "/advertisement",
      description: "Reklamos paslaugos ir baneriai",
      icon: Megaphone,
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-white",
    },
    {
      title: "Detailed search",
      href: "/detailed-search",
      description: "Išplėstinė įmonių paieška ir filtrai",
      icon: Search,
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400 group-hover:bg-purple-500 group-hover:text-white",
    },
    {
      title: "Help",
      href: "/help",
      description: "Pagalba, taisyklės ir DUK",
      icon: HelpCircle,
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 25 } },
  };

  return (
    <nav className="w-full">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-2 text-start w-full"
      >
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.li key={idx} variants={itemVariants} className="w-full">
              <SheetCloseWrapper {...shetCloseWrapperProps}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between p-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-white/5 cursor-pointer block"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Glowing Icon Container */}
                    <div
                      className={cn(
                        "h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br border transition-all duration-300",
                        item.color
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    {/* Text Container */}
                    <div className="text-left">
                      <span className="text-sm font-semibold tracking-wide text-white group-hover:text-blue-300 transition-colors block">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-400 tracking-wide mt-0.5 line-clamp-1 group-hover:text-slate-300 transition-colors block">
                        {item.description}
                      </span>
                    </div>
                  </div>
                  {/* Action Arrow */}
                  <div className="h-7 w-7 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </Link>
              </SheetCloseWrapper>
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
};
