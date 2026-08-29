"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Malaviyan Archive Inquiry] ${subject}`);
    const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:mmmhallchronicles@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 800);
  };

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <PageHeader
        title="Contact Us"
        currentPage="Contact"
      />

      {/* 2-Column Contact Layout (Pure White #FFFFFF) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Details (5 cols) */}
            <div className="lg:col-span-5 bg-[#F8F9FA] rounded-xl p-8 border border-[#E5E7EB] shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
                  Direct Reach
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
                  Get in Touch
                </h2>
                <div className="w-12 h-[3px] bg-[#F59E0B] mt-2 rounded-full" />
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white text-[#0F172A] border border-[#E5E7EB]">
                    <Mail className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#0F172A]">
                      Email Address
                    </h4>
                    <a
                      href="mailto:mmmhallchronicles@gmail.com"
                      className="text-xs sm:text-sm text-[#0F172A] hover:underline font-semibold"
                    >
                      mmmhallchronicles@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white text-[#0F172A] border border-[#E5E7EB]">
                    <MapPin className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#0F172A]">
                      Hall Address
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Pandit Madan Mohan Malaviya Hall of Residence,<br />
                      IIT Kharagpur, West Bengal — 721302, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white text-[#0F172A] border border-[#E5E7EB]">
                    <Clock className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#0F172A]">
                      Response Time
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748B]">
                      Our archive student committee responds within 2–3 working days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-xl p-8 border border-[#E5E7EB] shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] font-heading">
                  Send an Inquiry
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Have questions about the archive, feedback, or alumni suggestions? Send us a note.
                </p>
                <div className="w-12 h-[3px] bg-[#F59E0B] mt-2 rounded-full" />
              </div>

              {submitted ? (
                <div className="p-6 bg-white rounded-lg border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading text-lg font-bold text-[#0F172A]">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    Opening your default email client to send your message to <strong>mmmhallchronicles@gmail.com</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold text-[#1F2937] mb-1 font-heading">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1F2937] mb-1 font-heading">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@alumni.iitkgp.ac.in"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1F2937] mb-1 font-heading">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Photo Contribution Query / Batch 2011"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1F2937] mb-1 font-heading">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message or inquiry here..."
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-heading font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-[11px] text-[#64748B] italic text-center pt-2">
                    &ldquo;This form currently sends to mmmhallchronicles@gmail.com. For urgent matters, please email directly.&rdquo;
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
