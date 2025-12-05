import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from './productosData';

const heroProducts = [
  { id: 1, title: 'Industrial Breakers', badge: 'Reliable protection', color: 'from-blue-600 to-sky-500' },
  { id: 2, title: 'Load Centers', badge: 'Fast installation', color: 'from-cyan-600 to-teal-500' },
  { id: 3, title: 'Control Solutions', badge: 'Trusted brands', color: 'from-amber-500 to-orange-500' },
];

export default function Section1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const collageProducts = products.slice(0, 24);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const product = heroProducts[currentSlide];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 -right-40 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl transition-all duration-1000 opacity-50`} />
        <div className={`absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-transparent rounded-full blur-3xl transition-all duration-1000 opacity-50`} />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-b from-amber-200/20 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 w-full min-h-[calc(100vh-64px)] flex items-center justify-center px-4 pt-4 pb-12 md:pb-20 lg:pb-28">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 transition-all duration-700 opacity-100">
              <div className="space-y-2">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg backdrop-blur-md border border-blue-500/20">
                  ⚡  Electrical solutions you trust
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight h-[100px] sm:h-[120px] md:h-[160px] lg:h-[180px] flex items-center">
                <span className="block max-w-[16ch] bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  {product.title}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed font-light">
                Specialists in circuit breakers, load centers and electrical protection for residential, commercial and industrial projects. Fast delivery, expert support and premium manufacturers.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden text-sm sm:text-base">
                  <span className="relative z-10">Shop Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-900/30 text-gray-900 font-bold rounded-xl backdrop-blur-md hover:bg-gray-900/5 hover:border-gray-900/50 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base">
                  Explore Catalog
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-gray-300">
                <div className="space-y-1">
                  <p className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">10K+</p>
                  <p className="text-sm text-gray-600 font-medium">Satisfied clients</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">500+</p>
                  <p className="text-sm text-gray-600 font-medium">SKUs in stock</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">24/7</p>
                  <p className="text-sm text-gray-600 font-medium">Technical support</p>
                </div>
              </div>
            </div>

            {/* Right: Product Collage */}
            <div className="relative h-96 md:h-full transition-all duration-700 opacity-100">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', height: '100%', gridAutoFlow: 'dense' }}>
                {collageProducts.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/producto/${item.id}`)}
                    className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg border-2 border-transparent transition-all duration-150`}
                    style={{
                      animation: `float 4s ease-in-out infinite`,
                      animationDelay: idx * 0.1 + 's',
                      gridColumn: idx === 0 || idx === 5 || idx === 11 || idx === 16 ? 'span 2' : 'span 1',
                      gridRow: idx === 0 || idx === 5 || idx === 11 || idx === 16 ? 'span 2' : 'span 1',
                    }}
                  >
                    {/* Imagen del producto */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Borde neon en hover */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-all duration-100 pointer-events-none" style={{borderColor: '#00d9ff', boxShadow: '0_0_20px_rgba(0,217,255,0.9), inset_0_0_15px_rgba(0,217,255,0.2)'}} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>



      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
      `}</style>
    </section>
  );
}
