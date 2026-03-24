import { visit } from "unist-util-visit";

const HEADING_TAG_NAMES = new Set(["h2", "h3", "h4", "h5", "h6"]);
const SECTION_GLYPH = "§";

/** @param {any} node */
function getTextContent(node) {
    if (!node || typeof node !== "object") {
        return "";
    }

    if (node.type === "text") {
        return node.value;
    }

    if (!Array.isArray(node.children)) {
        return "";
    }

    return node.children.map(/** @param {any} child */ (child) => getTextContent(child)).join("");
}

/** @param {any} node */
function isManualSectionAnchor(node) {
    if (node?.type !== "element" || node.tagName !== "a") {
        return false;
    }

    const href = node.properties?.href;
    return typeof href === "string" && href.startsWith("#") && getTextContent(node).trim() === SECTION_GLYPH;
}

/** @param {any[]} children */
function trimLeadingWhitespace(children) {
    const [firstChild] = children;

    if (firstChild?.type !== "text") {
        return children;
    }

    const trimmedValue = firstChild.value.replace(/^\s+/, "");

    if (trimmedValue.length === 0) {
        return children.slice(1);
    }

    return [{ ...firstChild, value: trimmedValue }, ...children.slice(1)];
}

/** @param {string} id
 * @param {any[]} children
 */
function createHeadingLink(id, children) {
    return {
        type: "element",
        tagName: "a",
        properties: {
            href: `#${id}`,
            className: ["heading-link"],
        },
        children,
    };
}

export default function rehypeHeadingAnchors() {
    /** @param {any} tree */
    return (tree) => {
        visit(tree, "element", /** @param {any} node */ (node) => {
            if (!HEADING_TAG_NAMES.has(node.tagName) || !Array.isArray(node.children)) {
                return;
            }

            const [firstChild, ...restChildren] = node.children;

            if (!isManualSectionAnchor(firstChild)) {
                return;
            }

            const href = firstChild.properties?.href;
            const id = typeof href === "string" ? href.slice(1) : "";

            if (!id) {
                return;
            }

            node.properties = {
                ...node.properties,
                id,
            };

            node.children = [createHeadingLink(id, trimLeadingWhitespace(restChildren))];
        });
    };
}
