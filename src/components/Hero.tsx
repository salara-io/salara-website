export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-salara-50 via-white to-salara-100 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-salara-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-salara-100 text-salara-700 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Built for NZ &amp; Australian Real Estate
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-salara-900 leading-[1.1]">
            Every agent deserves
            <br />
            <span className="bg-gradient-to-r from-salara-500 to-accent-500 bg-clip-text text-transparent">
              their own AI assistant
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-salara-600 leading-relaxed max-w-2xl mx-auto">
            SALARA learns how you work, knows NZ and AU compliance, and gets
            smarter every day you use it.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-salara-600 text-white font-semibold rounded-xl hover:bg-salara-700 transition-all shadow-lg shadow-salara-600/20 text-base"
            >
              Book a Demo
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#agencies"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-salara-700 font-semibold rounded-xl border border-salara-200 hover:border-salara-300 hover:bg-salara-50 transition-all text-base"
            >
              For Agencies
            </a>
          </div>

          {/* Social proof line */}
          <p className="mt-12 text-sm text-salara-400">
            Integrates with VaultRE &bull; Designed for REINZ &amp; REA compliance
          </p>
        </div>
      </div>
    </section>
  );
}
