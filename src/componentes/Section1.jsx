import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-b from-amber-200/20 to-transparent rounded-full blur-3xl animate-pulse" />
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

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight h-[100px] sm:h-[120px] md:h-[160px] lg:h-[180px] flex items-center">
                <span className="block max-w-[16ch] text-amber-500">
                  {product.title}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed font-light">
                Specialists in circuit breakers, load centers and electrical protection for residential, commercial and industrial projects. Fast delivery, expert support and premium manufacturers.
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

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-gray-300">
                <div className="space-y-1">
                  <p className="text-3xl font-black text-slate-700">10K+</p>
                  <p className="text-sm text-gray-600 font-medium">Satisfied clients</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-black text-teal-600">500+</p>
                  <p className="text-sm text-gray-600 font-medium">SKUs in stock</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-black text-amber-500">24/7</p>
                  <p className="text-sm text-gray-600 font-medium">Technical support</p>
                </div>
              </div>
            </div>

            {/* Right: Product Grid */}
            <div className="relative h-full">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                {collageProducts.map((item, idx) => (
                  <div
                    key={item.id}
                    className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-amber-500 cursor-pointer"
                    onClick={() => navigate(`/producto/${item.id}`)}
                  >
                    {/* Imagen */}
                    <div className="relative w-full h-40 md:h-48 bg-gray-100 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Precio */}
                    <div className="absolute top-2 right-2 bg-amber-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                      US ${item.price.toFixed(2)}
                    </div>

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-semibold text-sm line-clamp-2">{item.title}</p>
                    </div>
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
      `}</style>
    </section>
  );
}
