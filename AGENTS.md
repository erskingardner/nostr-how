# Nostr.how - Agent Guide

## Project Overview
Nostr.how is a comprehensive educational resource and guide for the Nostr protocol. The site provides documentation, guides, and explanations about clients, relays, and NIPs.

**Status**: The project is currently undergoing a "revamp" (as of Jan 2026). It was previously slightly dormant. Expect significant changes to structure or content as part of this modernization.

## Tech Stack
- **Framework**: SvelteKit (Svelte 5)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: Markdown (via `mdsvex`)
- **Internationalization**: `svelte-i18n` (UI) + Localized Markdown files (Content)
- **Linting/Formatting**: Biome
- **Package Manager**: pnpm
- **Hosting**: Vercel

## Project Structure

### content
- **Markdown Pages**: Located in `src/routes/pages/{lang}/`.
  - Each language has its own directory (e.g., `en`, `es`, `jp`).
  - Filenames across languages must match to support switching.
  - Frontmatter defines metadata like `title` and `description`.

### Application Logic
- **Routes**: `src/routes/[locale=locale]/` handles the localized routing.
- **Components**: `src/lib/components/` contains shared UI components.
- **Locales**: `src/lib/locales/` contains JSON files for UI string translations.

## Development Guidelines

### Commands
- **Dev Server**: `pnpm dev`
- **Lint**: `pnpm biome lint`
- **Format**: `pnpm biome format --write`

### Coding Conventions
- **Svelte 5**: Use Svelte 5 syntax (runes) where applicable, though legacy syntax may still exist in older files.
- **Tailwind**: Use utility classes for styling.
- **Strict Types**: Ensure TypeScript types are defined; avoid `any`.
- **Formatting**: Always run Biome formatting on modified files.

### Localization
- **UI Strings**: Add new UI text to `src/lib/locales/en.json` first.
- **Content**: When creating new pages, ensure they are added to at least the `en` directory.

## Revamp Goals
- Modernize the codebase (Svelte 5 migration is likely part of this).
- Update content to reflect the current state of the Nostr ecosystem.
- Improve site performance and UX.
