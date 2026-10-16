module.exports = {
  content: ["./src/app/apps/nospoti/landing.source.html"],
  important: ".nospoti-landing",
  corePlugins: { preflight: false },
  ...{
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Plus Jakarta Sans"', "sans-serif"],
          mono: ['"JetBrains Mono"', "monospace"],
        },
        colors: {
          obsidian: "#09090B",
          surface: "#121217",
          surfaceRaised: "#181820",
          surfaceBorder: "#272732",
          lime: {
            accent: "#DDFE52",
            hover: "#C8EB38",
            muted: "rgba(221, 254, 82, 0.12)",
          },
        },
        boxShadow: {
          glass: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          glow: "0 0 45px -10px rgba(221, 254, 82, 0.35)",
          bezel: "0 20px 50px -15px rgba(0, 0, 0, 0.7)",
        },
        transitionTimingFunction: {
          spring: "cubic-bezier(0.32, 0.72, 0, 1)",
        },
      },
    },
  },
};
