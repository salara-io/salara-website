export function AgencyBenefits() {
  return (
    <section id="agencies" className="py-20 sm:py-28 bg-salara-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
            For Agency Owners
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for agency owners too.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-salara-800 rounded-2xl p-8 sm:p-12 border border-salara-700">
            <p className="text-lg text-salara-200 leading-relaxed mb-6">
              SALARA gives your agents their own AI assistant &mdash; and gives
              you the oversight layer to run a compliant, high-performing team.
            </p>
            <p className="text-lg text-salara-200 leading-relaxed mb-6">
              The Agency Dashboard is available as a paid add-on, giving you
              compliance alerts, manager notifications, and team analytics
              across your whole office.
            </p>
            <p className="text-lg text-salara-200 leading-relaxed">
              Principals get operational oversight and compliance alerts &mdash;
              not access to individual agent conversations.
            </p>
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:team@salara.io"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-colors text-base"
            >
              Talk to us about your agency
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
