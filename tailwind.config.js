/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#DC2626', // Red-600
                    foreground: '#FFFFFF',
                },
                background: {
                    DEFAULT: '#FFFFFF',
                    dark: '#09090B', // Zinc-950
                },
                surface: {
                    DEFAULT: '#F4F4F5', // Zinc-100
                    dark: '#18181B', // Zinc-900
                },
                text: {
                    DEFAULT: '#09090B',
                    dark: '#FAFAFA',
                }
            }
        },
    },
    plugins: [],
}
