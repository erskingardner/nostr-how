import rehypeExternalLinks from "rehype-external-links";
import rehypeHeadingAnchors from "./src/lib/markdown/rehype-heading-anchors.js";

const config = {
    extensions: [".svx", ".md"],
    smartypants: {
        dashes: "oldschool",
    },
    rehypePlugins: [
        rehypeHeadingAnchors,
        [rehypeExternalLinks, { target: "_blank", rel: ["follow"], nofollow: false }],
    ],
};

export default config;
