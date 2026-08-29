import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Award, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Legacy Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white/10 p-0.5 border border-white/20">
                <Image
                  src="/logo.jpeg"
                  alt="MMM Hall Crest Logo"
                  fill
                  sizes="40px"
                  className="object-contain rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-white tracking-tight leading-tight">
                  THE MALAVIYAN ARCHIVE
                </span>
                <span className="text-[11px] text-[#F59E0B] font-heading font-semibold uppercase tracking-wider">
                  MMM Hall · IIT Kharagpur
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              The official digital chronicles repository of Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur. Built as a living celebration of twenty years of community, leadership, culture, and camaraderie.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-[#F59E0B] font-medium font-heading">
              <Award className="w-4 h-4 text-[#F59E0B]" />
              <span>IIT KGP Platinum Jubilee 2026 · IoE Grant</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#F59E0B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F59E0B] transition-colors">
                  About MMM Hall
                </Link>
              </li>
              <li>
                <Link href="/history" className="hover:text-[#F59E0B] transition-colors">
                  History &amp; Milestones
                </Link>
              </li>
              <li>
                <Link href="/photo-essay" className="hover:text-[#F59E0B] transition-colors">
                  Photo Essay (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="/voices" className="hover:text-[#F59E0B] transition-colors">
                  Voices of Malaviya (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="/hall-of-honour" className="hover:text-[#F59E0B] transition-colors">
                  Hall of Honour (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="/mahamana" className="hover:text-[#F59E0B] transition-colors">
                  Mahamana&apos;s Legacy
                </Link>
              </li>
              <li>
                <Link href="/wardens-corner" className="hover:text-[#F59E0B] transition-colors">
                  Warden&apos;s Corner
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Contributions (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Archive Secretariat
            </h4>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur, West Bengal — 721302
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a
                  href="mailto:mmmhallchronicles@gmail.com"
                  className="hover:text-[#F59E0B] transition-colors hover:underline"
                >
                  mmmhallchronicles@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScmDOUhw4Cs9gvpb3ga1W8KCAqIVbvqjS504aGHrEh3RI4Efw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:text-[#FBBF24] hover:underline font-heading"
              >
                <span>Submit memory via Official Form</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; 2026 Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur. Built under the IoE Grant.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-[#F59E0B] transition-colors">
              Contact Us
            </Link>
            <span>·</span>
            <Link href="/contribute" className="hover:text-[#F59E0B] transition-colors">
              Contribute
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
