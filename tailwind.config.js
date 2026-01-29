const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./src/**/*/.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                richblack: '#010101',
                primary: '#2563EB', /* Azul profesional moderno */
                secondary: '#7C3AED', /* Púrpura acento */
                accent: '#F97316', /* Naranja energético */
                text: '#1F2937', /* Gris oscuro para texto */
                'text-light': '#6B7280', /* Gris claro para texto secundario */
                'bg-light': '#F9FAFB', /* Fondo muy claro */
                'border-color': '#E5E7EB', /* Bordes sutiles */
            }
        },
        
    },
    plugins: [
        require('daisyui'),
        plugin(function({ addUtilities}) {
            addUtilities({
                '.text-shadow': {
                    textShadow: '2px 2px 4px rgba(0,0, 0, 0.4,)',
                },
                '.gradient-primary': {
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                },
                '.gradient-accent': {
                    background: 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)',
                }
            })
        })
    ]
 }
