import React from 'react';
import { Link } from 'react-router-dom';
import {
  BoltIcon,
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

      <div className="relative z-10 max-w-6xl mx-auto">
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
