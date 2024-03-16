import type { Config } from "tailwindcss";

const config: Config = {
  purge: {
    content: [],
  },
  theme: {
    extend: {
      fontFamily: {
        "mono": ["monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
