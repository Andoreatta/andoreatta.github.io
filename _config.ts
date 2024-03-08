import lume from "lume/mod.ts";

const site = lume({
    src: "./src",
    location: new URL("https://serial.experiments.network/"),
    server: {
        open: true,
        port: 8008
    },
});

// Ignore all files with ".md" extension inside the "draft" folder
site.ignore((path) => {
    return path.match(/^\/src\/draft\/.*\.md$/) !== null;
});

// global variables
site.data("site", {
    title: "srl.exp.net",
    description: "Closing the world, opening the next."
});

site.copy("./src/assets", "assets");
site.copy("./src/robots.txt", "robots.txt");
site.copy("./src/favicon.ico", "favicon.ico");

export default site;
