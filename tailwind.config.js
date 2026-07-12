/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#03050f',
                surface: '#080d1a',
                panel: '#0c1220',
                cyan: {
                    400: '#00d4ff',
                    500: '#00b8e6',
                    900: 'rgba(0, 212, 255, 0.1)',
                },
                blue: {
                    500: '#3a7bd5',
                },
                purple: {
                    500: '#7b5ea7',
                },
                amber: {
                    500: '#ff6b35',
                    900: 'rgba(255, 107, 53, 0.1)'
                },
                red: {
                    500: '#ff3355',
                },
                muted: '#7a8599',
                glass: {
                    DEFAULT: 'rgba(8, 13, 26, 0.75)',
                    border: 'rgba(0, 212, 255, 0.18)',
                    hover: 'rgba(0, 212, 255, 0.35)',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                display: ['Rajdhani', 'sans-serif'],
                mono: ['Share Tech Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'glass-gradient': 'linear-gradient(145deg, rgba(8, 13, 26, 0.85) 0%, rgba(12, 18, 32, 0.6) 100%)',
            },
            animation: {
                'glow-pulse': 'glow-pulse 2s infinite',
                'float-y': 'float-y 4s ease-in-out infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 8px #00d4ff' },
                    '50%': { boxShadow: '0 0 20px #00d4ff, 0 0 40px rgba(0, 212, 255, 0.3)' },
                },
                'float-y': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                }
            }
        },
    },
    plugins: [],
}
