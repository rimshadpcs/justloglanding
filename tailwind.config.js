/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
          mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        },
        colors: {
          jl: {
            bg: '#F4F4F1',
            s1: '#FFFFFF',
            s2: '#E9E9E4',
            line: '#DEDED8',
            text: '#111113',
            muted: '#5C5C63',
            faint: '#A1A1AA',
            accent: '#D4FF3A',
            ink: '#4A6B00',
            soft: 'rgba(212, 255, 58, 0.22)',
            frame: '#111113',
            onaccent: '#0B0B0C',
          },
        },
      },
    },
    plugins: [],
  }
