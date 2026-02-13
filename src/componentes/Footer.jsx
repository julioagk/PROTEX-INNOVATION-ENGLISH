import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../pics/protexlogo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 md:py-16">
        {/* Grid principal */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 lg:gap-12">
          
          {/* Logo y descripción - Order 1 on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start space-y-4 order-1">
            <div className="flex items-center space-x-2 md:space-x-3">
                <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
              </div>
            <p className="hidden md:block text-sm text-gray-500 text-left max-w-xs leading-relaxed">
              High quality industrial solutions for your business. Trusted by professionals.
            </p>
          </div>

          {/* Navegación - Order 2 on mobile */}
          <div className="flex flex-col items-start order-2">
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-900 mb-3 md:mb-4">Navigation</h3>
            <ul className="space-y-2 md:space-y-3 text-left">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors text-xs md:text-sm font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="/Catalogo" className="text-gray-600 hover:text-blue-600 transition-colors text-xs md:text-sm font-medium">
                  Products
                </a>
              </li>
              <li>
                <a href="/Contacto" className="text-gray-600 hover:text-blue-600 transition-colors text-xs md:text-sm font-medium">
                  Contact
                </a>
              </li>
              <li>
                <a href="/Empresa" className="text-gray-600 hover:text-blue-600 transition-colors text-xs md:text-sm font-medium">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto - Order 4 on mobile (Bottom Right) */}
          <div className="flex flex-col items-start order-4 md:order-3">
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-900 mb-3 md:mb-4">Contact</h3>
            <div className="space-y-2 md:space-y-3 flex flex-col items-start">
              <a 
                href="mailto:info_sales@protexinnovations.com" 
                className="flex items-center space-x-2 md:space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <FaEnvelope className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm font-medium">info_sales@protexinnovations.com</span>
              </a>
              <a 
                href="tel:+17138057630" 
                className="flex items-center space-x-2 md:space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <FaPhone className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm font-medium">+1 (713)-805-7630</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="mt-12 mb-8 border-t border-gray-200"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/politica-privacidad" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a href="/terminos-condiciones" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
