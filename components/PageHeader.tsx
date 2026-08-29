import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  currentPage: string;
  parentPages?: { name: string; href: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  currentPage,
  parentPages = [{ name: "Home", href: "/" }],
}: PageHeaderProps) {
  return (
    <section className="bg-[#0F172A] text-white pt-32 pb-16 text-center border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 space-y-3">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-xs sm:text-sm pt-1 flex-wrap"
        >
          {parentPages.map((parent, idx) => (
            <React.Fragment key={idx}>
              <Link
                href={parent.href}
                className="text-amber-400 hover:text-amber-300 font-medium transition-colors hover:underline"
              >
                {parent.name}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </React.Fragment>
          ))}
          <span className="text-white font-medium">{currentPage}</span>
        </nav>
      </div>
    </section>
  );
}
