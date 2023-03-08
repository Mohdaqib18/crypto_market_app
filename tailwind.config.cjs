/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#14172B",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				tomorrow: ["Tomorrow", "sans-serif"],
			},

			backgroundImage: {
				gradient: "var(--card-gradient)",
				bitcoin: "var(--bitcoin-gradient)",
				shiba: "var(--shiba-gradient)",
				ethereum: "var(--ethereum-gradient)",
				solana: "var(--solana-gradient)",
				binance: "var(--binance-gradient)",
			},
		},
	},
	plugins: [],
};
