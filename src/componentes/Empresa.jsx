export default function Empresa() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 pt-[15px] md:pt-[15px] pb-20 px-4 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(71,85,105,0.18), transparent)'}} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(15,118,110,0.16), transparent)'}} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left: Features */}
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border border-gray-300 bg-white/80 hover:bg-white transition-all duration-300 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-700">
                    <span className="text-xl">⚡</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Constant Innovation</h3>
                  <p className="text-gray-700">We research and develop solutions that adapt to modern challenges.</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border border-gray-300 bg-white/80 hover:bg-white transition-all duration-300 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-sky-600">
                    <span className="text-xl">🎯</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Guaranteed Quality</h3>
                  <p className="text-gray-700">All our products meet rigorous international standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl border border-gray-300 bg-white/80 rounded-2xl p-8 hover:bg-white transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">About Protex Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                We are a specialized distributor of electrical protection equipment and circuit breakers. Our commitment is to provide high-quality products with reliable technical support for residential, commercial, and industrial projects.
              </p>
            </div>

            <div className="backdrop-blur-xl border border-gray-300 bg-white/80 rounded-2xl p-8 hover:bg-white transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                Quality, reliability, and customer satisfaction are at the core of everything we do. We work with trusted manufacturers to ensure the best products for your projects.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-20 border-t border-gray-300">
          <h3 className="text-3xl font-bold mb-6">Ready to get started?</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore our complete catalog and discover why thousands of customers trust us.
          </p>
          <button className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95">
            Explore Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
