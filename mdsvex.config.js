import rehypeExternalLinks from "rehype-external-links";
import rehypeHeadingAnchors from "./src/lib/markdown/rehype-heading-anchors.js";

/** @satisfies {import('mdsvex').MdsvexOptions} */
const config = {
    extensions: [".svx", ".md"],
    smartypants: {
        dashes: "oldschool",
    },
    rehypePlugins: [
        rehypeHeadingAnchors,
        [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
    ],
};

export default config;
