/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#030508',
          900: '#05070B',
          850: '#090D14',
          800: '#0D121D',
          750: '#121826',
          700: '#182032',
          600: '#232D42',
        },
        neon: {
          green: '#00FF66',
          'green-dim': '#00cc52',
          'green-glow': 'rgba(0, 255, 102, 0.4)',
          red: '#FF0055',
          'red-dim': '#d90048',
          'red-glow': 'rgba(255, 0, 85, 0.4)',
          cyan: '#00F0FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 25px rgba(0, 255, 102, 0.35)',
        'neon-green-sm': '0 0 10px rgba(0, 255, 102, 0.25)',
        'neon-red': '0 0 25px rgba(255, 0, 85, 0.35)',
        'neon-red-sm': '0 0 10px rgba(255, 0, 85, 0.25)',
        'cyber-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'cyber-glow': '0 0 50px -10px rgba(0, 255, 102, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}
