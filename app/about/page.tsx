import React from "react";
import {
  Sofa,
  Music,
  BookOpen,
  Laptop,
  Trophy,
  UtensilsCrossed,
  Calendar,
  Users,
  Building,
  Award,
} from "lucide-react";
import StatCard from "@/components/StatCard";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  const facilities = [
    {
      icon: <Sofa className="w-6 h-6 text-[#F59E0B]" />,
      name: "Multiple Common Rooms",
      desc: "Spacious community lounges equipped with television, table tennis, and seating for recreation, meetings, and hall bonding.",
    },
    {
      icon: <Music className="w-6 h-6 text-[#F59E0B]" />,
      name: "Music Room",
      desc: "A dedicated acoustic space for vocalists, instrumentalists, and hall bands to practice and nurture artistic talent.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#F59E0B]" />,
      name: "Library & Reading Room",
      desc: "A quiet, well-stocked sanctuary supporting academic excellence, literature, periodicals, and collaborative study groups.",
    },
    {
      icon: <Laptop className="w-6 h-6 text-[#F59E0B]" />,
      name: "Technology Room",
      desc: "Equipped for technical innovations, robotics, coding marathons, team hackathons, and high-speed network access.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#F59E0B]" />,
      name: "Sports Grounds & Courts",
      desc: "Home to spirited inter-hall tournaments, featuring badminton arenas, volleyball courts, and recreational green grounds.",
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-[#F59E0B]" />,
      name: "Dining Hall",
      desc: "The vibrant heart of daily hall life, serving over 2,000 residents daily and hosting celebratory hall dinners and banquets.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <PageHeader
        title="About MMM Hall"
        currentPage="About MMM Hall"
      />

      {/* Section 1: Introduction (Pure White #FFFFFF) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-[#1F2937] text-base leading-relaxed">
          <div className="text-center pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Foundation &amp; Heritage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
              A Two-Decade Legacy of Excellence
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <p>
            Pandit Madan Mohan Malaviya Hall of Residence was established on <strong>27th February 2005</strong> at the historic campus of the Indian Institute of Technology Kharagpur. Conceived to meet the expanding residential requirements of India&apos;s premier technical institute, the hall was named in perpetual honour of Mahamana Pandit Madan Mohan Malaviya — visionary nationalist leader, pioneer of modern higher education, and founder of Banaras Hindu University.
          </p>
          <p>
            Today, MMM Hall stands with immense pride as the largest hall of residence in IIT Kharagpur, accommodating over <strong>2,000 undergraduate and postgraduate scholars</strong>. Spanning extensive architectural blocks surrounded by green quadrangles, the hall provides a comprehensive ecosystem supporting rigorous academic pursuits, vibrant cultural expressions, competitive sports, and technological innovation.
          </p>
          <p>
            Beyond its expansive physical infrastructure, MMM Hall is renowned for its unmatched camaraderie, warmth, and collective spirit. Here, students from every corner of India and international backgrounds live, collaborate, and form lifelong friendships. From passionate discussions in the common rooms during late hours to enthusiastic participation in institute-level championships, life at MMM Hall instills resilience, mutual respect, and leadership.
          </p>
          <p>
            As the hall crosses its twentieth anniversary coinciding with IIT Kharagpur&apos;s Platinum Jubilee celebrations, it continues to evolve. Modernized amenities, dynamic student-led bodies, and an active alumni network ensure that every boarder experiences an inspiring environment rooted in Mahamana&apos;s timeless ideals of enlightenment and character.
          </p>
        </div>
      </section>

      {/* Section 2: Facilities (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              State-of-the-Art Living
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
              Hall Facilities &amp; Amenities
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Comprehensive residential, academic, and extracurricular infrastructure
            </p>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-7 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] flex items-center justify-center mb-4 border border-[#E5E7EB]">
                  {fac.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#0F172A] mb-2">
                  {fac.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Community & Culture (Pure White #FFFFFF) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-[#1F2937] text-base leading-relaxed">
          <div className="text-center pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              The Malaviyan Spirit
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
              Community &amp; Culture
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
          </div>

          <p>
            What distinguishes MMM Hall is not merely its impressive capacity, but the depth of belonging experienced by every boarder. The scale of the hall creates a miniature society within IIT Kharagpur — a rich cross-section of cultures, languages, academic disciplines, and creative passions.
          </p>
          <p>
            The hall&apos;s cultural calendar is marked by intense teamwork and creativity: the legendary preparation for the General Championship (GC), elaborate artistic lighting during Diwali Illumination, vibrant Hall Day celebrations, and spirited intra-hall leagues. These milestones shape indelible memories and forge bonds that outlast campus years.
          </p>
          <p>
            Wherever Malaviyans travel across the globe — whether leading technological frontiers, advancing public governance, building enterprises, or conducting groundbreaking research — they carry with them the humility, tenacity, and collective pride forged within these walls.
          </p>
        </div>
      </section>

      {/* Section 4: By the Numbers (Soft Off-White #F8F9FA) */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
              Key Facts
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
              By the Numbers
            </h2>
            <div className="w-16 h-[3px] bg-[#F59E0B] mx-auto mt-3 rounded-full" />
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
              icon={<Award className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
