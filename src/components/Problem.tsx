export function Problem() {
  const stats = [
    { value: "62%", label: "of an agent's time is spent on admin, not selling" },
    { value: "34%", label: "average annual turnover rate in NZ/AU real estate" },
    { value: "$45K", label: "estimated cost to replace and retrain one agent" },
  ];

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
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center p-8 rounded-2xl bg-salara-50 border border-salara-100"
            >
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-salara-500 to-accent-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-salara-600 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
