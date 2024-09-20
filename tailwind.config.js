/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        newbounce: 'newbounce 1s ease-in-out infinite',
        fadeOutDown: 'fadeOutDown 1s ease-out',
        pulse: 'pulse 1s infinite',
        backInUp: 'backInUp 1s ease-out',
      },
      keyframes: {
        newbounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            opacity: 0.4,
            filter: 'alpha((opacity = 40))',
          },
          '50% ': {
            transform: 'translateY(0)',
            opacity: 1,
            filter: 'none',
          },
        },
        fadeOutDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-5vh)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(1)',
          },
        },
        pulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.7',
          },
        },
        backInUp: {
          '0%': {
            transform: 'translateY(1200px) scale(0.7)',
            opacity: '0.7',
          },
          '80%': {
            transform: 'translateY(0px) scale(0.7)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'translateY(0px) scale(1)',
            opacity: '1',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'white',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
