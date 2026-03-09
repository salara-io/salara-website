export function Testimonial() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-salara-50 to-salara-100 rounded-3xl p-10 sm:p-16 border border-salara-100">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-warm-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <blockquote className="text-xl sm:text-2xl font-medium text-salara-800 leading-relaxed">
            &ldquo;I built SALARA because I watched great agents waste hours
            every day on admin and struggle to bring a P.A. on board based on
            cost. Real estate deserves better tools. This is it.&rdquo;
          </blockquote>

          <div className="mt-8">
            <p className="font-semibold text-salara-900">SALARA Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
