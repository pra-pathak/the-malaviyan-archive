"use client";

import React, { useState } from "react";
import { Play, Volume2, Clock, User, ExternalLink, Sparkles } from "lucide-react";
import AudioVideoModal from "@/components/AudioVideoModal";
import PageHeader from "@/components/PageHeader";

interface Episode {
  id: string;
  title: string;
  speaker: string;
  role: string;
  era: string;
  duration: string;
  summary: string;
  quote: string;
}

export default function VoicesPage() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const episodes: Episode[] = [
    {
      id: "ep-1",
      title: "Episode 1: The Founding Years (2005)",
      speaker: "Inaugural Batch Alumni & Wardens",
      role: "Class of 2005–2009",
      era: "2005–2009",
      duration: "12 Mins",
      summary:
        "The story of the first boarders moving into a newly minted hall, establishing the very first traditions, picking hall colours, and building a community from scratch.",
      quote:
        "We didn't inherit a tradition; we had the thrilling responsibility of inventing one.",
    },
    {
      id: "ep-2",
      title: "Episode 2: Hall Culture & Diwali Illumination",
      speaker: "Hall Cultural Team & Artists",
      role: "Illu Captains & Decor Teams",
      era: "2010–2018",
      duration: "15 Mins",
      summary:
        "An inside look at the countless sleepless nights spent erecting colossal bamboo chhaats and placing thousands of earthen diyas for the historic IIT KGP Illumination.",
      quote:
        "When the diyas were lit and the entire campus stood in awe, every burnt finger felt like a badge of honour.",
    },
    {
      id: "ep-3",
      title: "Episode 3: The Warden's Perspectives",
      speaker: "Former Wardens & Hall Managers",
      role: "Faculty Mentors",
      era: "2005–2025",
      duration: "14 Mins",
      summary:
        "Reflections on shepherding thousands of young minds through their most transformative collegiate years, managing the hall's growth, and upholding Mahamana's values.",
      quote:
        "To manage a hall of 2,000 brilliant minds is to witness the future leaders of the nation in the making.",
    },
    {
      id: "ep-4",
      title: "Episode 4: Voices Across Decades",
      speaker: "Alumni & Multi-generational Boarders",
      role: "Global Alumni Network",
      era: "2005–2026",
      duration: "18 Mins",
      summary:
        "A tapestry of short vignettes, memories of late-night canteen sessions, inter-hall GC victories, academic struggles, and lifelong brotherhood spanning 20 years.",
      quote:
        "You can leave Malaviya, but the spirit of Malaviya never leaves you.",
    },
  ];

  const handleOpenPreview = (ep: Episode) => {
    setSelectedEpisode(ep);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <PageHeader
        title="Voices of Malaviya"
        currentPage="Voices of Malaviya"
      />

      {/* Section 1: Narrative & Status Overview (Pure White #FFFFFF) */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Oral History Documentary Films</span>
          </div>

          <p className="font-serif-italic text-lg sm:text-xl text-[#0F172A] leading-relaxed">
            &ldquo;An oral history video series featuring former wardens, alumni from every decade, current residents, and long-serving staff — sharing the memories, stories, and moments that made MMM Hall what it is. Five short films. Twenty years of voices.&rdquo;
          </p>

          <div className="pt-2">
            <span className="badge-soon">
              COMING SOON · In Active Production for 2026
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Episode Video Cards Grid (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Docuseries Lineup
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#0F172A] mt-1">
              Documentary Film Episodes
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Click any episode card to preview synopsis and quotes
            </p>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {episodes.map((ep) => (
              <div
                key={ep.id}
                onClick={() => handleOpenPreview(ep)}
                className="group bg-white rounded-xl overflow-hidden border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between"
              >
                {/* Video Thumbnail Simulation */}
                <div className="relative h-48 bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] flex flex-col items-center justify-center text-white p-6 overflow-hidden">
                  <div className="w-14 h-14 rounded-full bg-[#F59E0B] text-[#0F172A] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/80 bg-black/50 backdrop-blur-xs px-3 py-1 rounded-md">
                    <span className="flex items-center gap-1">
                      <Volume2 className="w-3 h-3 text-[#F59E0B]" />
                      <span>Oral History Video</span>
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Clock className="w-3 h-3 text-[#F59E0B]" />
                      <span>{ep.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#64748B] font-semibold mb-1">
                      <User className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{ep.speaker}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[#0F172A] group-hover:text-[#F59E0B] transition-colors">
                      {ep.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mt-2 line-clamp-2">
                      {ep.summary}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#E5E7EB] text-xs font-semibold text-[#0F172A]">
                    <span>Click to preview synopsis</span>
                    <span className="text-[#F59E0B] group-hover:translate-x-1 transition-transform">
                      Preview →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recording & Interviews Note */}
          <div className="bg-white rounded-xl p-8 text-center max-w-2xl mx-auto space-y-4 border border-[#E5E7EB] shadow-xs">
            <h3 className="font-heading text-xl font-bold text-[#0F172A]">
              Record Your Voice for the Archive
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We are recording short oral testimonies and video interviews with MMM Hall alumni worldwide. Submit your contact details to schedule an interview.
            </p>
            <div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-heading font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg transition-all shadow-xs"
              >
                <span>Share Your Oral History →</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Preview Modal */}
      <AudioVideoModal
        isOpen={modalOpen}
        item={selectedEpisode}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
