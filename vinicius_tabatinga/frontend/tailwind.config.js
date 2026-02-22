/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: 'var(--cor-azul-escuro)',
                    mid: 'var(--cor-azul-intermediario)',
                    light: 'var(--cor-fundo-claro)',
                },
                medical: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                premium: {
                    accent: '#38bdf8',
                    accentLight: '#7dd3fc',
                }
            },
            fontFamily: {
                sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
                heading: ['DM Serif Display', 'Georgia', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in-up-delay-1': 'fadeInUp 0.6s ease-out 0.1s both',
                'fade-in-up-delay-2': 'fadeInUp 0.6s ease-out 0.2s both',
                'fade-in-up-delay-3': 'fadeInUp 0.6s ease-out 0.3s both',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2s ease-in-out infinite',
                'slow-zoom': 'slowZoom 35s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
                slowZoom: {
                    '0%': { transform: 'scale(1.02)' },
                    '100%': { transform: 'scale(1.08)' },
                },
            },
            boxShadow: {
                'glow': '0 0 40px -10px rgba(3, 105, 161, 0.3)',
                'glow-accent': '0 0 30px -5px rgba(56, 189, 248, 0.4)',
                'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.08)',
                'soft-lg': '0 10px 40px -10px rgba(15, 23, 42, 0.12)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
