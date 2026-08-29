"use client";

import React from "react";
import { X, Play, Volume2, Clock, User, Calendar, Quote } from "lucide-react";

interface MediaItem {
  id: string;
  title: string;
  speaker: string;
  role: string;
  era: string;
  duration: string;
  summary: string;
  quote: string;
}

interface AudioVideoModalProps {
  item: MediaItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AudioVideoModal({
  item,
  isOpen,
  onClose,
}: AudioVideoModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#E5E7EB] overflow-hidden">
        {/* Header */}
        <div className="bg-[#0F172A] text-white p-5 flex items-center justify-between border-b border-slate-700">
          <div>
            <span className="text-xs text-[#F59E0B] font-bold uppercase tracking-wider font-heading">
              Oral History Episode Preview
            </span>
            <h3 className="font-heading text-xl font-bold text-white mt-0.5">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Audio Preview Canvas */}
        <div className="relative bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] h-60 flex flex-col items-center justify-center text-white text-center p-6">
          <div className="w-16 h-16 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#0F172A] shadow-lg shadow-[#F59E0B]/30 hover:scale-105 transition-transform cursor-pointer">
            <Play className="w-7 h-7 fill-current ml-1" />
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs text-white/80 bg-black/40 px-4 py-1.5 rounded-full border border-white/10">
            <span className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Full Audio &amp; Video Recording</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{item.duration}</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto">
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] pb-3 border-b border-neutral-100">
            <span className="flex items-center gap-1 font-semibold text-[#0F172A]">
              <User className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{item.speaker}</span> ({item.role})
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>{item.era}</span>
            </span>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1 font-heading">
              Episode Synopsis
            </h4>
            <p className="text-sm text-[#1F2937] leading-relaxed">
              {item.summary}
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] border-l-4 border-[#F59E0B] rounded-r-md">
            <Quote className="w-4 h-4 text-[#F59E0B] mb-1 opacity-80" />
            <p className="font-serif-italic text-sm text-[#0F172A] leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </p>
          </div>

          <div className="pt-2 text-center">
            <p className="text-xs text-[#64748B] italic">
              Oral history full video release scheduled for the Platinum Jubilee celebrations in 2026.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F9FA] border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
