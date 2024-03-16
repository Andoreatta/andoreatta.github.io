import lume from "lume/mod.ts";
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
    fontFamily: {
      "sans": ["Atkinson Hyperlegible", "sans-serif"],
      "mono": ["monospace"],
    },
  },
}));
site.use(postcss());
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
site.copy([".woff2", ".webp", ".gif"]);

export default site;
