import React from "react";
import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function HistoryPage() {
  const milestones = [
    {
      year: "27 Feb 2005",
      title: "Founding of MMM Hall",
      desc: "Pandit Madan Mohan Malaviya Hall of Residence is officially founded at IIT Kharagpur, opening its doors to the first cohort of resident scholars.",
      tag: "Establishment",
    },
    {
      year: "2005–2010",
      title: "Cultural Foundations & Traditions",
      desc: "Hall grows rapidly, establishing its unique residential culture, inaugural Hall Day celebrations, and competitive General Championship traditions.",
      tag: "Traditions",
    },
    {
      year: "2010–2015",
      title: "Infrastructure Expansion",
      desc: "Expansion of modern infrastructure including a dedicated music room, technology innovation room, expanded library, and enhanced sports fields.",
      tag: "Infrastructure",
    },
    {
      year: "2015–2020",
      title: "Crossing 2,000 Boarders",
      desc: "MMM Hall becomes the largest hall of residence at IIT Kharagpur in capacity, nurturing a diverse, nationwide community of scholars.",
      tag: "Milestone",
    },
    {
      year: "2026",
      title: "Platinum Jubilee & Legacy Archive",
      desc: "IIT Kharagpur celebrates its Platinum Jubilee. The Malaviyan Archive legacy preservation initiative is officially inaugurated under the Institute of Eminence (IoE) Grant.",
      tag: "Platinum Jubilee",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <PageHeader
        title="Twenty Years of Malaviya"
        currentPage="History & Milestones"
      />

      {/* Section 1: Founding Story (Pure White #FFFFFF) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-[#1F2937] text-base leading-relaxed">
          <div className="text-center pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Origins
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
              The Founding Story
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <p>
            At the turn of the millennium, as IIT Kharagpur embarked on an ambitious expansion to educate larger cohorts of young engineers and scientists, the institute recognized the urgent need for a contemporary residential complex that set new benchmarks in scale and student living.
          </p>
          <p>
            On <strong>27th February 2005</strong>, the foundation of Pandit Madan Mohan Malaviya Hall of Residence was formally commemorated. Bestowed with the name of Mahamana Pandit Madan Mohan Malaviya, the hall was dedicated to fostering holistic education, national service, and moral character. The inaugural batch of boarders laid the bedrock of the hall’s traditions, crafting its early anthems, initiating sports tournaments, and establishing a culture of mutual support.
          </p>
          <p>
            Over the next two decades, block by block, tradition by tradition, MMM Hall blossomed into the largest and one of the most spirited residential communities on campus, maintaining an unbroken tradition of excellence in academic and extracurricular arenas.
          </p>
        </div>
      </section>

      {/* Section 2: Vertical Timeline (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Chronicles
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
              Two Decades in Milestones
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center vertical gold line */}
            <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] bg-[#F59E0B] -translate-x-1/2" />

            <div className="space-y-10 md:space-y-12">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Center Marker Dot */}
                    <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0F172A] border-2 border-[#F59E0B] shadow-xs z-10" />

                    {/* Content Card */}
                    <div
                      className={`ml-10 md:ml-0 md:w-1/2 ${
                        isEven ? "md:pl-10" : "md:pr-10"
                      }`}
                    >
                      <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-heading text-xl sm:text-2xl font-bold text-[#0F172A]">
                            {m.year}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F8F9FA] text-[#64748B] px-2.5 py-1 rounded-md border border-[#E5E7EB]">
                            {m.tag}
                          </span>
                        </div>
                        <h3 className="font-heading text-base font-semibold text-[#0F172A] mb-2">
                          {m.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Archival Research Callout Box */}
          <div className="mt-16 bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-xs space-y-4">
            <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed">
              &ldquo;We are actively researching and documenting the complete history of MMM Hall with contributions from alumni and former wardens. The full timeline with photographs and stories will be updated here as our archive grows. Contribute your memory to help us fill in the gaps.&rdquo;
            </p>
            <div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-heading font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg transition-all shadow-xs"
              >
                <span>Share Your Memory →</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
