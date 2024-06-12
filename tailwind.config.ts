import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    animation: {
      driveOffScreen: "driveOffScreen 1s ease-in forwards",
      driveInScreen: "driveInScreen 1s ease-out forwards",
      circle: "circle 2s ease-in-out infinite",
      bump: "bump 1s ease-in-out infinite",
    },
    keyframes: {
      circle: {
        "0%": { transform: "rotate(-90deg) translateX(1.5in)" },
        "100%": { transform: "rotate(270deg) translateX(1.5in)" },
      },
      bump: {
        "0%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0px)" },
      },
      driveOffScreen: {
        "0%": { transform: "translateX(0vh)" },
        "100%": { transform: "translateX(100vh)" },
      },
      driveInScreen: {
        "0%": { transform: "translateX(-100vh)" },
        "100%": { transform: "translateX(0vh)" },
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
