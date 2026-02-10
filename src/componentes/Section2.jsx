import React from 'react';
import { Link } from 'react-router-dom';
import {
  BoltIcon,
  WrenchIcon,
  RectangleStackIcon,
  SparklesIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const categories = [
  {
    id: 'interruptores-1p',
    label: 'Circuit Breakers 1P',
    icon: BoltIcon,
    colorClasses: {
      bg: 'bg-amber-600',
      text: 'text-amber-600',
      groupHoverBg: 'group-hover:bg-amber-600',
      groupHoverText: 'group-hover:text-white'
    },
    description: 'Single pole protection devices'
  },
  {
    id: 'interruptores-2p',
    label: 'Circuit Breakers 2P',
    icon: BoltIcon,
    colorClasses: {
      bg: 'bg-slate-600',
      text: 'text-slate-600',
      groupHoverBg: 'group-hover:bg-slate-600',
      groupHoverText: 'group-hover:text-white'
    },
    description: 'Dual pole control devices'
  },
  {
    id: 'interruptores-3p',
    label: 'Circuit Breakers 3P',
    icon: BoltIcon,
    colorClasses: {
      bg: 'bg-sky-600',
      text: 'text-sky-600',
      groupHoverBg: 'group-hover:bg-sky-600',
      groupHoverText: 'group-hover:text-white'
    },
    description: 'Industrial three pole switches'
  }
];

export default function Section2() {
  return (
    <section className="relative w-full min-h-screen px-4 py-14 md:py-20 bg-[#f6f7fb] font-['Plus_Jakarta_Sans'] overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(2,132,199,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0)_40%,rgba(2,132,199,0.04)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1.4fr] gap-10 lg:gap-16 items-center">
        {/* Left content */}
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
            Catalogo destacado
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-slate-900 font-['Fraunces']">
            A curated view of our
            <span className="block text-sky-600">essential categories</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
            Productos certificados y listos para entrega. Elige una categoria y entra al catalogo completo con precios y fichas tecnicas.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <SparklesIcon className="h-5 w-5 text-sky-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">Certified IEC</p>
              <p className="text-xs text-slate-500">Compliance-first inventory.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <RectangleStackIcon className="h-5 w-5 text-teal-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">Ready Stock</p>
              <p className="text-xs text-slate-500">Fast dispatch on core lines.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <WrenchIcon className="h-5 w-5 text-slate-700" />
              <p className="mt-3 text-sm font-semibold text-slate-900">Expert Help</p>
              <p className="text-xs text-slate-500">Selection and technical support.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/Catalogo"
              className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Ver catalogo completo
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">03 categorias clave</span>
          </div>
        </div>

        {/* Category mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isPrimary = index === 0;
            return (
              <Link
                key={category.id}
                to={`/Catalogo?category=${category.id}`}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 md:p-7 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(2,132,199,0.22)] ${isPrimary ? 'sm:col-span-2' : ''}`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className={`absolute inset-0 ${category.colorClasses.bg} opacity-10`} />
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40 blur-2xl" />
                </div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ${category.colorClasses.groupHoverBg} transition-colors duration-300`}>
                    <Icon className={`h-6 w-6 ${category.colorClasses.text} ${category.colorClasses.groupHoverText} transition-colors duration-300`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-300">
                      {category.label}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Browse now</span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-transform duration-300 group-hover:translate-x-1">
                    View
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
