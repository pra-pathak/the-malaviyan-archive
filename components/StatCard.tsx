import React from "react";

interface StatCardProps {
  number: string;
  label: string;
  subtext?: string;
  icon?: React.ReactNode;
}

export default function StatCard({
  number,
  label,
  subtext,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 text-center border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      {icon && (
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#F8F9FA] text-[#F59E0B] flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-2">
        {number}
      </div>
      <div className="w-8 h-[2px] bg-[#F59E0B] mx-auto my-2.5 rounded-full" />
      <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748B]">
        {label}
      </div>
      {subtext && (
        <p className="text-[11px] text-[#64748B] mt-1 font-normal">
          {subtext}
        </p>
      )}
    </div>
  );
}
