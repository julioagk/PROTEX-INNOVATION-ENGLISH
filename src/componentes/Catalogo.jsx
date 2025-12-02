import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products as localProducts } from "./productosData";
import EMPTY_PNG from "../emptyImage";
import ProductSkeleton from "./ProductSkeleton";

const categories = [
  { value: "all", label: "All" },
  { value: "centro-carga", label: "Load Centers" },
  { value: "interruptores-1p", label: "Circuit Breakers 1 Pole" },
  { value: "interruptores-2p", label: "Circuit Breakers 2 Poles" },
  { value: "interruptores-3p", label: "Circuit Breakers 3 Poles" },
  { value: "conductores", label: "Electrical Wires" },
  { value: "iluminacion", label: "Lighting" },
  { value: "herramientas", label: "Tools" },
  { value: "accesorios", label: "Accessories" },
];

export default function Catalogo() {
  const [searchParams, setSearchParams] = useSearchParams();
  // Template default: render only local sample products to avoid fetching any remote data
  const [products, setProducts] = useState(localProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [loading, setLoading] = useState(false);

  // Actualizar categoría cuando cambia la URL
  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory) {
      setCategory(urlCategory);
    }
  }, [searchParams]);

  // Filtro por búsqueda y categoría
  const filteredProducts = products.filter((product) => {
    const nombre = product.title || product.nombre || "";
    const descripcion = product.description || product.descripcion || "";
    const categoria = product.category || "all";

    return (
      (category === "all" || categoria === category) &&
      (nombre.toLowerCase().includes(search.toLowerCase()) ||
        descripcion.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchParams({ category: newCategory });
  };

  return (
    <section className="relative flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 pt-24 pb-16 px-4 overflow-hidden">
      {/* Background gradient orbs animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Patrón de grid sutil - DESHABILITADO */}

      {/* Barra de búsqueda y filtros - mejorada */}
      <div className="relative z-10 w-full max-w-7xl mb-12">
        {/* Card contenedor */}
        <div className="backdrop-blur-xl border border-gray-300 bg-white/80 rounded-2xl p-6 hover:bg-white transition-all duration-300 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Búsqueda - ocupa 2 columnas */}
            <div className="md:col-span-2">
              <div className="relative group">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-slate-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="w-full pl-12 pr-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm placeholder:text-gray-500 group-hover:bg-white group-hover:border-gray-400"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Categoría */}
            <div className="group">
              <select
                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer backdrop-blur-sm group-hover:bg-white group-hover:border-gray-400"
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value} className="bg-white text-gray-900">
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Botón de búsqueda avanzada */}
            <div className="flex items-end">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span className="hidden sm:inline">Filter</span>
              </button>
            </div>
          </div>

          {/* Chips de filtros rápidos */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs text-gray-600 font-medium">Quick categories:</span>
            {categories.slice(1, 5).map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  category === cat.value
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300'
                }`}>
              
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-600">
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                Loading...
              </span>
            ) : (
              <span>{filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}</span>
            )}
          </div>
          {filteredProducts.length > 0 && (
            <div className="text-xs text-gray-600">
              Showing <span className="text-blue-600 font-semibold">{filteredProducts.length}</span> of <span className="text-blue-600 font-semibold">{products.length}</span> products
            </div>
          )}
        </div>
      </div>

      {/* Grid de productos */}
      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Skeletons mientras carga */}
          {loading && (
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={`skeleton-${i}`} />
              ))}
            </>
          )}

          {/* Mensaje de vacío (solo cuando no hay carga) */}
          {!loading && filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-xl text-gray-700">No products found</p>
              <p className="text-sm text-gray-600 mt-2">Try changing the filters</p>
            </div>
          )}
          {!loading && filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              {/* Imagen del producto */}
              <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={product.image || product.imagen || EMPTY_PNG}
                  alt={product.title || product.nombre}
                  loading="lazy"
                  className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = EMPTY_PNG;
                    e.target.style.objectFit = 'contain';
                    e.target.style.padding = '2rem';
                  }}
                />
                {/* Badge de precio */}
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1.5 font-bold text-sm rounded-lg shadow-lg">
                  ${product.price || product.precio}
                </div>
              </div>

              {/* Contenido del producto */}
              <div className="flex flex-col flex-1 p-5 gap-3 bg-white">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {product.title || product.nombre}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 flex-1">
                  {product.description || product.descripcion}
                </p>
                
                {/* Categoría badge */}
                {product.category && product.category !== 'all' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 w-fit">
                    {categories.find(c => c.value === product.category)?.label || product.category}
                  </span>
                )}

                {/* Botón */}
                <Link
                  to={`/producto/${product.id}`}
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
