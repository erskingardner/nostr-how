# 💜 Nostr.how

A comprehensive guide to all things Nostr. Including step-by-step setup guides and details on clients, relays, and NIPs.

## Table of contents

-   [Getting Started](#🐣-getting-started-with-the-codebase)
-   [Contributing](#🫂-contributing)
    -   [Writing & Editing](#create-or-edit-content)
    -   [Translations](#translations)
-   [License](#📜-license)

## 🐣 Getting started with the codebase

Nostr.how is built with [Svelte](https://svelte.dev/), a lightweight javascript framework.

1. Clone this repo.
1. Install the dependencies `npm install`
1. Run the development server with `npm run dev`
1. Access the site in development at [http://localhost:5173](http://localhost:5173)

## 🚨 IMPORTANT

If you were a previous contributor to Nostr.how I have rewritten the site from Next.js to Svelte (change effective Apr 13 2023). Please double check that your local copy is up to date and accurate.

## 🫂 Contributing

We're always looking for writers, coders, and translators to help us make Nostr.how more useful. A few more details below on how you can contribute. If you have an idea on how to make the site better in any way, [please let me know](https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc).

### Create or Edit content

If you recently learned something new about Nostr it's likely that other people don't know it yet! Writing new content for Nostr.how is easy. Feel free to write in whatever format you'd like and then [reach out to me on Nostr](https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc) and I'll get the page into the codebase (or, if you're technical, feel free to create a PR directly).

If you're less of a writer but have a sharp eye for typos and grammar, feel free to [create issues here in Github](https://github.com/erskingardner/nostr-how/issues) for things you find that could be improved.

### Translations

Translations in Nostr.how are done in two parts. For UI elements and navigation items we use in i18n library and simple JSON files to store the translated strings. The main content of each page is written in Markdown and each page must be translated separately and put into the correct directory in the codebase.

#### i18n JSON files

These files are found in the `/src/lib/locales/` directory [here](https://github.com/erskingardner/nostr-how/tree/main/src/lib/locales). Each new language needs to have it's own file named with the ISO 3166 Alpha-2 code. E.g. `en.json` for English and `it.json` for Italian.

Currently we're **_not_** creating sub-localizations for regions, e.g. `en-gb.json` for the UK as distinct from the United States.

To translate these files, copy the `en.json` file and change only the values, not the keys, of each item.

![JSON file](https://user-images.githubusercontent.com/202880/231967087-5f66846b-f76b-42d2-b0f5-37a2dd8778a2.png)

#### Markdown pages

Each of the individual pages of content are in the `/src/routes/pages` directory [here](https://github.com/erskingardner/nostr-how/tree/main/src/routes/pages). The pages for each language are in a folder with the corresponding Alpha-2 two letter code for that language.

Here's how to create files for a new language:

1. Create a new folder with the 2 letter country code as the name. E.g. `/src/routes/pages/es/` for Spanish.
1. Create blank files **with the same names** as the files in the `/src/routes/pages/en/` (english) directory. It's important that the names are exactly the same so that they can be dynamically loaded.
1. Translate each page.
    1. The section at the top (between the `---`) is called Frontmatter and it's really important that the formatting stays the same. Please don't change the `title` or `description` keys, but definitely translate the text after.
    1. The full page should be translated to your target language.
    1. For URLs to other pages, please change the two letter country code to your target language. e.g. `/en/get-started` should change to `/fr/get-started` if you're translating to French.
    1. It's ok to change the anchor links for each header to the target language. These make it easy for people to link to specific parts of the page. e.g. `## [§](#understanding-keys)` should chance to something like `## [§](#compendere-chiavi)` if you're translating to Italian.
    1. That's it.
1. If you'd like to add any images or create new images specific for a given language please [get in touch](https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc). I'll be happy to help you add them to the right places.

## 📜 License

The Nostr How project is open source software under the [MIT License](https://opensource.org/licenses/MIT).
