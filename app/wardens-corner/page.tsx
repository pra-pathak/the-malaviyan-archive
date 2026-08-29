import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function WardensCornerPage() {
  const announcements = [
    {
      status: "Ongoing",
      title: "MMM Hall Chronicles: Legacy Preservation Initiative Launched",
      desc: "In celebration of IIT Kharagpur's Platinum Jubilee, residents and alumni are invited to contribute photographs, written memories, and artefacts to the permanent archive.",
      date: "2026",
    },
    {
      status: "Notice",
      title: "Platinum Jubilee Hall Day Celebrations & Alumni Homecoming",
      desc: "Special commemorative programmes and exhibition of historical hall archives planned during the upcoming academic calendar.",
      date: "Autumn 2026",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <PageHeader
        title="Warden's Corner"
        currentPage="Warden's Corner"
      />

      {/* Section 1: Message from the Warden (Pure White #FFFFFF) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Warden Profile Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#F8F9FA] rounded-2xl p-8 text-center border border-[#E5E7EB] shadow-xs">
              <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md mb-5 bg-white ring-1 ring-slate-200">
                <Image
                  src="/warden.webp"
                  alt="Bharath H. Aithal — Warden, MMM Hall"
                  fill
                  sizes="160px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F172A]">
                Bharath H. Aithal
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1 leading-relaxed">
                Warden, Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur
              </p>
              <div className="mt-5 pt-4 border-t border-[#E5E7EB]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-md font-heading">
                  Office of the Warden
                </span>
              </div>
            </div>

            {/* Right Column: Message Prose (8 cols) */}
            <div className="lg:col-span-8 space-y-6 text-[#1F2937] text-base leading-relaxed">
              <div className="pb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
                  Official Welcome
                </span>
                <h2 className="font-heading text-3xl font-bold text-[#0F172A] mt-1">
                  Message from the Warden
                </h2>
                <div className="w-16 h-[3px] bg-[#F59E0B] mt-3 rounded-full" />
              </div>

              <p>
                &ldquo;Welcome to <strong>The Malaviyan Archive</strong> — a project that is as meaningful to me as it is to every resident, past and present, of this remarkable hall. MMM Hall is not just a building. It is a community, a culture, and a story that has been building since 27th February 2005.&rdquo;
              </p>
              <p>
                &ldquo;The MMM Hall Chronicles initiative, launched as part of IIT Kharagpur&apos;s Platinum Jubilee, is our effort to ensure that this story is never lost. We are collecting photographs, recording memories, and building a permanent digital archive that every future resident of Malaviya will be able to access and add to.&rdquo;
              </p>
              <p>
                &ldquo;I invite every alumnus, every former warden, every staff member who has been part of this hall to contribute. Your memory belongs here. Together, we are writing the history of Malaviya.&rdquo;
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-heading font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all shadow-xs"
                >
                  <span>Share Your Memory with the Warden&apos;s Office →</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Announcements & Bulletins (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Bulletins
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#0F172A] mt-1">
              Announcements &amp; Updates
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-4">
            {announcements.map((ann, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#FEF3C7] text-[#92400E] font-heading">
                      [{ann.status}]
                    </span>
                    <span className="text-xs text-[#94A3B8] font-medium">
                      {ann.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-[#0F172A]">
                    {ann.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {ann.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 text-center text-xs sm:text-sm text-[#64748B] italic border border-[#E5E7EB]">
            &ldquo;This section will be regularly updated with messages, announcements, and reflections from the Warden&apos;s office.&rdquo;
          </div>
        </div>
      </section>
    </div>
  );
}
