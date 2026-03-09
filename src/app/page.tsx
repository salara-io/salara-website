"use client";

import { useState, type FormEvent } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    console.log("Early access signup:", email);
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-salara-900 flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-salara-500 to-accent-500 flex items-center justify-center">
          <span className="text-white text-xl font-bold">S</span>
        </div>
        <span className="text-white text-3xl font-bold tracking-tight">
          SALARA
        </span>
      </div>

      {/* Tagline */}
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4 max-w-lg leading-tight">
        Coming Soon
      </h1>
      <p className="text-salara-300 text-lg sm:text-xl mb-10 max-w-md">
        Your AI-powered real estate assistant is almost here.
      </p>

      {/* Email form */}
      {submitted ? (
        <p className="text-accent-400 text-lg font-medium">
          Thanks! We&apos;ll let you know when we launch.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 px-4 py-3 rounded-lg bg-salara-800 border border-salara-600 text-white placeholder-salara-400 focus:outline-none focus:border-salara-400 focus:ring-1 focus:ring-salara-400 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition cursor-pointer whitespace-nowrap"
          >
            Notify me when we launch
          </button>
        </form>
      )}

      {/* Contact line */}
      <p className="text-salara-500 text-sm mt-16">
        Questions?{" "}
        <a
          href="mailto:team@salara.io"
          className="text-salara-400 hover:text-salara-300 underline transition"
        >
          team@salara.io
        </a>
      </p>
    </div>
  );
}
