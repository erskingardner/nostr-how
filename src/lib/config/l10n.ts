interface localesType {
    alpha2Code: string;
    name: string;
}

// Locales our app supports
export const locales: localesType[] = [
    { alpha2Code: 'en', name: 'English' },
    { alpha2Code: 'it', name: 'Italiano' },
    { alpha2Code: 'es', name: 'Español' }
];

// Returns an array of the supported alpha2 codes
export const supportedLocales: string[] = locales.map((item) => item.alpha2Code);

// Locale to show when we don't support the requested locale
export const fallbackLocale = 'en';
