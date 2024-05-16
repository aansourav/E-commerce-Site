/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: { center: true, padding: "8rem" },
        extend: {
            colors: {
                baseBlack: "#212529",
                baseWhite: "#F9F9F9",
                baseBlue: "#525CEB",
                secondaryBlue: "#1C75CF",
                star: "#F6AA24",
                price: "#F2415A",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                openSans: ["Open Sans", "sans-serif"],
            },
        },
        
    },
    plugins: [require("@tailwindcss/typography")],
};
