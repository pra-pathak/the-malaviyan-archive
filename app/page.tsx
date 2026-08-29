import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Landmark,
  ScrollText,
  Camera,
  Mic,
  Award,
  Sparkles,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Users,
  Calendar,
  Building,
  Trophy,
} from "lucide-react";
import StatCard from "@/components/StatCard";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col pt-20">
      {/* =====================================================================
          HERO BANNER (Original Crisp Image, 0 Blur, 0 Overlay)
          ===================================================================== */}
      <section
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden"
        id="hero"
      >
        {/* 100% Original Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/home-bg.jpg"
            alt="Campus Background"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Hero Content (relative z-10) */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-block">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full border border-slate-200 shadow-sm font-heading">
              <span className="text-amber-600 mr-1.5">●</span>
              PANDIT MADAN MOHAN MALAVIYA HALL OF RESIDENCE · IIT KHARAGPUR
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.1] drop-shadow-sm">
            The Malaviyan Archive
          </h1>

          <p className="text-lg sm:text-2xl font-semibold text-slate-900 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Preserving the Story of the Largest Hall at IIT Kharagpur
          </p>

          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 shadow-sm text-slate-950 font-heading font-bold text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Founded 27th February 2005</span>
            </span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Explore Button */}
            <a
              href="#about-initiative"
              className="w-full sm:w-auto px-6 py-3 rounded-lg font-heading font-semibold text-sm bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore the Archive</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Share Your Memory Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg font-heading font-semibold text-sm bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <span>Share Your Memory</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about-initiative"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-900 hover:text-amber-700 bg-white/90 backdrop-blur-xs px-3.5 py-1 rounded-full border border-slate-200 shadow-sm flex flex-col items-center gap-1 text-[11px] font-bold uppercase tracking-widest transition-colors animate-bounce-slow z-10"
          aria-label="Scroll to About Initiative"
        >
          <span>Explore</span>
          <ChevronDown className="w-3.5 h-3.5 text-amber-600" />
        </a>
      </section>

      {/* =====================================================================
          ABOUT THE INITIATIVE (Soft Off-White #F8F9FA)
          ===================================================================== */}
      <section
        id="about-initiative"
        className="relative z-10 py-20 sm:py-24 bg-[#F8F9FA]"
      >
        <div className="max-w-[720px] mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-heading">
            Preserving Living History
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
            About This Initiative
          </h2>
          <div className="w-16 h-[3px] bg-amber-500 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-2">
            &ldquo;As part of IIT Kharagpur&apos;s Platinum Jubilee celebrations, MMM Hall is building a permanent digital archive of its history, spaces, people, and stories. The Malaviyan Archive is that place — a home for every memory, every face, and every moment that has made this hall what it is over the past two decades.&rdquo;
          </p>
          <div className="pt-3">
            <span className="inline-block text-xs sm:text-sm text-slate-500 font-medium italic">
              Funded under the Institute of Eminence (IoE) Grant | IIT Kharagpur Platinum Jubilee 2026
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          HALL AT A GLANCE — 4 STAT CARDS (Pure White)
          ===================================================================== */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-heading">
              Key Milestones
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Hall at a Glance
            </h2>
            <div className="w-16 h-[3px] bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard
              number="2005"
              label="Year of Founding"
              subtext="Commemorated 27th February"
              icon={<Calendar className="w-5 h-5" />}
            />
            <StatCard
              number="2000+"
              label="Residents Today"
              subtext="Undergraduate & Postgraduate"
              icon={<Users className="w-5 h-5" />}
            />
            <StatCard
              number="20"
              label="Years of Legacy"
              subtext="Two decades of brotherhood"
              icon={<Building className="w-5 h-5" />}
            />
            <StatCard
              number="#1"
              label="Largest Hall at IIT KGP"
              subtext="In resident capacity & area"
              icon={<Trophy className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          WHAT'S INSIDE THE ARCHIVE — 6 SECTION CARDS (Soft Off-White #F8F9FA)
          ===================================================================== */}
      <section className="relative z-10 py-20 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-heading">
              Heritage Modules
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              What&apos;s Inside the Archive
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Explore the chronicles, oral histories, and distinguished heritage of MMM Hall
            </p>
            <div className="w-16 h-[3px] bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: About */}
            <div className="group bg-white rounded-xl p-7 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] text-slate-900 flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  <Landmark className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                  About MMM Hall
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  The hall&apos;s story, state-of-the-art facilities, and vibrant residential community.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600 hover:underline transition-all font-heading"
              >
                <span>Explore →</span>
              </Link>
            </div>

            {/* Card 2: History */}
            <div className="group bg-white rounded-xl p-7 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] text-slate-900 flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  <ScrollText className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                  History &amp; Milestones
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Twenty years of the hall&apos;s journey, timeline milestones, and architectural growth.
                </p>
              </div>
              <Link
                href="/history"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600 hover:underline transition-all font-heading"
              >
                <span>Explore →</span>
              </Link>
            </div>

            {/* Card 3: Photo Essay */}
            <div className="group bg-white rounded-xl p-7 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] text-slate-900 flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  <Camera className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    Same Ground, New Footsteps
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Then and Now photo essay comparing hall spaces over twenty years.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href="/photo-essay"
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 hover:underline font-heading"
                >
                  Explore →
                </Link>
                <span className="badge-soon">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Card 4: Voices */}
            <div className="group bg-white rounded-xl p-7 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] text-slate-900 flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  <Mic className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    Voices of Malaviya
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Oral history video and audio series featuring alumni, wardens, and staff reflections.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href="/voices"
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 hover:underline font-heading"
                >
                  Explore →
                </Link>
                <span className="badge-soon">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Card 5: Hall of Honour */}
            <div className="group bg-white rounded-xl p-7 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] text-slate-900 flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    Hall of Honour
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Distinguished alumni directory of MMM Hall across science, industry, and public service.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href="/hall-of-honour"
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 hover:underline font-heading"
                >
                  Explore →
                </Link>
                <span className="badge-soon">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Card 6: Mahamana */}
            <div className="group bg-white rounded-xl p-7 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] text-slate-900 flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                  Mahamana&apos;s Legacy
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  The life, national philosophy, and enduring principles of the man behind the name.
                </p>
              </div>
              <Link
                href="/mahamana"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600 hover:underline transition-all font-heading"
              >
                <span>Explore →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          PULL QUOTE — A MEMORY FROM THE ARCHIVE (Pure White)
          ===================================================================== */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-[840px] mx-auto px-4 text-center space-y-4">
          <div className="font-serif-italic text-6xl text-amber-500 leading-none select-none">
            &ldquo;
          </div>
          <blockquote className="font-serif-italic text-2xl sm:text-3xl text-slate-900 leading-relaxed -mt-6">
            The hall never really slept. No matter what time it was, there was always someone in the common room, always a conversation happening somewhere. That was Malaviya.
          </blockquote>
          <div className="pt-2 font-semibold text-slate-900 text-sm tracking-wide">
            — Alumni, MMM Hall, IIT Kharagpur
          </div>
          <div className="text-xs italic text-slate-500">
            (Placeholder — real alumni memories coming soon)
          </div>
        </div>
      </section>

      {/* =====================================================================
          CONTRIBUTE CTA BANNER (Deep Maroon #7F1D1D)
          ===================================================================== */}
      <section className="relative z-10 py-20 sm:py-24 bg-[#7F1D1D] text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Your memory belongs here.
          </h2>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
            We are collecting photographs and stories from every batch of MMM Hall. It takes 5 minutes — and it becomes a permanent part of the hall&apos;s history.
          </p>
          <div className="pt-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-heading font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Share Your Memory →</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
