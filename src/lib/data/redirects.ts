import { supportedLocales } from "$lib/config/l10n";

const contributionUrl = "https://github.com/nostr-how/nostr-how";

const localeRedirects = supportedLocales.map((locale) => ({
    old: `/${locale}`,
    new: `/${locale}/what-is-nostr`,
}));

const localizedGetVerifiedRedirects = supportedLocales.map((locale) => ({
    old: `/${locale}/guides/get-verified`,
    new: `/${locale}/get-verified`,
}));

export const redirects = [
    ...localeRedirects,
    ...localizedGetVerifiedRedirects,
    { old: "/jp/guides/get-verified", new: "/ja/get-verified" },
    { old: "/relays/implementations", new: "/en/relays" },
    { old: "/clients/iris", new: "/en/clients" },
    { old: "/es/guias/iris", new: "/es/clients" },
    { old: "/clients/damus", new: "/en/clients" },
    { old: "/clients/amethyst", new: "/en/clients" },
    { old: "/es/guias/amethyst", new: "/es/clients" },
    { old: "/guides/iris", new: "/en/clients" },
    { old: "/guides/damus", new: "/en/clients" },
    { old: "/guides/amethyst", new: "/en/clients" },
    { old: "/clients/comparison", new: "/en/clients" },
    { old: "/the-protocol/events", new: "/en/the-protocol" },
    { old: "/the-protocol/nips", new: "/en/the-protocol" },
    { old: "/es/comenzar", new: "/es/get-started" },
    { old: "/fr/relais", new: "/fr/relays" },
    { old: "/guides/nip05", new: "/en/get-verified" },
    { old: "/guides/get-verified", new: "/en/get-verified" },
    { old: "/verify-your-identity", new: "/en/get-verified" },
    { old: "/get-verified", new: "/en/get-verified" },
    { old: "/fr/verify-your-identity", new: "/fr/get-verified" },
    { old: "/contribute", new: contributionUrl },
    { old: "/contribute.md", new: contributionUrl },
    { old: "/relays/implementations.md", new: "/en/relays" },
    { old: "/the-protocol.md", new: "/en/the-protocol" },
    { old: "/get-started.md", new: "/en/get-started" },
    { old: "/relays.md", new: "/en/relays" },
];
