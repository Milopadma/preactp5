import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    UnoCSS({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: "google", // default provider
          fonts: {
            // these will extend the default theme
            sans: "Roboto",
            mono: ["Fira Code", "Fira Mono:400,700"],
            // custom ones
            lobster: "Lobster",
            lato: [
              {
                name: "Lato",
                weights: ["400", "700"],
                italic: true,
              },
              {
                name: "sans-serif",
                provider: "none",
              },
            ],
          },
        }),
      ],
    }),
  ],
});
