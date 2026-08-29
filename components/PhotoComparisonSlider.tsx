"use client";

import React, { useState, useRef, useCallback } from "react";
import { MoveHorizontal, Camera, History } from "lucide-react";

interface PhotoComparisonProps {
  title: string;
  location: string;
  beforeYear: string;
  afterYear: string;
  beforeLabel?: string;
  afterLabel?: string;
  description: string;
}

export default function PhotoComparisonSlider({
  title,
  location,
  beforeYear = "2005",
  afterYear = "2026",
  beforeLabel = "Archival Era",
  afterLabel = "Present Platinum Jubilee",
  description,
}: PhotoComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden flex flex-col shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      {/* Header */}
      <div className="p-5 border-b border-[#E5E7EB] bg-[#F8F9FA] flex items-center justify-between">
        <div>
          <h3 className="font-heading text-lg font-bold text-[#0F172A]">{title}</h3>
          <p className="text-xs text-[#64748B] flex items-center gap-1.5 mt-0.5">
            <Camera className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{location}</span>
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold text-[#0F172A] bg-[#FEF3C7] px-2.5 py-1 rounded-md border border-[#FDE68A]">
            {beforeYear} ↔ {afterYear}
          </span>
        </div>
      </div>

      {/* Interactive Visual Comparison Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[280px] sm:h-[340px] select-none cursor-ew-resize overflow-hidden bg-slate-900"
      >
        {/* Right / AFTER (Modern) Layer */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] flex flex-col items-center justify-center text-white p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-[#F59E0B] flex items-center justify-center mb-3">
            <Camera className="w-8 h-8 text-[#F59E0B]" />
          </div>
          <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-1 font-heading">
            {afterYear} · Modern View
          </span>
          <p className="text-sm font-heading font-medium text-white/90 max-w-xs">
            {title} (Recreated in 2026)
          </p>
          <span className="text-[11px] text-slate-300 mt-2 italic">
            Full-resolution photography gallery coming soon
          </span>
          
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white border border-white/10">
            {afterLabel} ({afterYear})
          </div>
        </div>

        {/* Left / BEFORE (Archival) Layer (Clipped) */}
        <div
          className="absolute inset-0 h-full overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#475569] flex flex-col items-center justify-center text-amber-100 p-6 text-center border-r-2 border-[#F59E0B]"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 bg-slate-950/40 backdrop-sepia" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-amber-200/40 flex items-center justify-center mb-3">
              <History className="w-8 h-8 text-[#F59E0B]" />
            </div>
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-1 font-heading">
              {beforeYear} · Archival View
            </span>
            <p className="text-sm font-heading font-medium text-white/90 max-w-xs">
              {title} (Original Archive)
            </p>
            <span className="text-[11px] text-slate-300 mt-2 italic">
              Preserved in the historical archives
            </span>
          </div>

          <div className="absolute top-4 left-4 bg-[#0F172A]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#F59E0B] border border-[#F59E0B]/30">
            {beforeLabel} ({beforeYear})
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#F59E0B] shadow-lg cursor-ew-resize flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div
            onMouseDown={handleMouseDown}
            className="w-9 h-9 rounded-full bg-[#0F172A] border-2 border-[#F59E0B] shadow-xl flex items-center justify-center text-white pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform"
          >
            <MoveHorizontal className="w-4 h-4 text-[#F59E0B]" />
          </div>
        </div>

        {/* Drag Helper Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] text-white/80 font-medium pointer-events-none flex items-center gap-1">
          <MoveHorizontal className="w-3 h-3 text-[#F59E0B]" />
          <span>Drag slider to compare eras</span>
        </div>
      </div>

      {/* Description caption */}
      <div className="p-4 bg-white text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E5E7EB]">
        {description}
      </div>
    </div>
  );
}
