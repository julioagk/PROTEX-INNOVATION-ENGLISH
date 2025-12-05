export default function Empresa() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 pt-[15px] md:pt-[15px] pb-20 px-4 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent)'}} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent)'}} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left: Features */}
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border border-gray-300 bg-white/80 hover:bg-white transition-all duration-300 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                    <span className="text-xl">⚡</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Innovación Constante</h3>
                  <p className="text-gray-700">Investigamos y desarrollamos soluciones que se adaptan a los desafíos modernos.</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border border-gray-300 bg-white/80 hover:bg-white transition-all duration-300 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600">
                    <span className="text-xl">🎯</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
                  <p className="text-gray-700">Todos nuestros productos cumplen con estándares internacionales rigurosos.</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border border-gray-300 bg-white/80 hover:bg-white transition-all duration-300 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600">
                    <span className="text-xl">🤝</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Servicio Personalizado</h3>
                  <p className="text-gray-700">Nuestro equipo está disponible 24/7 para apoyarte en tus necesidades.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl border border-gray-300 bg-white/80 rounded-2xl p-8 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-gray-700 text-lg">Años de Experiencia</p>
            </div>

            <div className="backdrop-blur-xl border border-gray-300 bg-white/80 rounded-2xl p-8 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <p className="text-gray-700 text-lg">Clientes Satisfechos</p>
            </div>

            <div className="backdrop-blur-xl border border-gray-300 bg-white/80 rounded-2xl p-8 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="text-5xl font-black bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-gray-700 text-lg">Productos Disponibles</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-20 border-t border-gray-300">
          <h3 className="text-3xl font-bold mb-6">¿Listo para empezar?</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo completo y descubre por qué miles de clientes confían en nosotros.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95">
            Explorar Catálogo
          </button>
        </div>
      </div>
    </section>
  );
}
