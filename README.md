# 💜 Nostr.how

A comprehensive guide to all things Nostr. Including step-by-step setup guides and details on clients, relays, and NIPs.

## Tech Stack

- **Framework**: [SvelteKit](https://svelte.dev/) with Svelte 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Content**: Markdown via [mdsvex](https://mdsvex.pngwn.io/)
- **i18n**: [svelte-i18n](https://github.com/kaisermann/svelte-i18n)
- **Linting**: [Biome](https://biomejs.dev/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Hosting**: [Vercel](https://vercel.com/)

## Getting Started

1. Clone this repo
2. Use Node 24 and Bun 1.4.4 (see `packageManager` in `package.json`)
3. Install dependencies: `bun install --frozen-lockfile`
4. Run the dev server: `bun dev`
5. Open [http://localhost:5173](http://localhost:5173)

### Available Commands

| Command                    | Description                                             |
| -------------------------- | ------------------------------------------------------- |
| `bun dev`                  | Start development server                                |
| `bun run build`            | Build for production                                    |
| `bun run preview`          | Preview production build                                |
| `bun run check`            | Run TypeScript/Svelte type checking                     |
| `bun run check:production` | Smoke test routes and CSP after a production build      |
| `bun run lint-check`       | Check code with Biome                                   |
| `bun run lint-write`       | Fix lint issues with Biome                              |
| `bun run format-write`     | Format code with Biome                                  |
| `bun run audit`            | Audit all locked dependencies for known vulnerabilities |

### Dependency maintenance

CI runs a frozen install, dependency audit, type checks, lint, production build, and HTTP smoke tests.
Dependabot checks Bun dependencies and GitHub Actions weekly; updates still need review.
Run `bun update` and the same checks when refreshing the lockfile locally.

TypeScript stays on the latest 6.x release because SvelteKit 3 and `svelte-check`
currently require that major. Two security overrides in `package.json` replace
vulnerable transitive dependencies still pinned by upstream packages:
- `esbuild` 0.28.2 for `svelte-i18n` (its translation extraction CLI).
- `postcss-selector-parser` 7.1.7 for `@tailwindcss/typography`.

Recheck these overrides when the upstream packages release fixes. Validate both
the production build and translation extraction before changing them.
For translation extraction with SvelteKit 3, pass `--config vite.config.ts` to the
`svelte-i18n extract` command.

## Contributing

We're always looking for writers, coders, and translators to help us make Nostr.how more useful. If you have an idea on how to make the site better, [please let me know](https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc).

### Create or Edit Content

If you recently learned something new about Nostr, it's likely that other people don't know it yet! Feel free to write in whatever format you'd like and then [reach out on Nostr](https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc) and I'll get the page into the codebase. Or, if you're technical, feel free to create a PR directly.

If you're less of a writer but have a sharp eye for typos and grammar, feel free to [create issues here on GitHub](https://github.com/erskingardner/nostr-how/issues).

### Translations

Translations have two parts:
1. **UI strings**: JSON files in `/src/lib/locales/` (e.g., `en.json`, `es.json`)
2. **Content pages**: Markdown files in `/src/routes/pages/{lang}/`

#### Quick Start for Translators

1. Fork this repository
2. Create a branch: `git checkout -b <language>_translation`
3. For UI strings: Copy `en.json` and translate the values (not keys)
4. For content: Create a folder with your language's [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and translate each `.md` file
5. Submit a Pull Request

#### Content Translation Tips

- Keep frontmatter format intact (the `---` section at the top)
- Translate the `title` and `description` values
- Update internal links to use your language code (e.g., `/en/get-started` → `/fr/get-started`)
- Anchor links can be translated (e.g., `#understanding-keys` → `#comprendre-les-cles`)

## Project Structure

```
src/
├── lib/
│   ├── components/    # Svelte components
│   ├── locales/       # i18n JSON files
│   └── config/        # Configuration
└── routes/
    ├── pages/         # Markdown content by language
    │   ├── en/
    │   ├── es/
    │   ├── de/
    │   └── ...
    └── [locale=locale]/  # Localized routing
```

## License

MIT License - see [LICENSE](https://opensource.org/licenses/MIT)
