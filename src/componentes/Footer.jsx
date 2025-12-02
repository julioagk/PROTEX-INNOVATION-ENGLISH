import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../pics/protexlogo.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo y descripción */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Protex" className="w-12 h-12 object-contain" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Protex Innovation</h2>
              </div>
            <p className="text-sm text-gray-700 text-center sm:text-left max-w-xs">
              Soluciones industriales de alta calidad para tu negocio.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block">
                  → Inicio
                </a>
              </li>
              <li>
                <a href="/Catalogo" className="text-gray-700 hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block">
                  → Catálogo
                </a>
              </li>
              <li>
                <a href="/Contacto" className="text-gray-700 hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block">
                  → Contacto
                </a>
              </li>
              <li>
                <a href="/Empresa" className="text-gray-700 hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block">
                  → Empresa
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Contacto</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contact@yourstore.com" 
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition-colors duration-300 group"
              >
                <FaEnvelope className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Protex@gmail.com</span>
              </a>
              <a 
                href="tel:+YOUR_PHONE_NUMBER" 
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition-colors duration-300 group">
              >
                <FaPhone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+YourPhoneNumber</span>
              </a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/YOUR_INSTAGRAM" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-200 p-3 rounded-full hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 hover:scale-110 group"
              >
                <FaInstagram className="h-6 w-6 text-gray-900 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://facebook.com/YOUR_PAGE" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-200 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
              >
                <FaFacebook className="h-6 w-6 text-gray-900 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="mt-12 mb-6 border-t border-gray-800"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Protex. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/politica-privacidad" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
              Política de Privacidad
            </a>
            <span className="text-gray-700">•</span>
            <a href="/terminos-condiciones" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
