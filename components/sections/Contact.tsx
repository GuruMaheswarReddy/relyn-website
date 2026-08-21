"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [activeTab, setActiveTab] = useState<"service" | "general">("service");
  const [submitted, setSubmitted] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: "service" | "general") => {
    e.preventDefault();
    if (type === "service") {
      setConfirmMessage(
        "Thank you — we've received your service request and will call you shortly to understand your requirement in more detail."
      );
    } else {
      setConfirmMessage(
        "Thank you for reaching out — someone from Relyn will get back to you within one business day."
      );
    }
    setSubmitted(true);
  };

  return (
    <section className="bg-[#EEF1E8] py-24" id="contact">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="label mb-3">Get in touch</div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-serif leading-[1.15] text-[#1F4234] mb-4">
            Let's understand what you need.
          </h2>
          <p className="text-[15px] text-[#3E5E4F] max-w-[38ch] mb-7 leading-relaxed">
            Whether it's a specific service or a general question, tell us a little about your household and we'll take it from there.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3.5">
              <svg className="w-[18px] h-[18px] text-[#A8843C] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 13l4 4L19 7"/>
              </svg>
              <p className="text-[13.5px] text-[#3E5E4F]">
                No obligation — we'll call to understand your requirement first.
              </p>
            </div>

            <div className="flex items-start gap-3.5">
              <svg className="w-[18px] h-[18px] text-[#A8843C] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 13l4 4L19 7"/>
              </svg>
              <p className="text-[13.5px] text-[#3E5E4F]">
                Currently serving JP Nagar and Banashankari, Bengaluru.
              </p>
            </div>

            <div className="flex items-start gap-3.5">
              <svg className="w-[18px] h-[18px] text-[#A8843C] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 13l4 4L19 7"/>
              </svg>
              <p className="text-[13.5px] text-[#3E5E4F]">
                We respond to every enquiry within one business day.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-[10px] p-8 sm:p-10 shadow-[0_30px_60px_-30px_rgba(18,46,35,0.25)]"
        >
          {/* Tabs */}
          {!submitted && (
            <div className="flex gap-2 mb-7 border-b border-[rgba(31,66,52,0.14)]" role="tablist">
              <button
                type="button"
                onClick={() => setActiveTab("service")}
                className={`text-[14px] font-semibold pb-3.5 mr-6 border-b-2 transition-colors cursor-pointer ${
                  activeTab === "service"
                    ? "text-[#1F4234] border-[#A8843C]"
                    : "text-[#3E5E4F] border-transparent"
                }`}
              >
                Request a service
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("general")}
                className={`text-[14px] font-semibold pb-3.5 mr-6 border-b-2 transition-colors cursor-pointer ${
                  activeTab === "general"
                    ? "text-[#1F4234] border-[#A8843C]"
                    : "text-[#3E5E4F] border-transparent"
                }`}
              >
                General enquiry
              </button>
            </div>
          )}

          {/* Form Content */}
          {!submitted ? (
            activeTab === "service" ? (
              <form onSubmit={(e) => handleSubmit(e, "service")} className="space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="s-name" className="text-[12.5px] font-semibold text-[#1F4234]">Name</label>
                    <input
                      id="s-name"
                      required
                      placeholder="Your full name"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="s-phone" className="text-[12.5px] font-semibold text-[#1F4234]">Phone number</label>
                    <input
                      id="s-phone"
                      type="tel"
                      required
                      placeholder="+91"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="s-email" className="text-[12.5px] font-semibold text-[#1F4234]">Email</label>
                    <input
                      id="s-email"
                      type="email"
                      placeholder="you@email.com"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="s-city" className="text-[12.5px] font-semibold text-[#1F4234]">City / Location</label>
                    <input
                      id="s-city"
                      required
                      placeholder="e.g. JP Nagar, Bengaluru"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="s-service" className="text-[12.5px] font-semibold text-[#1F4234]">Service required</label>
                    <select
                      id="s-service"
                      required
                      defaultValue=""
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    >
                      <option value="" disabled>Select a service</option>
                      <option>Housekeeping</option>
                      <option>Cooking / Meal Support</option>
                      <option>Elder Care</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="s-date" className="text-[12.5px] font-semibold text-[#1F4234]">Preferred start date</label>
                    <input
                      id="s-date"
                      type="date"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="s-type" className="text-[12.5px] font-semibold text-[#1F4234]">Type of requirement</label>
                    <input
                      id="s-type"
                      placeholder="e.g. daily, live-in, part-time"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="s-freq" className="text-[12.5px] font-semibold text-[#1F4234]">Frequency / duration</label>
                    <input
                      id="s-freq"
                      placeholder="e.g. 6 days/week, 3 months"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="s-notes" className="text-[12.5px] font-semibold text-[#1F4234]">Additional requirements</label>
                  <textarea
                    id="s-notes"
                    rows={3}
                    placeholder="Anything specific we should know"
                    className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none resize-y min-h-[88px]"
                  />
                </div>

                <div className="flex flex-col gap-2 pt-1 pb-2">
                  <label className="text-[12.5px] font-semibold text-[#1F4234]">Preferred contact method</label>
                  <div className="flex flex-wrap gap-4 text-[13.3px] text-[#3E5E4F]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="s-contact" defaultChecked className="accent-[#A8843C]" /> Phone call
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="s-contact" className="accent-[#A8843C]" /> WhatsApp
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="s-contact" className="accent-[#A8843C]" /> Email
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-forest w-full justify-center">
                  Submit request
                </button>
              </form>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, "general")} className="space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="g-name" className="text-[12.5px] font-semibold text-[#1F4234]">Name</label>
                    <input
                      id="g-name"
                      required
                      placeholder="Your full name"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="g-phone" className="text-[12.5px] font-semibold text-[#1F4234]">Phone number</label>
                    <input
                      id="g-phone"
                      type="tel"
                      required
                      placeholder="+91"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="g-email" className="text-[12.5px] font-semibold text-[#1F4234]">Email</label>
                    <input
                      id="g-email"
                      type="email"
                      placeholder="you@email.com"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="g-city" className="text-[12.5px] font-semibold text-[#1F4234]">City / Location</label>
                    <input
                      id="g-city"
                      placeholder="e.g. Banashankari, Bengaluru"
                      className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="g-subject" className="text-[12.5px] font-semibold text-[#1F4234]">Subject / requirement</label>
                  <input
                    id="g-subject"
                    placeholder="What's this about?"
                    className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="g-message" className="text-[12.5px] font-semibold text-[#1F4234]">Message</label>
                  <textarea
                    id="g-message"
                    rows={4}
                    placeholder="Tell us more"
                    className="font-sans text-[14px] p-[12px_14px] border border-[rgba(31,66,52,0.14)] rounded-[4px] bg-[#FAF6EC] text-[#1F4234] focus:border-[#A8843C] focus:outline-none resize-y min-h-[88px]"
                  />
                </div>

                <button type="submit" className="btn btn-forest w-full justify-center">
                  Send message
                </button>
              </form>
            )
          ) : (
            <div className="text-center py-10">
              <svg className="w-[46px] h-[46px] text-[#A8843C] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 13l4 4L19 7"/>
              </svg>
              <h3 className="font-serif text-[21px] text-[#1F4234] mb-2.5">We've got it from here.</h3>
              <p className="text-[#3E5E4F] text-[14.5px] max-w-[38ch] mx-auto leading-relaxed">
                {confirmMessage}
              </p>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;