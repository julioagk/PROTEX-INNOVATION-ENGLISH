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
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Hero section with text and features */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        {/* Main heading */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-8 leading-tight text-gray-900">
            The best choice in <br />
            <span className="text-blue-600">
              electrical distribution
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
            With over 20 years of experience, we are your ally in finding the best electrical products with competitive prices and quality service.
          </p>
        </div>

        {/* Features as a list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex gap-6 group">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section - simple and clean */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-16 border-y border-gray-300 mb-24">
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-black text-blue-600 mb-2">20+</div>
            <p className="text-gray-700">Years of experience in the market</p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-black text-cyan-600 mb-2">50K+</div>
            <p className="text-gray-700">Satisfied customers trust us</p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-black text-teal-600 mb-2">10K+</div>
            <p className="text-gray-700">Products available in catalog</p>
          </div>
        </div>

        {/* CTA section - minimal and elegant */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <h3 className="text-4xl font-black mb-3 text-gray-900">Ready to get started?</h3>
            <p className="text-gray-700 text-lg">Explore thousands of electrical products at the best prices.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/Catalogo"
              className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              <span>Explore Catalog</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/Contacto"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900/20 text-gray-900 font-bold rounded-lg hover:border-gray-900/40 hover:bg-gray-900/5 transition-all duration-300">
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}