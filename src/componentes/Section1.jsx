import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { products } from './productosData';

const heroProducts = [
  { id: 1, title: 'Premium Circuit Breakers', badge: 'Certified quality', color: 'from-blue-600 to-sky-500' },
  { id: 2, title: 'Professional Load Centers', badge: 'Expert solutions', color: 'from-cyan-600 to-teal-500' },
  { id: 3, title: 'Safety Protection Systems', badge: 'Trusted reliability', color: 'from-sky-600 to-blue-700' },
];

export default function Section1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const collageProducts = products.slice(0, 6);

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
        <div className={`absolute top-0 -right-40 w-96 h-96 bg-gradient-to-bl from-slate-700/20 to-transparent rounded-full blur-3xl transition-all duration-1000 opacity-50`} />
        <div className={`absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-700/20 to-transparent rounded-full blur-3xl transition-all duration-1000 opacity-50`} />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-b from-sky-200/20 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 w-full min-h-[calc(100vh-64px)] flex items-center justify-center px-4 pt-4 pb-12 md:pb-20 lg:pb-28">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 transition-all duration-700 opacity-100">
              <div className="space-y-2">
                <span className="inline-block px-4 py-2 rounded-full bg-slate-700 text-white text-xs font-bold uppercase tracking-widest shadow-lg backdrop-blur-md border border-slate-600/20">
                  ⚡  Electrical solutions you trust
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight flex items-center mb-6">
                <span className="block max-w-[16ch] text-sky-600">
                  {product.title}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed font-light">
                Experts in circuit breakers and electrical protection solutions. We deliver premium quality products for residential, commercial, and industrial applications with expert support.
              </p>


              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button 
                  onClick={() => navigate('/Catalogo')}
                  className="group px-6 py-3 sm:px-8 sm:py-4 bg-slate-700 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-slate-600 text-sm sm:text-base">
                  <span className="relative z-10">Shop Now</span>
                </button>
                <Link 
                  to="/Catalogo"
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-slate-700 text-slate-700 font-bold rounded-xl backdrop-blur-md hover:bg-slate-700/5 hover:border-slate-600 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base inline-block">
                  Explore Catalog
                </Link>
              </div>
            </div>

            {/* Right: Product Grid */}
            <div className="relative h-full">
              <div className="relative rounded-3xl border border-sky-100 bg-white/80 backdrop-blur p-4 md:p-6 shadow-[0_20px_60px_rgba(2,132,199,0.12)]">
                <div className="absolute inset-x-0 top-0 h-2 rounded-t-3xl bg-gradient-to-r from-sky-600 via-teal-500 to-emerald-400" />
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">Featured Catalog</p>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900">Top Picks for You</h3>
                  </div>
                  <span className="hidden md:inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 border border-sky-100">Live Pricing</span>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                {collageProducts.map((item, idx) => (
                  <div
                    key={item.id}
                    className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_12px_35px_rgba(15,23,42,0.10)] hover:shadow-[0_20px_60px_rgba(2,132,199,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/70 cursor-pointer"
                    onClick={() => navigate(`/producto/${item.id}`)}
                  >
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-600 via-teal-500 to-emerald-400" />
                    {/* Imagen */}
                    <div className="relative w-full h-40 md:h-48 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-contain p-5 group-hover:scale-[1.08] transition-transform duration-300"
                      />
                    </div>

                    {/* Precio */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-sky-600 to-teal-500 text-white px-3.5 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      US ${item.price.toFixed(2)}
                    </div>

                    {/* Chip */}
                    <div className="absolute top-3 left-3 bg-white/90 text-slate-700 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-slate-200 shadow-sm">
                      Top Pick
                    </div>

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="w-full">
                        <p className="text-white font-semibold text-sm line-clamp-2">{item.title}</p>
                        <div className="mt-2 text-xs text-white/80">View details</div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
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
      `}</style>
    </section>
  );
}
