const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                richblack: '#0f172a',
                primary: '#0EA5E9', // azul cielo moderno
                secondary: '#1E293B', // gris azulado profundo
                accent: '#38BDF8', // acento azul claro (sin naranja)
                text: '#0F172A', // texto principal
                'text-light': '#475569', // texto secundario
                'bg-light': '#F8FAFC', // fondo claro
                'border-color': '#E2E8F0', // borde suave
            }
        },
        
    },
    plugins: [
        require('daisyui'),
        plugin(function({ addUtilities}) {
            addUtilities({
                '.text-shadow': {
                    textShadow: '2px 2px 4px rgba(0,0, 0, 0.4,)',
                }
            })
        })
    ]
 }
