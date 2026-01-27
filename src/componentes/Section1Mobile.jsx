import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from './productosData';

export default function Section1Mobile() {
  const navigate = useNavigate();
  // Seleccionamos los primeros 5 productos para el carrusel
  const featuredProducts = products.slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  return (
    <section className="relative w-full h-[85vh] flex flex-col items-center justify-between bg-gray-50 pt-10 pb-8 px-6 overflow-hidden">
      
      {/* Texto Principal - Arriba */}
      <div className="flex flex-col items-center text-center space-y-2 z-10">
        <h2 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
          New Collection
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Protex Innovation
        </h1>
        <p className="text-lg text-gray-600 max-w-[280px]">
          Professional electrical protection.
        </p>
        
        {/* Enlace de texto simple */}
        <button 
           onClick={() => navigate('/Catalogo')}
          className="mt-2 text-sky-600 font-medium hover:text-sky-700 flex items-center gap-1"
        >
          Shop now <span aria-hidden="true">&rarr;</span>
        </button>
      </div>

      {/* Carrusel de Imágenes */}
      <div className="flex-1 w-full flex flex-col items-center justify-center relative my-4">
        <div className="relative w-full h-full flex items-center justify-center">
            {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute w-full max-w-[380px] h-auto aspect-square rounded-3xl bg-white border-2 border-gray-200 shadow-2xl overflow-hidden flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <img 
                    src={product.image} 
                    alt={product.title}
                     loading="lazy"
                     className="w-full h-4/5 object-contain p-6"
                  />
                  <div className="w-full bg-gray-50 border-t border-gray-200 px-6 py-3 text-center">
                    <p className="text-2xl font-bold text-gray-900">
                      US ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
            ))}
        </div>

        {/* Indicadores (Puntos) */}
        <div className="flex gap-2 mt-6 z-10">
            {featuredProducts.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-300 w-2'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </div>

      {/* Botón Principal - Abajo */}
      <div className="w-full z-10">
        <button 
           onClick={() => navigate('/Catalogo')}
          className="w-full py-4 bg-black text-white text-lg font-semibold rounded-full shadow-lg active:scale-[0.98] transition-transform"
        >
          View Catalog
        </button>
      </div>

    </section>
  );
}
