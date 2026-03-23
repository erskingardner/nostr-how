export const siteName = "Nostr.how";
export const siteUrl = "https://nostr.how";
export const defaultSocialImagePath = "/nostrich1200x630.webp";
export const defaultTwitterCard = "summary_large_image";

export function toAbsoluteUrl(path: string) {
    return new URL(path, siteUrl).toString();
}

export function toMarkdownPath(path: string) {
    return `${path}/index.html.md`;
}
