import React from 'react';
import { CheckCircleIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Section1b() {
  return (
    <section className="relative w-full bg-white py-8 md:py-10 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-sky-600/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-teal-700/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Por Qué Elegirnos */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 md:mb-10 tracking-tight text-gray-900 text-center">
            Why <span className="text-sky-600">Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Card 1 */}
            <div className="group flex flex-col items-center text-center p-10 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:border-sky-500/30 hover:shadow-xl transition-all duration-300">
              <div className="mb-6 p-5 rounded-xl bg-sky-600/10 group-hover:bg-sky-600/20 transition-colors">
                <CheckCircleIcon className="w-10 h-10 md:w-12 md:h-12 text-sky-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Certified & Compliant</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                All products meet IEC international standards and local regulations. We exclusively distribute from audited and certified manufacturers with verified credentials.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col items-center text-center p-10 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:border-slate-700/30 hover:shadow-xl transition-all duration-300">
              <div className="mb-6 p-5 rounded-xl bg-slate-700/10 group-hover:bg-slate-700/20 transition-colors">
                <ShieldCheckIcon className="w-10 h-10 md:w-12 md:h-12 text-slate-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Engineering Support</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Our engineering team provides technical specifications, product selection guidance, and troubleshooting for commercial and industrial projects at any scale.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col items-center text-center p-10 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:border-teal-600/30 hover:shadow-xl transition-all duration-300">
              <div className="mb-6 p-5 rounded-xl bg-teal-600/10 group-hover:bg-teal-600/20 transition-colors">
                <SparklesIcon className="w-10 h-10 md:w-12 md:h-12 text-teal-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Direct Distribution</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                As direct distributors for major manufacturers, we deliver competitive pricing without compromising on quality, warranty, or post-sale support.
              </p>
            </div>
          </div>
        </div>

        {/* Product Categories Highlight */}
        <div className="bg-gradient-to-r from-slate-700/5 via-sky-600/5 to-teal-700/5 rounded-3xl border border-gray-100 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">What We Offer</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-lg mt-1">•</span>
                  <span className="text-gray-700"><strong>Circuit Breakers</strong> - Expert selection of 1P, 2P, and 3P for all electrical needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-lg mt-1">•</span>
                  <span className="text-gray-700"><strong>Load Centers</strong> - Professional solutions for residential and industrial installations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-lg mt-1">•</span>
                  <span className="text-gray-700"><strong>Electrical Protection</strong> - Complete safety devices and system components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-600 font-bold text-lg mt-1">•</span>
                  <span className="text-gray-700"><strong>Premium Quality</strong> - Only certified products from leading manufacturers</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Expert Consultation</strong> to ensure you select the right products for your project.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Warranty & Support</strong> with manufacturer backing and technical assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
