/** @type {import('tailwindcss').Config} */
export default {
  // Files Tailwind scans to generate the final CSS.
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Corporate-tech dark palette: rich slate backgrounds, muted indigo accent.
      colors: {
        accent: {
          DEFAULT: '#6366f1', // indigo-500 — used sparingly for primary states
          hover: '#4f46e5',   // indigo-600
          soft: '#818cf8',    // indigo-400 — for hover text / icons
        },
      },
      fontFamily: {
        // Inter is loaded via index.html; fallback chain keeps it crisp.
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        // Subtle blinking caret for the VS Code mockup cursor.
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
