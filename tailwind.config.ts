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
        "0%": { transform: "translateX(0vh) translateY(0vh) rotate(0deg)" },
        "100%": {
          transform: "translateX(100vh) translateY(-40vh) rotate(-40deg)",
        },
      },
      driveInScreen: {
        "0%": {
          transform: "translateX(-100vh) translateY(-40vh) rotate(40deg)",
        },
        "100%": { transform: "translateX(0vh) translateY(0vh) rotate(0deg)" },
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
