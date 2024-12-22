/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "black",
      white: "#ffffff",
      LimeGrayLight: "#E0EFEA",
      LimeGray: "#8EA076",
      gray: "#BBC6C8",
      Lime: "#445F3B",
      grayLight: "#E7EAEF",
      emeraldLight: "#5BA199",
      emeraldDark: "#469597",
      green: "#37745B",
      redDark: "#680003",
      brownLight: "#564734",
      brown: "#362E23",
      terracotta: "#EDC5AB",
    },
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      keyframes: {
        blur: {
          "0%": { filter: "blur(15px)", opacity: "0" },
          "100%": { filter: "blur(0px)", opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeInBounceUp: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0%, 100%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(0%, 20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        flyIn: {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "40%": {
            transform: "scale3d(0.9, 0.9, 0.9)",
          },
          "60%": {
            opacity: "1",
            transform: "scale3d(1.03, 1.03, 1.03)",
          },
          "80%": {
            transform: "scale3d(0.97, 0.97, 0.97)",
          },
          "100%": {
            opacity: "1",
            transform: "scale3d(1, 1, 1)",
          },
        },
        zoomIn: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
        jiggle: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        slideIn: "slideIn .25s ease-in-out forwards var(--delay, 0)",
        fadeIn: "fadeIn 2s ease-in-out 0.25s 1 forwards",
        fadeInDown: "fadeInDown 0.5s ease-in-out 0.25s 1 forwards",
        fadeInBounceUp:
          "fadeInBounceUp 1s ease-in-out forwards var(--delay, 0)",
        flyIn: "flyIn 1s ease-in-out forwards var(--delay, 0)",
        zoomIn: "zoomIn 1s ease-in-out 1s 1 forwards",
        blur: "blur 2s linear 0s 1 forwards",
        jiggle: "jiggle 0.1s ease-in-out 0s 1",
      },
    },
  },
  plugins: [],
};
