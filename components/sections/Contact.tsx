"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      location: formData.get("location"),
      service: formData.get("service"),
      requirementType: formData.get("requirementType"),
      startDate: formData.get("startDate"),
      frequency: formData.get("frequency"),
      additionalRequirements: formData.get("additionalRequirements"),
      contactMethod: formData.get("contactMethod"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your service request has been received. Our team will contact you shortly.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: result.message || "Unable to send your request. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Something went wrong while submitting. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-[#f8f9f7] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-12">

          {/* =====================================================
              LEFT SIDE - IMAGE & BRANDING (5 Cols)
          ====================================================== */}
          <div className="relative min-h-[400px] lg:col-span-5 lg:min-h-full">
            <Image
              src="/formimage.jpg"
              alt="Relyn home care service"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/90 via-[#064e3b]/40 to-transparent" />

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <span className="inline-block rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#064e3b]">
                Relyn Care
              </span>

              <h2 className="mt-4 font-[var(--font-syne)] text-3xl font-semibold leading-tight text-white md:text-4xl">
                Everything at home,
                <br />
                taken care of.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Trusted professionals providing reliable everyday support with
                care and attention you can count on.
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE - FORM (7 Cols)
          ====================================================== */}
          <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
            
            {/* Header */}
            <div className="mb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#e85d04]">
                Book a Service
              </p>
              <h3 className="font-[var(--font-syne)] text-2xl font-semibold text-[#064e3b] sm:text-3xl">
                How can we help?
              </h3>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                Fill out the details below so we can tailor the right support for your household.
              </p>
            </div>

            {/* Submission Status Alert */}
            {status.type && (
              <div
                className={`mb-6 flex items-start gap-3 rounded-xl p-4 text-sm ${
                  status.type === "success"
                    ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                ) : (
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                )}
                <p>{status.message}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* 1. Name & Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                  />
                </div>
              </div>

              {/* 2. Email & City/Location */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                    City / Location *
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    placeholder="e.g. Indiranagar, Bengaluru"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                  />
                </div>
              </div>

              {/* 3. Service Required & Requirement Type */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                  >
                    <option value="" disabled>Select service</option>
                    <option value="Housekeeping">Housekeeping</option>
                    <option value="Cooking / Meal Support">Cooking / Meal Support</option>
                    <option value="Elder Care">Elder Care</option>
                    <option value="Child Care">Child Care</option>
                    <option value="Laundry & Household Assistance">Laundry & Household Assistance</option>
                    <option value="Corporate / Workplace Support">Corporate / Workplace Support</option>
                    <option value="Driver / Errand Support">Driver / Errand Support</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="requirementType" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                    Type of Requirement
                  </label>
                  <select
                    id="requirementType"
                    name="requirementType"
                    defaultValue="Full-Time"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                  >
                    <option value="Full-Time">Full-Time (Live-in / 8-12 hrs)</option>
                    <option value="Part-Time">Part-Time (1-4 hrs)</option>
                    <option value="On-Demand / One-off">On-Demand / One-off</option>
                  </select>
                </div>
              </div>

              {/* 4. Preferred Start Date & Frequency/Duration */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="startDate" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                    Preferred Start Date
                  </label>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                  />
                </div>

                <div>
                  <label htmlFor="frequency" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                    Frequency / Duration
                  </label>
                  <input
                    id="frequency"
                    name="frequency"
                    type="text"
                    placeholder="e.g. Daily, 3 Days/week, 6 Months"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                  />
                </div>
              </div>

              {/* 5. Additional Requirements */}
              <div>
                <label htmlFor="additionalRequirements" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                  Additional Requirements
                </label>
                <textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  rows={3}
                  placeholder="Mention any specific preferences, language requirements, or special care instructions..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#064e3b] focus:ring-2 focus:ring-[#064e3b]/10"
                />
              </div>

              {/* 6. Preferred Contact Method */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                  Preferred Contact Method
                </label>
                <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Phone Call"
                      defaultChecked
                      className="accent-[#064e3b]"
                    />
                    Phone Call
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="WhatsApp"
                      className="accent-[#064e3b]"
                    />
                    WhatsApp
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Email"
                      className="accent-[#064e3b]"
                    />
                    Email
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#064e3b] px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#0f7a5c] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  "Submit Request →"
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Our care coordinators will respond within 24 hours.
              </p>

            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 text-center shadow-xs border border-gray-100">
            <div className="text-lg font-semibold text-[#064e3b]">
              Verified Staff
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Rigorous background and reference checks
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-xs border border-gray-100">
            <div className="text-lg font-semibold text-[#064e3b]">
              Tailored Matching
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Matched strictly to your family’s routine
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-xs border border-gray-100">
            <div className="text-lg font-semibold text-[#064e3b]">
              Continuous Support
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Dedicated replacement & manager assistance
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}