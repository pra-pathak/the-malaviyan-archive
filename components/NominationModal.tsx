"use client";

import React, { useState } from "react";
import { X, Send, Award, CheckCircle2 } from "lucide-react";

interface NominationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NominationModal({
  isOpen,
  onClose,
}: NominationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [field, setField] = useState("");
  const [achievement, setAchievement] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Hall of Honour Nomination] ${name} (Batch ${batch})`);
    const mailtoBody = encodeURIComponent(
      `Nominee Name: ${name}\nBatch/Years at MMM: ${batch}\nSector/Field: ${field}\nKey Achievements & Contributions:\n${achievement}`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:mmmhallchronicles@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-[#E5E7EB] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0F172A] text-white p-5 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="font-heading text-lg font-bold text-white">
              Nominate an Alumnus
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-heading text-lg font-bold text-[#0F172A]">
                Nomination Draft Ready!
              </h4>
              <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                Opening your mail client to forward the nomination to <strong>mmmhallchronicles@gmail.com</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#F59E0B] text-[#0F172A] rounded-lg"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-[#1F2937] mb-1 font-heading">
                  Nominee Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. A. K. Banerjee"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#1F2937] mb-1 font-heading">
                    Batch / Year at MMM *
                  </label>
                  <input
                    type="text"
                    required
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    placeholder="e.g. 2008 / B.Tech"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1F2937] mb-1 font-heading">
                    Domain / Sector *
                  </label>
                  <input
                    type="text"
                    required
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    placeholder="e.g. Technology / Public Service"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#1F2937] mb-1 font-heading">
                  Achievements &amp; Distinctions *
                </label>
                <textarea
                  required
                  rows={4}
                  value={achievement}
                  onChange={(e) => setAchievement(e.target.value)}
                  placeholder="Summarize awards, leadership roles, patents, publications, or public impact..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#64748B] hover:bg-neutral-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] rounded-lg inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Nomination</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
