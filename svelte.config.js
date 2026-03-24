import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],
    preprocess: [vitePreprocess({ script: true }), mdsvex(mdsvexConfig)],

    kit: {
        adapter: adapter({
            runtime: "nodejs24.x",
        }),
    },
};

export default config;
