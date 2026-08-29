import React from "react";
import { Camera, ExternalLink, Sparkles } from "lucide-react";
import PhotoComparisonSlider from "@/components/PhotoComparisonSlider";
import PageHeader from "@/components/PageHeader";

export default function PhotoEssayPage() {
  const essays = [
    {
      title: "The Main Gate & Entrance Arch",
      location: "Main Entrance Quadrangle",
      beforeYear: "2005",
      afterYear: "2026",
      beforeLabel: "Inaugural Entryway",
      afterLabel: "Platinum Jubilee Facade",
      description:
        "The first welcoming gateway that greeted early batches in February 2005, captured alongside its expanded modern architectural entrance today.",
    },
    {
      title: "The Central Quadrangle & Corridors",
      location: "Academic Quadrangle & Residential Blocks",
      beforeYear: "2008",
      afterYear: "2026",
      beforeLabel: "Early Wing Gatherings",
      afterLabel: "Modern Quadrangle",
      description:
        "Long, sunlit corridors that echoed with late-night debates, wing chants, and preparation for GC events across two decades of hall residency.",
    },
    {
      title: "The Common Room & Recreation Lounge",
      location: "Ground Floor Activity Wing",
      beforeYear: "2012",
      afterYear: "2026",
      beforeLabel: "Vintage Recreation Era",
      afterLabel: "Modern Community Hub",
      description:
        "The room that never slept. From watching historic matches on CRT displays to present-day acoustic lounges, hackathon huddles, and celebrations.",
    },
    {
      title: "The Dining Hall & Grand Banquets",
      location: "Central Dining Complex",
      beforeYear: "2015",
      afterYear: "2026",
      beforeLabel: "Hall Day Feast 2015",
      afterLabel: "Hall Day Banquet 2026",
      description:
        "The beating heart of daily fellowship, where thousands of scholars gathered three times a day to share meals, stories, and celebrate festive hall nights.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <PageHeader
        title="Same Ground, New Footsteps"
        currentPage="Photo Essay"
      />

      {/* Section 1: Narrative & Status Overview (Pure White #FFFFFF) */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Interactive Then &amp; Now Visual Series</span>
          </div>

          <p className="font-serif-italic text-lg sm:text-xl text-[#0F172A] leading-relaxed">
            &ldquo;A carefully composed series of paired photographs — archival images of MMM Hall from its early years placed side by side with modern recreations of the same spaces. The same gate. The same corridor. The same courtyard. Two moments in time, twenty years apart.&rdquo;
          </p>

          <div className="pt-2">
            <span className="badge-soon">
              COMING SOON · Live by Autumn 2026
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Photo Essay Comparisons Grid (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Interactive Preview
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#0F172A] mt-1">
              Paired Archival Exhibits
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Drag the center slider horizontally to transition between 2005 and 2026
            </p>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {essays.map((item, idx) => (
              <PhotoComparisonSlider
                key={idx}
                title={item.title}
                location={item.location}
                beforeYear={item.beforeYear}
                afterYear={item.afterYear}
                beforeLabel={item.beforeLabel}
                afterLabel={item.afterLabel}
                description={item.description}
              />
            ))}
          </div>

          {/* Submission CTA Callout */}
          <div className="bg-white rounded-xl p-8 sm:p-10 text-center border border-[#E5E7EB] max-w-2xl mx-auto space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center mx-auto text-[#0F172A] border border-[#E5E7EB]">
              <Camera className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#0F172A]">
              Do you have photographs from your time at MMM?
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Our photography archival team is curating original images from 2005 through 2025. Share your vintage wing photos, celebration snapshots, and campus views.
            </p>
            <div className="pt-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-heading font-bold text-sm px-6 py-3 rounded-lg shadow-xs transition-all"
              >
                <span>Share a Photograph →</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
