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
  {
    icon: CreditCardIcon,
    title: 'Secure Payment Options',
    description: 'Multiple payment methods available. 100% safe.',
  },
  {
    icon: SparklesIcon,
    title: 'Competitive Prices',
    description: 'Best prices without compromising quality.',
  },
  {
    icon: ClockIcon,
    title: '24/7 Support',
    description: 'Available support every day of the week.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Full Warranty',
    description: 'Manufacturer warranty on all products.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Original Products',
    description: 'Only certified and trusted brands.',
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Main heading */}
        <div className="mb-12 md:mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-4 md:mb-8 leading-tight text-gray-900">
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
        <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-8 md:pb-0 mb-16 md:mb-24 -mx-6 px-6 md:mx-0 md:px-0">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-auto snap-center flex gap-4 md:gap-6 group p-4 rounded-xl bg-white border border-gray-100 md:border-transparent hover:bg-gray-50 transition-colors shadow-sm md:shadow-none">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Values section */}
        <div className="py-12 md:py-16 mb-16 md:mb-24">
          <div className="bg-gradient-to-r from-slate-700/5 to-sky-600/5 rounded-2xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
              Protecting your electrical installations
            </h3>
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              We are committed to providing quality electrical protection products that you can trust. Your safety is our priority, every single day.
            </p>
          </div>
        </div>

        {/* CTA section - minimal and elegant */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left">
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-3 text-gray-900">Ready to get started?</h3>
            <p className="text-gray-600 text-base md:text-lg">Browse our catalog of circuit breakers, load centers, and electrical protection equipment designed for residential, commercial, and industrial applications.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/Catalogo"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              <span>Explore Catalog</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/Contacto"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-900 font-bold rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}