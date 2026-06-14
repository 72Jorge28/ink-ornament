// src/config/theme.ts
export const themeConfig = {
  activePreset: "royal-violet",

  presets: {
    ancientGold: "ancient-gold",
    royalViolet: "royal-violet",
    emeraldLight: "emerald-light",
  },

  radius: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },

  styleSignature: {
    ornaments: true,
    archDividers: true,
    carvedBorders: true,
    inkLines: true,
  },
} as const;