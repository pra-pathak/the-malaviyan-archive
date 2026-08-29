"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  isSoon?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "History", href: "/history" },
  { name: "Photo Essay", href: "/photo-essay", isSoon: true },
  { name: "Voices", href: "/voices", isSoon: true },
  { name: "Hall of Honour", href: "/hall-of-honour", isSoon: true },
  { name: "Mahamana", href: "/mahamana" },
  { name: "Warden's Corner", href: "/wardens-corner" },
  { name: "Contribute", href: "/contribute" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 transition-all duration-200">
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        
        {/* =================================================================
            1. LEFT SECTION: Logo & Brand Lockup (Shifted to Left Edge)
            ================================================================= */}
        <div className="flex items-center flex-shrink-0 min-w-0">
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="The Malaviyan Archive Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden flex-shrink-0 bg-white p-0.5 border border-slate-200 shadow-2xs group-hover:border-amber-500 transition-colors">
              <Image
                src="/logo.jpeg"
                alt="MMM Hall Crest Logo"
                fill
                sizes="44px"
                className="object-contain rounded-md"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading text-sm sm:text-base lg:text-[17px] font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors leading-tight whitespace-nowrap">
                THE MALAVIYAN ARCHIVE
              </span>
              <span className="font-heading text-[10px] sm:text-[10.5px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5 whitespace-nowrap">
                MMM HALL • IIT KHARAGPUR
              </span>
            </div>
          </Link>
        </div>

        {/* =================================================================
            2. CENTER SECTION: Centered Navigation Menu
            ================================================================= */}
        <nav className="hidden xl:flex items-center justify-center flex-1 px-4 2xl:px-8 gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-5 text-[13px] 2xl:text-sm font-medium text-slate-700">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-1 transition-colors duration-150 inline-flex items-center whitespace-nowrap ${
                  isActive
                    ? "text-amber-600 font-semibold"
                    : item.isSoon
                    ? "text-slate-500 hover:text-amber-600"
                    : "text-slate-700 hover:text-amber-600"
                }`}
              >
                <span>{item.name}</span>
                {item.isSoon && (
                  <span className="text-[8.5px] uppercase tracking-wide px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800 font-semibold ml-1 inline-block align-middle">
                    Soon
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* =================================================================
            3. RIGHT SECTION: Action Button
            ================================================================= */}
        <div className="hidden sm:flex items-center justify-end flex-shrink-0">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs sm:text-[13px] font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap font-heading"
          >
            <span>Share Your Memory</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-slate-950 font-heading"
          >
            Share Memory
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-800 hover:text-amber-600 hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-amber-600 font-semibold bg-amber-50"
                      : "text-slate-800 hover:text-amber-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.isSoon && (
                    <span className="text-[9px] uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">
                      Soon
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm py-2.5 rounded-lg shadow-xs transition-colors font-heading"
              >
                <span>Share Your Memory (Google Form)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
