import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Manteniendo las variables CSS originales
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Añadiendo la nueva paleta de colores
        earth: {
          100: '#f5f0e6',
          700: '#5d4433',
          800: '#433021',
          900: '#2a1f18',
        },
        clay: {
          100: '#e3d5c8',
          600: '#9c786c',
        },
        cream: {
          10: '#faf7f2',
          100: '#fff9f0',
          200: '#f5e6d8',
        },
        sun: {
          300: '#f9d371',
          400: '#f7b948',
        },
        fire: {
          400: '#e67a54',
          500: '#d95b46',
        },
        // Maya Palette
        maya: {
          teal: "#00C9A7",
          amber: "#FFC93C",
          coral: "#FF6767",
          purple: "#845EC2",
          blue: "#4D8BF0",
          green: "#2BDA8E",
          pink: "#FF7A90",
          cyan: "#00D2FC"
        }
      },
      // Opcional: Añadir estilos de sombra personalizados
      boxShadow: {
        'community': '0 4px 20px -2px rgba(93, 68, 51, 0.15)',
      },
      // Opcional: Añadir animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};

export default config;