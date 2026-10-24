import adapter from "@sveltejs/adapter-vercel";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { mdsvex } from "mdsvex";
import { defineConfig } from "vite";
import mdsvexConfig from "./mdsvex.config.js";

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            extensions: [".svelte", ...mdsvexConfig.extensions],
            preprocess: [vitePreprocess({ script: true }), mdsvex(mdsvexConfig)],
            adapter: adapter({ runtime: "nodejs24.x" }),
            csp: {
                mode: "auto",
                directives: {
                    "default-src": ["self"],
                    "script-src": ["self", "https://analytics.ipf.dev"],
                    // The app shell and Svelte transitions require inline styles.
                    "style-src": ["self", "unsafe-inline", "https://fonts.googleapis.com"],
                    "font-src": ["self", "https://fonts.gstatic.com"],
                    "img-src": ["self", "data:", "https:"],
                    "connect-src": ["self", "https://analytics.ipf.dev"],
                    "object-src": ["none"],
                    "base-uri": ["self"],
                    "frame-ancestors": ["none"],
                    "form-action": ["self"],
                },
            },
        }),
    ],
});
