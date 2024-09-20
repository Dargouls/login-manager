import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          100: 'var(--color-primary-100)',
        },
        background: 'var(--background)',
        contrast: 'var(--color-contrast)',

        foreground: 'var(--foreground)',
      },
    },
  },

  plugins: [
    plugin(function ({ addBase, theme }: PluginAPI) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.semibold') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      });
    }),
  ],
};
export default config;
