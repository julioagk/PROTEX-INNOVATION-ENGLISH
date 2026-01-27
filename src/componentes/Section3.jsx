import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TruckIcon, 
  CreditCardIcon, 
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: TruckIcon,
    title: 'Nationwide Shipping',
    description: 'Fast and secure delivery. Free shipping on your first purchase.',
  },
  {    icon: SparklesIcon,
    title: 'Competitive Prices',
    description: 'Best prices without compromising quality.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Full Warranty',
    description: 'Manufacturer warranty on all products.',
  }
];

export default function Section3() {
  return (
    <section className="relative w-full bg-white text-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-700/10 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Hero section with text and features */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Main heading */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-6 md:mb-8 leading-tight text-gray-900">
            The best choice in <br />
            <span className="text-sky-600">
              electrical distribution
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto md:mx-0">
            We specialize in quality electrical protection equipment from trusted manufacturers. Our mission is to provide reliable solutions for your electrical installations with expert support and fair pricing.
          </p>
        </div>

        {/* Features as a list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 group">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Values section */}
        <div className="mb-20 md:mb-24">
          <div className="bg-gradient-to-r from-slate-700/5 to-sky-600/5 rounded-3xl p-10 md:p-16 border border-gray-100 shadow-sm">
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-center">
              Protecting your electrical installations
            </h3>
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              We are committed to providing quality electrical protection products that you can trust. Your safety is our priority, every single day.
            </p>
          </div>
        </div>

        {/* CTA section - minimal and elegant */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 md:p-12 border border-gray-100">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">Ready to get started?</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">Browse our catalog of circuit breakers, load centers, and electrical protection equipment designed for residential, commercial, and industrial applications.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/Catalogo"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
            >
              <span>Explore Catalog</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/Contacto"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-900 font-bold rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}