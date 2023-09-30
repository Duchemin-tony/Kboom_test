import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderColor: {
                "587481": "#587481",
            },
            backgroundColor: {
                "gold-gradient": "linear-gradient(37deg, rgba(252,227,62,1) 0%, rgba(188,120,36,1) 100%)",
            },
        },
    },
    plugins: [],
};

export default config;
