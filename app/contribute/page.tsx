import React from "react";
import {
  Camera,
  PenTool,
  Users,
  FileText,
  Mail,
  MessageSquare,
  Package,
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function ContributePage() {
  const items = [
    {
      icon: <Camera className="w-6 h-6 text-[#F59E0B]" />,
      title: "Old Photographs",
      desc: "Any photograph from your time at MMM Hall — wings, quadrangle, celebrations, rooms, and sports matches.",
    },
    {
      icon: <PenTool className="w-6 h-6 text-[#F59E0B]" />,
      title: "Written Memories",
      desc: "A personal story, an unforgettable moment, an anecdote, or reflections on your transformative hall years.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#F59E0B]" />,
      title: "People You Remember",
      desc: "Tributes to batchmates, mentors, wardens, mess staff, or hall workers who made a lasting difference.",
    },
    {
      icon: <FileText className="w-6 h-6 text-[#F59E0B]" />,
      title: "Documents & Artefacts",
      desc: "Newsletters, event brochures, GC certificates, T-shirts, posters, or historical hall printed materials.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <PageHeader
        title="Contribute Your Memory"
        subtitle="Your story belongs here."
        currentPage="Contribute"
      />

      {/* Section 1: Why Contribute (Pure White #FFFFFF) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
            Permanent Legacy
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Why Contribute?
          </h2>
          <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-[#1F2937] leading-relaxed pt-2">
            &ldquo;The Malaviyan Archive is only as rich as the memories that go into it. Every photograph you share, every story you write, every name you remember — it all becomes part of a permanent record that will be seen and cherished by every future resident of MMM Hall. You lived this history. Help us preserve it.&rdquo;
          </p>
        </div>
      </section>

      {/* Section 2: What We Are Looking For (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Archive Categories
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#0F172A] mt-1">
              What We Are Looking For
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-7 text-center border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] mx-auto flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#0F172A] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Embedded Google Form (Pure White #FFFFFF) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Official Form
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#0F172A] mt-1">
              Submit Your Contribution
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Fill out the Google form below or open it in a new window
            </p>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="text-right">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B]"
            >
              <span>Open Form in New Tab</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Iframe wrapper */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-xs">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform?embedded=true"
              width="100%"
              height="1200"
              className="w-full border-0 min-h-[1200px]"
              title="Malaviyan Archive Submission Form"
            >
              Loading submission form...
            </iframe>
          </div>
        </div>
      </section>

      {/* Section 4: Other Ways to Contribute (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[760px] mx-auto px-4 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Alternative Channels
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
              Other Ways to Contribute
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-[#E5E7EB] flex items-start gap-4 shadow-xs">
              <div className="p-3 rounded-lg bg-[#F8F9FA] text-[#0F172A] border border-[#E5E7EB]">
                <Mail className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-[#0F172A]">
                  Direct Email Dispatch
                </h4>
                <a
                  href="mailto:mmmhallchronicles@gmail.com"
                  className="text-xs sm:text-sm text-[#0F172A] hover:underline font-semibold"
                >
                  mmmhallchronicles@gmail.com
                </a>
                <p className="text-xs text-[#64748B] mt-1">
                  Send high-resolution scans, write-ups, or batch albums directly as attachments.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#E5E7EB] flex items-start gap-4 shadow-xs">
              <div className="p-3 rounded-lg bg-[#F8F9FA] text-[#0F172A] border border-[#E5E7EB]">
                <MessageSquare className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-[#0F172A]">
                  WhatsApp Coordinator
                </h4>
                <span className="text-xs sm:text-sm text-[#1F2937] font-semibold">
                  +91 3222 282000 (Hall Office / Archive Team)
                </span>
                <p className="text-xs text-[#64748B] mt-1">
                  Quick text, audio notes, and instant media submissions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#E5E7EB] flex items-start gap-4 shadow-xs">
              <div className="p-3 rounded-lg bg-[#F8F9FA] text-[#0F172A] border border-[#E5E7EB]">
                <Package className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-[#0F172A]">
                  Physical Materials &amp; Artefacts
                </h4>
                <p className="text-xs text-[#64748B] mt-1">
                  Contact us and our student archiving team will arrange safe pickup, high-resolution scanning, and prompt return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
