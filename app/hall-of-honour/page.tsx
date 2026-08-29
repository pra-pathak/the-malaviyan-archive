"use client";

import React, { useState } from "react";
import { Award, UserPlus, Sparkles, Shield } from "lucide-react";
import NominationModal from "@/components/NominationModal";
import PageHeader from "@/components/PageHeader";

export default function HallOfHonourPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const sectors = ["All", "Technology & Research", "Public Service & Policy", "Entrepreneurship", "Academia"];

  const placeholderProfiles = [
    {
      category: "Technology & Research",
      domain: "AI & Computing Pioneers",
      batch: "Class of 2005–2009",
      desc: "Scholars leading global technology innovations, research laboratories, and advanced engineering breakthroughs.",
    },
    {
      category: "Public Service & Policy",
      domain: "Civil Services & Governance",
      batch: "Class of 2006–2010",
      desc: "Administrators and diplomats serving the nation with distinction in IAS, IFS, and international development bodies.",
    },
    {
      category: "Entrepreneurship",
      domain: "Founders & Industry Leaders",
      batch: "Class of 2008–2012",
      desc: "Visionary startup founders, venture creators, and corporate CXOs reshaping modern Indian enterprise.",
    },
    {
      category: "Academia",
      domain: "Professors & Scientists",
      batch: "Class of 2007–2011",
      desc: "Distinguished faculty members and researchers at top global institutions advancing fundamental science.",
    },
    {
      category: "Technology & Research",
      domain: "Aerospace & Defence",
      batch: "Class of 2009–2013",
      desc: "Innovators engineering national space missions, defence technologies, and strategic infrastructure.",
    },
    {
      category: "Entrepreneurship",
      domain: "Social Impact & Sustainability",
      batch: "Class of 2011–2015",
      desc: "Changemakers pioneering green energy, rural healthcare technology, and sustainable grassroots solutions.",
    },
  ];

  const filteredProfiles =
    filter === "All"
      ? placeholderProfiles
      : placeholderProfiles.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <PageHeader
        title="Hall of Honour"
        currentPage="Hall of Honour"
      />

      {/* Section 1: Narrative & Status Overview (Pure White #FFFFFF) */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Distinguished Alumni Registry</span>
          </div>

          <p className="font-serif-italic text-lg sm:text-xl text-[#0F172A] leading-relaxed">
            &ldquo;A permanent record of the distinguished alumni of Pandit Madan Mohan Malaviya Hall of Residence — those who have brought honour to the hall and to IIT Kharagpur through their achievements in science, engineering, public service, entrepreneurship, and beyond.&rdquo;
          </p>

          <div className="pt-2">
            <span className="badge-soon">
              COMING SOON · Nominations Currently Open
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Filterable Profiles Showcase (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Alumni Hall of Distinction
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#0F172A]">
              Distinguished Profiles Directory
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto rounded-full" />

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setFilter(sec)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold font-heading transition-all ${
                    filter === sec
                      ? "bg-[#0F172A] text-white shadow-xs"
                      : "bg-white text-[#64748B] hover:text-[#0F172A] border border-[#E5E7EB]"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* 3x2 Silhouette Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProfiles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-7 text-center border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center mb-4 text-[#9CA3AF]">
                    <Shield className="w-9 h-9" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] bg-[#F8F9FA] px-2.5 py-0.5 rounded-md border border-[#E5E7EB] font-heading">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-[#0F172A] mt-3 mb-1">
                    {item.domain}
                  </h3>
                  <div className="text-xs text-[#94A3B8] font-medium mb-3">
                    {item.batch}
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#E5E7EB] flex items-center justify-center">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-xs font-bold text-[#0F172A] hover:underline transition-colors font-heading"
                  >
                    Nominate Alumnus →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Nomination CTA Banner (Navy #0F172A) */}
          <div className="bg-[#0F172A] text-white rounded-xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-md space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-[#F59E0B]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Nominate an Alumnus of Distinction
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              We are collecting profiles of distinguished MMM Hall alumni who have brought honour to the hall. Submit nominations for researchers, civil servants, entrepreneurs, and leaders.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-heading font-bold text-sm px-8 py-3 rounded-lg shadow-sm transition-all"
              >
                <UserPlus className="w-4 h-4" />
                <span>Nominate an Alumnus →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nomination Form Dialog */}
      <NominationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
