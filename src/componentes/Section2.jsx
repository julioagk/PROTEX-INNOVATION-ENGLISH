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
    <section className="relative w-full min-h-screen px-4 py-14 md:py-20 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.28),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.7)_40%,rgba(2,132,199,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1.15fr] gap-10 lg:gap-16 items-start">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
            Catalogo home
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white font-['Fraunces']">
            Energia segura.
            <span className="block text-sky-300">Categorias que lideran.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-200 max-w-xl leading-relaxed">
            Diseno industrial, certificaciones reales y stock listo. Todo para instalaciones residenciales, comerciales e industriales.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <SparklesIcon className="h-5 w-5 text-sky-300" />
              <p className="mt-3 text-sm font-semibold text-white">IEC comprobado</p>
              <p className="text-xs text-slate-300">Calidad auditada.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <RectangleStackIcon className="h-5 w-5 text-teal-300" />
              <p className="mt-3 text-sm font-semibold text-white">Entrega rapida</p>
              <p className="text-xs text-slate-300">Lineas con stock.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <WrenchIcon className="h-5 w-5 text-slate-200" />
              <p className="mt-3 text-sm font-semibold text-white">Soporte tecnico</p>
              <p className="text-xs text-slate-300">Asesoria experta.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/Catalogo"
              className="inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Ver catalogo completo
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">03 categorias clave</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isPrimary = index === 1;
            return (
              <Link
                key={category.id}
                to={`/Catalogo?category=${category.id}`}
                className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(14,165,233,0.25)] ${isPrimary ? 'sm:row-span-2' : ''}`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className={`absolute inset-0 ${category.colorClasses.bg} opacity-20`} />
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
                </div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ${category.colorClasses.groupHoverBg} transition-colors duration-300`}>
                    <Icon className={`h-6 w-6 ${category.colorClasses.text} ${category.colorClasses.groupHoverText} transition-colors duration-300`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Categoria</p>
                    <h3 className="mt-2 text-lg md:text-xl font-bold text-white group-hover:text-sky-200 transition-colors duration-300">
                      {category.label}
                    </h3>
                    <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Ver linea</span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition-transform duration-300 group-hover:translate-x-1">
                    Entrar
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
