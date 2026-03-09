export function LogoBar() {
  return (
    <section className="py-12 bg-salara-50/50 border-y border-salara-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-salara-400 uppercase tracking-wider mb-8">
          Built to work with the tools you already use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {["VaultRE", "Xero", "DocuSign", "Microsoft 365", "Google Workspace"].map(
            (name) => (
              <div
                key={name}
                className="flex items-center gap-2 text-salara-300 hover:text-salara-500 transition-colors"
              >
                <div className="w-8 h-8 rounded-md bg-salara-200/50 flex items-center justify-center">
                  <span className="text-xs font-bold text-salara-400">
                    {name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold tracking-wide">
                  {name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
