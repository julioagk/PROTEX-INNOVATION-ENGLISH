import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BoltIcon, 
  WrenchIcon, 
  LightBulbIcon,
  CubeIcon,
  RectangleStackIcon,
  SparklesIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const categories = [
  {
    id: 'centro-carga',
    label: 'Load Centers',
    icon: CubeIcon,
    color: 'slate-700',
    description: 'Electrical distribution centers'
  },
  {
    id: 'interruptores-1p',
    label: 'Circuit Breakers 1P',
    icon: BoltIcon,
    color: 'teal-600',
    description: 'Single pole thermal magnetic switches'
  },
  {
    id: 'interruptores-2p',
    label: 'Circuit Breakers 2P',
    icon: BoltIcon,
    color: 'slate-600',
    description: 'Dual pole control devices'
  },
  {
    id: 'interruptores-3p',
    label: 'Circuit Breakers 3P',
    icon: BoltIcon,
    color: 'amber-600',
    description: 'Industrial three pole switches'
  },
  {
    id: 'conductores',
    label: 'Electrical Wires',
    icon: RectangleStackIcon,
    color: 'slate-700',
    description: 'Quality cables and conductors'
  },
  {
    id: 'iluminacion',
    label: 'Lighting',
    icon: LightBulbIcon,
    color: 'teal-600',
    description: 'Lamps and lighting systems'
  },
  {
    id: 'herramientas',
    label: 'Tools',
    icon: WrenchIcon,
    color: 'slate-600',
    description: 'Professional and precision tools'
  },
  {
    id: 'accesorios',
    label: 'Accessories',
    icon: SparklesIcon,
    color: 'amber-600',
    description: 'Electrical accessories and components'
  }
];

export default function Section2() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-4">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-gray-900">
            Our <span className="text-blue-600">Categories</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our departments and find exactly what you need for your electrical projects
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/Catalogo?category=${category.id}`}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-xl border border-gray-300 bg-white/80 hover:bg-white transition-all duration-300 hover:scale-105 hover:border-gray-400 shadow-lg"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-${category.color}`} />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-xl bg-${category.color} p-3 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-all duration-300">
                    {category.label}
                  </h3>
                  <p className="text-gray-700 text-sm mb-6 flex-grow">
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <span className="font-semibold">View Products</span>
                    <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-${category.color} blur-2xl -z-10`} />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/Catalogo"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>View Full Catalog</span>
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
