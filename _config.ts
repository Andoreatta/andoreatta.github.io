import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import svgo from "lume/plugins/svgo.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

const site = lume({
  src: "./src",
  location: new URL("https://serial.experiments.network/"),
  server: {
    open: true,
    port: 8008,
  },
});

site.use(tailwindcss({
  extensions: [".vto", ".html"],

  options: {
    theme: {
      extend: {
        colors: {
          "licorice": {
            "100": "#3a3535",
            "200": "#332e2e",
            "300": "#2c2828",
            "400": "#251d1d",
            "500": "#180F11",
            "600": "#110a0a",
            "700": "#0a0505",
            "800": "#030000",
            "900": "#000000",
          },
          "chestnut": {
            "100": "#9c8f8e",
            "200": "#8f7f7e",
            "300": "#82706e",
            "400": "#755f5e",
            "500": "#5A4241",
            "600": "#3f2524",
            "700": "#240808",
            "800": "#090000",
            "900": "#000000",
          },
          "darksilver": {
            "100": "#9a969b",
            "200": "#88837d",
            "300": "#76706f",
            "400": "#645d61",
            "500": "#716B74",
            "600": "#5e575f",
            "700": "#4c434a",
            "800": "#3a2f35",
            "900": "#282b20",
          },
          "sonicsilver": {
            "100": "#8f8e82",
            "200": "#7d7c76",
            "300": "#6b6a6a",
            "400": "#59585e",
            "500": "#777671",
            "600": "#555453",
            "700": "#43423d",
            "800": "#313027",
            "900": "#1f1e11",
          },
          "quicksilver": {
            "100": "#c2c1b3",
            "200": "#b0afa3",
            "300": "#9e9d93",
            "400": "#8c8b83",
            "500": "#ABA99E",
            "600": "#797875",
            "700": "#67665c",
            "800": "#555543",
            "900": "#43432a",
          },
          "khaki": {
            "100": "#F2EEDC",
            "200": "#E6E2C9",
            "300": "#DAD6B6",
            "400": "#CECAA3",
            "500": "#C1B492",
            "600": "#B5A07F",
            "700": "#A98C6C",
            "800": "#9D7859",
            "900": "#916446",
          },
        },
      },
    },
    fontFamily: {
      "sans": ["Atkinson Hyperlegible", "sans-serif"],
      "mono": ["monospace"],
    },
  },
}));
site.use(postcss());
site.use(svgo());
site.use(favicon());
site.use(minifyHTML());

// Ignore all files with ".md" extension inside the "draft" folder
site.ignore((path) => {
  return path.match(/^\/src\/draft\/.*\.md$/) !== null;
});

// global variables
site.data("site", {
  title: "srl.exp.net",
  description: "Closing the world, opening the next.",
});

site.copy("./src/assets", "assets");
site.copy("./src/robots.txt", "robots.txt");
site.copy("./src/favicon.ico", "favicon.ico");
site.copy([".woff2", ".webp", ".gif"]);

export default site;
