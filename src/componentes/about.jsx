export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white pt-32 pb-20 px-4 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(100,116,139,0.3), transparent)'}} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(20,184,166,0.3), transparent)'}} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
            About Us
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Quiénes Somos
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa líder en soluciones eléctricas con más de 15 años de experiencia, 
            comprometida con la calidad y la excelencia en cada producto.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left: Features */}
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700">
                    <span className="text-xl">⚡</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Innovación Constante</h3>
                  <p className="text-gray-400">Investigamos y desarrollamos soluciones que se adaptan a los desafíos modernos.</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700">
                    <span className="text-xl">🎯</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
                  <p className="text-gray-400">Todos nuestros productos cumplen con estándares internacionales rigurosos.</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700">
                    <span className="text-xl">🤝</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Servicio Personalizado</h3>
                  <p className="text-gray-400">Nuestro equipo está disponible 24/7 para apoyarte en tus necesidades.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl border border-white/20 bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-gray-400 text-lg">Años de Experiencia</p>
            </div>

            <div className="backdrop-blur-xl border border-white/20 bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <p className="text-gray-400 text-lg">Clientes Satisfechos</p>
            </div>

            <div className="backdrop-blur-xl border border-white/20 bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-gray-400 text-lg">Productos Disponibles</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-20 border-t border-white/10">
          <h3 className="text-3xl font-bold mb-6">¿Listo para empezar?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo completo y descubre por qué miles de clientes confían en nosotros.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95">
            Explorar Catálogo
          </button>
        </div>
      </div>
    </section>
  );
}
  