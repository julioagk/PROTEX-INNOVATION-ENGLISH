import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRightIcon, BoltIcon } from '@heroicons/react/24/outline';
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
  const [featuredProduct, ...gridProducts] = collageProducts;

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

            {/* Right: Product Gallery */}
            <div className="relative h-full">
              <div className="relative rounded-[36px] border border-slate-200/70 bg-white/85 backdrop-blur-xl p-5 md:p-7 shadow-[0_26px_80px_rgba(15,23,42,0.14)]">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200/70 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Featured Catalog</p>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900">Top Picks</h3>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">Live pricing</span>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  {featuredProduct && (
                    <button
                      onClick={() => navigate(`/producto/${featuredProduct.id}`)}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(2,132,199,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(2,132,199,0.28)] text-left"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_60%)]" />
                      <div className="relative flex flex-col h-full">
                        <div className="flex items-center justify-between px-5 pt-5">
                          <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1">Featured</span>
                          <span className="text-xs font-semibold text-slate-500">Best seller</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center px-6 py-4">
                          <img
                            src={featuredProduct.image}
                            alt={featuredProduct.title}
                            loading="lazy"
                            className="w-full max-w-[220px] object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.04]"
                          />
                        </div>
                        <div className="border-t border-slate-200/70 px-5 py-4">
                          <div className="text-base md:text-lg font-bold text-slate-900 line-clamp-1">{featuredProduct.title}</div>
                          <div className="text-sm text-slate-600 line-clamp-2 mt-1">{featuredProduct.description || "Premium protection and certified performance."}</div>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">From</span>
                            <span className="text-lg font-black text-sky-600">US ${featuredProduct.price.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  )}

                  <div className="grid grid-rows-3 gap-4">
                    {gridProducts.slice(0, 3).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => navigate(`/producto/${item.id}`)}
                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-[0_12px_30px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(2,132,199,0.2)]"
                      >
                        <div className="h-16 w-16 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.06]"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-slate-900 line-clamp-1">{item.title}</div>
                          <div className="text-xs text-slate-500 line-clamp-1">{item.description || "Reliable protection."}</div>
                        </div>
                        <span className="text-xs font-semibold text-sky-600">US ${item.price.toFixed(2)}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 text-sm text-slate-500">
                  <span>Updated daily</span>
                  <button
                    onClick={() => navigate('/Catalogo')}
                    className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-sky-600 transition-colors"
                  >
                    View full catalog
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                      <ChevronRightIcon className="h-3 w-3" />
                    </span>
                  </button>
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
