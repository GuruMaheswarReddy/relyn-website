"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
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
        alert("✅ Inquiry sent successfully!");
        form.reset();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-[#f8fafc] py-24 text-slate-800 font-sans border-t border-slate-200">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.2em] font-bold text-[#ff6600]">
            Start a project
          </p>

          <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl text-[#0038a8]">
            Have an idea?
            <br />
            Let&apos;s build something
            <span className="text-[#ff6600]"> great together.</span>
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">
            Tell us about your project and our team will get back to you to
            discuss how we can help grow your business.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Your Name *</label>

              <input
                name="name"
                required
                placeholder="Enter your name"
                className="w-full border-b border-slate-300 bg-transparent px-0 py-4 outline-none transition placeholder:text-slate-400 focus:border-[#0038a8]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Email Address *</label>

              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full border-b border-slate-300 bg-transparent px-0 py-4 outline-none transition placeholder:text-slate-400 focus:border-[#0038a8]"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                className="w-full border-b border-slate-300 bg-transparent px-0 py-4 outline-none transition placeholder:text-slate-400 focus:border-[#0038a8]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Company</label>

              <input
                name="company"
                placeholder="Company name"
                className="w-full border-b border-slate-300 bg-transparent px-0 py-4 outline-none transition placeholder:text-slate-400 focus:border-[#0038a8]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              What service are you looking for? *
            </label>

            <select
              name="service"
              required
              defaultValue=""
              className="w-full border-b border-slate-300 bg-transparent py-4 text-slate-800 outline-none focus:border-[#0038a8]"
            >
              <option value="" disabled className="bg-white text-slate-500">
                Select a service
              </option>

              <option className="bg-white text-slate-800">Website Development</option>
              <option className="bg-white text-slate-800">UI/UX Design</option>
              <option className="bg-white text-slate-800">Shopify Development</option>
              <option className="bg-white text-slate-800">E-commerce Development</option>
              <option className="bg-white text-slate-800">SEO</option>
              <option className="bg-white text-slate-800">Digital Marketing</option>
              <option className="bg-white text-slate-800">Branding</option>
              <option className="bg-white text-slate-800">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Tell us about your project *
            </label>

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Project requirements, goals, timeline..."
              className="w-full resize-none border-b border-slate-300 bg-transparent py-4 outline-none transition placeholder:text-slate-400 focus:border-[#0038a8]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 rounded-full bg-[#ff6600] px-8 py-4 font-semibold text-white shadow-md transition hover:bg-[#0038a8] hover:shadow-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Inquiry →"}
          </button>
        </form>
      </div>
    </section>
  );
}