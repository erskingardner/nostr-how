interface localesType {
    alpha2Code: string;
    name: string;
}

// Locales our app supports
export const locales: localesType[] = [
    { alpha2Code: "en", name: "English" },
    { alpha2Code: "es", name: "Español" },
    { alpha2Code: "de", name: "Deutsch" },
    { alpha2Code: "fr", name: "Français" },
    { alpha2Code: "it", name: "Italiano" },
    { alpha2Code: "pt", name: "Português" },
    { alpha2Code: "nl", name: "Dutch" },
    { alpha2Code: "uk", name: "Українська" },
    { alpha2Code: "jp", name: "日本語" },
    { alpha2Code: "zh", name: "中文" },
    { alpha2Code: "fa", name: "پارسی" },
];

// Returns an array of the supported alpha2 codes
export const supportedLocales: string[] = locales.map((item) => item.alpha2Code);

// Locale to show when we don't support the requested locale
export const fallbackLocale = "en";
