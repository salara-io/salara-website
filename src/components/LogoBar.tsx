export function LogoBar() {
  return (
    <section className="py-12 bg-salara-50/50 border-y border-salara-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-salara-400 uppercase tracking-wider mb-8">
          Built to work with the tools you already use
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-salara-500">
            <div className="w-8 h-8 rounded-md bg-salara-200/50 flex items-center justify-center">
              <span className="text-xs font-bold text-salara-400">V</span>
            </div>
            <span className="text-sm font-semibold tracking-wide">
              VaultRE
            </span>
          </div>
          <div className="flex items-center gap-2 text-salara-400">
            <div className="w-8 h-8 rounded-md bg-salara-100 flex items-center justify-center">
              <span className="text-xs font-bold text-salara-300">R</span>
            </div>
            <span className="text-sm font-medium tracking-wide">
              REX CRM &mdash; Coming Soon
            </span>
          </div>
        </div>
        <p className="mt-6 text-sm text-salara-400 text-center">
          More integrations coming
        </p>
      </div>
    </section>
  );
}
