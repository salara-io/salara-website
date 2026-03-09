const steps = [
  {
    step: "01",
    title: "Connect your CRM",
    description:
      "Link SALARA to your VaultRE account. We pull in contacts, listings, and pipeline data automatically — setup takes minutes, not days.",
  },
  {
    step: "02",
    title: "Each agent gets their own AI",
    description:
      "Every team member gets a personal AI assistant that starts learning their style, tone, and preferences from day one.",
  },
  {
    step: "03",
    title: "SALARA learns and improves",
    description:
      "The more your agents use SALARA, the smarter it gets. It learns communication style, client preferences, and what works for each market.",
  },
  {
    step: "04",
    title: "The agency keeps the knowledge",
    description:
      "All insights, client intelligence, and learned patterns are owned by the agency. When an agent moves on, the knowledge stays.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-salara-900 tracking-tight">
            Up and running in an afternoon
          </h2>
          <p className="mt-4 text-lg text-salara-600">
            No six-month rollout. No IT project. Connect, onboard, and start
            seeing results in your first week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] w-[calc(100%_-_32px)] h-px bg-salara-200 z-0" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-salara-500 to-salara-600 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-salara-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-salara-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
