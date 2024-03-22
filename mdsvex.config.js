import rehypeExternalLinks from "rehype-external-links";

const config = {
    extensions: [".svx", ".md"],
    smartypants: {
        dashes: "oldschool",
    },
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank", rel: ["follow"], nofollow: false }]],
};

export default config;
