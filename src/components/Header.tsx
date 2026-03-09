"use client";

import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-salara-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-salara-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-salara-900">
              SALARA
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-salara-600 hover:text-salara-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-salara-600 hover:text-salara-900 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#for-agencies"
              className="text-sm font-medium text-salara-600 hover:text-salara-900 transition-colors"
            >
              For Agencies
            </a>
            <a
              href="#book-demo"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-salara-600 text-white text-sm font-semibold rounded-lg hover:bg-salara-700 transition-colors"
            >
              Book a Demo
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-salara-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-salara-100 px-4 py-4 space-y-3">
          <a href="#features" className="block text-sm font-medium text-salara-600 py-2" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" className="block text-sm font-medium text-salara-600 py-2" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#for-agencies" className="block text-sm font-medium text-salara-600 py-2" onClick={() => setMenuOpen(false)}>
            For Agencies
          </a>
          <a
            href="#book-demo"
            className="block text-center px-5 py-2.5 bg-salara-600 text-white text-sm font-semibold rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Book a Demo
          </a>
        </div>
      )}
    </header>
  );
}
