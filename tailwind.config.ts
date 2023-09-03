import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                pacifico: ['var(--font-pacifico)'],
                josefinSans: ['var(--font-josefinSans)'],
                montserratBold: ['var(--font-montserratBold)'],
                montserratNormal: ['var(--font-montserratNormal)'],
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};
export default config;
