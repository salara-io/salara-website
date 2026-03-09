export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-salara-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-salara-900 tracking-tight">
            Simple pricing.
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-salara-100 shadow-lg shadow-salara-100/50 text-center">
            <div className="mb-6">
              <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-salara-500 to-accent-500 bg-clip-text text-transparent">
                $99
              </span>
              <span className="text-lg text-salara-500 font-medium ml-1">
                AUD
              </span>
            </div>
            <p className="text-salara-600 font-medium text-lg mb-6">
              per agent per month
            </p>
            <p className="text-salara-600 text-sm leading-relaxed mb-8">
              Your agency can pay, or you can pay yourself &mdash; same product
              either way. The payer determines who owns the data.
            </p>
            <a
              href="#book-demo"
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-salara-600 text-white font-semibold rounded-xl hover:bg-salara-700 transition-colors text-base shadow-lg shadow-salara-600/20"
            >
              Book a Demo
            </a>
            <p className="mt-6 text-xs text-salara-400">
              Agency Dashboard available as a paid add-on.{" "}
              <a href="mailto:team@salara.io" className="underline hover:text-salara-600 transition-colors">
                Talk to us about your agency.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
