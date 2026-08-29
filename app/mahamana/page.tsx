import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function MahamanaPage() {
  const quotes = [
    {
      quote: "We must make our young men and women not only educated but enlightened.",
      context: "Address on holistic character and higher learning in India",
    },
    {
      quote: "The future of India lies in its villages.",
      context: "Vision for rural empowerment and self-reliance",
    },
    {
      quote: "Education is the greatest gift one can give to the nation.",
      context: "Inaugural convocation ideals at Banaras Hindu University",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <PageHeader
        title="Mahamana Pandit Madan Mohan Malaviya"
        subtitle="The Man Behind the Name"
        currentPage="Mahamana's Legacy"
      />

      {/* Section 1: Biography Section with Side-by-Side Photo & Text (Pure White #FFFFFF) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto pb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Architect of Modern Higher Education
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
              Who Was Mahamana?
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Portrait Photograph of Mahamana */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-4 border-white ring-1 ring-slate-200 group">
                <Image
                  src="/mahamana.jpg"
                  alt="Portrait of Bharat Ratna Mahamana Pandit Madan Mohan Malaviya"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white text-center">
                  <p className="font-heading font-bold text-sm tracking-wide text-white">Bharat Ratna</p>
                  <p className="text-xs text-amber-300 font-medium font-heading">Pandit Madan Mohan Malaviya (1861–1946)</p>
                </div>
              </div>
            </div>

            {/* Right Column: Biography Narrative */}
            <div className="lg:col-span-7 space-y-5 text-[#1F2937] text-base leading-relaxed">
              <p>
                Born on <strong>25th December 1861 in Allahabad</strong> (now Prayagraj), Mahamana Pandit Madan Mohan Malaviya was one of the most luminous and transformative architects of modern Indian nationhood. A profound scholar, educationist, eloquent advocate, journalist, and statesman, he was elected President of the Indian National Congress for four historic terms and stood as a towering voice in India&apos;s struggle for freedom.
              </p>
              <p>
                Among his monumental gifts to the nation, his crowning triumph remains the founding of the <strong>Banaras Hindu University (BHU) in 1916</strong>. Built through visionary public fundraising and grassroots mobilization across undivided India, BHU became one of Asia&apos;s largest residential universities. Mahamana believed passionately that genuine national independence and self-reliance could only be achieved through world-class modern scientific education synthesized with timeless ethical values.
              </p>
              <p>
                In recognition of his lifelong devotion to the nation, educational pioneering, and ethical leadership, Mahamana was posthumously conferred the <strong>Bharat Ratna</strong>, the Republic of India&apos;s highest civilian honour, in 2014.
              </p>
              <p>
                Pandit Madan Mohan Malaviya Hall of Residence at IIT Kharagpur proudly bears his name not as a mere historical tribute, but as a living aspiration — to inspire future engineers, technologists, and researchers to become citizens of profound character, intellectual rigour, and unyielding public purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: His Words — 3 Pull Quote Blocks (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Timeless Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
              In His Own Words
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-6">
            {quotes.map((q, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 sm:p-10 border border-[#E5E7EB] text-center space-y-3 relative shadow-xs"
              >
                <div className="font-serif-italic text-5xl text-[#F59E0B] leading-none select-none">
                  &ldquo;
                </div>
                <blockquote className="font-serif-italic text-xl sm:text-2xl text-[#0F172A] leading-relaxed -mt-4">
                  {q.quote}
                </blockquote>
                <div className="pt-2 font-bold text-xs sm:text-sm text-[#1F2937] tracking-wide uppercase font-heading">
                  — Mahamana Pandit Madan Mohan Malaviya
                </div>
                <div className="text-xs text-[#64748B] italic font-medium">
                  {q.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: His Legacy at MMM Hall (Pure White #FFFFFF) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-[#1F2937] text-base leading-relaxed">
          <div className="text-center pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Living Ethos
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
              His Legacy at MMM Hall
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <p>
            Mahamana&apos;s ideals find vivid resonance in the daily rhythm of life at MMM Hall. His belief in universal access to knowledge, moral integrity, community solidarity, and national progress guides the ethos of our residential culture.
          </p>
          <p>
            Every scholar who walks the corridors of Malaviya is encouraged to look beyond personal career achievements — to apply technical intellect towards societal upliftment, technological self-reliance, and sustainable development for the nation and humanity.
          </p>
        </div>
      </section>
    </div>
  );
}
