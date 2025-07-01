/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "baloo-regular": ["Baloo2_400Regular"],
        "baloo-bold": ["Baloo2_700Bold"],
        "roboto-regular": ["Roboto_400Regular"],
        "roboto-bold": ["Roboto_700Regular"],
      },
    },
  },
  plugins: [],
};
