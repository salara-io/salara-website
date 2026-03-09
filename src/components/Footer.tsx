export function Footer() {
  return (
    <footer className="bg-salara-900 text-salara-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-salara-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                SALARA
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Smart Adaptive Learning Assistant &mdash; Real Estate Advisor.
              Purpose-built AI for real estate agencies across New Zealand
              and Australia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#agencies" className="hover:text-white transition-colors">
                  For Agencies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#book-demo" className="hover:text-white transition-colors">
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:team@salara.io"
                  className="hover:text-white transition-colors"
                >
                  team@salara.io
                </a>
              </li>
              <li>Auckland, New Zealand</li>
              <li>Sydney, Australia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-salara-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-salara-500">
            &copy; {new Date().getFullYear()} SALARA. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-salara-500">
            <a href="#" className="hover:text-salara-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-salara-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
