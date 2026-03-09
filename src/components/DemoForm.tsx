"use client";

import { useState, type FormEvent } from "react";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      agency: (form.elements.namedItem("agency") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      agents: (form.elements.namedItem("agents") as HTMLSelectElement).value,
    };

    console.log("Demo request submitted:", data);

    // TODO: Replace with actual serverless endpoint that emails team@salara.io
    try {
      await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Endpoint not wired up yet — silently continue
    }

    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section id="book-demo" className="py-20 sm:py-28 bg-salara-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-salara-900 tracking-tight">
              Book a Demo
            </h2>
            <p className="mt-4 text-lg text-salara-600">
              See how SALARA works for your agency. We&apos;ll walk you through
              the platform and show you what it looks like with your real data.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 border border-salara-100 text-center">
              <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-accent-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-salara-900 mb-2">
                Thanks &mdash; we&apos;ll be in touch within one business day.
              </h3>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-salara-100 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-salara-700 mb-1.5"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-salara-200 text-salara-900 placeholder-salara-400 focus:outline-none focus:ring-2 focus:ring-salara-500 focus:border-transparent text-sm"
                    placeholder="Gareth Robins"
                  />
                </div>

                <div>
                  <label
                    htmlFor="agency"
                    className="block text-sm font-medium text-salara-700 mb-1.5"
                  >
                    Agency name
                  </label>
                  <input
                    type="text"
                    id="agency"
                    name="agency"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-salara-200 text-salara-900 placeholder-salara-400 focus:outline-none focus:ring-2 focus:ring-salara-500 focus:border-transparent text-sm"
                    placeholder="Robins Realty"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-salara-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-salara-200 text-salara-900 placeholder-salara-400 focus:outline-none focus:ring-2 focus:ring-salara-500 focus:border-transparent text-sm"
                    placeholder="gareth@agency.co.nz"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-salara-700 mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-salara-200 text-salara-900 placeholder-salara-400 focus:outline-none focus:ring-2 focus:ring-salara-500 focus:border-transparent text-sm"
                    placeholder="+64 21 123 4567"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="agents"
                  className="block text-sm font-medium text-salara-700 mb-1.5"
                >
                  How many agents?
                </label>
                <select
                  id="agents"
                  name="agents"
                  className="w-full px-4 py-3 rounded-lg border border-salara-200 text-salara-900 focus:outline-none focus:ring-2 focus:ring-salara-500 focus:border-transparent text-sm"
                >
                  <option value="">Select...</option>
                  <option value="just-me">Just me</option>
                  <option value="2-5">2 &ndash; 5 agents</option>
                  <option value="6-15">6 &ndash; 15 agents</option>
                  <option value="16-30">16 &ndash; 30 agents</option>
                  <option value="31-50">31 &ndash; 50 agents</option>
                  <option value="50+">50+ agents</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full px-8 py-4 bg-salara-600 text-white font-semibold rounded-xl hover:bg-salara-700 transition-colors text-base shadow-lg shadow-salara-600/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Book My Demo"}
              </button>

              <p className="mt-4 text-xs text-salara-400 text-center">
                No commitment required. We&apos;ll show you SALARA with your
                real workflows.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
