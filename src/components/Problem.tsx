const statements = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Agents spend more time on admin than with clients",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
    ),
    text: "Institutional knowledge walks out the door every time an agent leaves",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    text: "The best agents deserve better tools than generic AI",
  },
];

export function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-salara-900 tracking-tight">
            Real estate is drowning in admin
          </h2>
          <p className="mt-4 text-lg text-salara-600 leading-relaxed">
            Your best agents didn&apos;t get into real estate to write follow-up
            emails and chase compliance paperwork. Yet that&apos;s where most of
            their day goes &mdash; and when they leave, all that knowledge
            walks out the door with them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statements.map((statement) => (
            <div
              key={statement.text}
              className="text-center p-8 rounded-2xl bg-salara-50 border border-salara-100"
            >
              <div className="w-12 h-12 bg-salara-100 rounded-xl flex items-center justify-center text-salara-600 mx-auto mb-5">
                {statement.icon}
              </div>
              <p className="text-base font-medium text-salara-800 leading-relaxed">
                {statement.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
