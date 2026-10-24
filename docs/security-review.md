# Dependency update and basic security review

Reviewed on 24 October 2026. Scope: the dependency lockfile, SvelteKit application,
Markdown rendering, browser policy, Vercel configuration, and dependency maintenance.

The initial Bun audit flagged 17 packages across 70 distinct advisories (77 affected
version-range entries). After updating direct and transitive dependencies and adding
two compatibility overrides, `bun audit` reports no known vulnerabilities across
224 checked packages. An advisory match does not establish exploitability in this
application, and a clean audit does not prove the absence of unknown vulnerabilities.

## Findings addressed

### 1. Critical/high advisory matches in the dependency tree

Location: `package.json:24`, `package.json:39`, and `bun.lock`.
The old lockfile included vulnerable versions of SvelteKit, Svelte, Vite, devalue,
tar, and several build tools. Depending on the package and reachable API, the
advisories describe denial of service, script injection, file disclosure, or file writes.
Application-specific reachability was not established for every advisory.

Updated to SvelteKit 3.1.0, Svelte 5.57.2, Vite 8.3.5, adapter-vercel 7.0.1,
Tailwind 4.3.3, Biome 2.6.2, and the latest compatible remaining dependencies.
The framework migration moves configuration into `vite.config.ts`, switches internal
imports to `#lib`, and updates parameter matchers, error APIs, and TypeScript configuration.
TypeScript is 6.0.3 because the current framework/checker peer ranges exclude 7.x.

### 2. Moderate advisory matches retained by latest upstream releases

Location: `package.json:49`.
The latest `svelte-i18n` still requires vulnerable esbuild 0.19.x, and the latest
`@tailwindcss/typography` pins vulnerable postcss-selector-parser 6.0.10.
Overrides resolve these to esbuild 0.28.2 and postcss-selector-parser 7.1.7.
The production build exercises the preprocessor and typography plugin; translation
extraction was also verified using `--config vite.config.ts`.
Remove the overrides once upstream dependency ranges support patched versions.

Advisories: [esbuild cross-origin development server access](https://github.com/advisories/GHSA-67mh-4wv8-2f99)
and [selector-parser CPU exhaustion](https://github.com/advisories/GHSA-rj75-hqrm-r3gf).

### 3. Browser security policy missing from repository configuration

Location: `vite.config.ts:16` and `vercel.json:4`. Defense in depth; no exploitable
application XSS was found. The repository did not configure CSP or baseline response
headers; any preexisting edge settings were outside this local review.

Added a SvelteKit-managed CSP that permits same-origin application scripts and the
existing analytics origin, with a per-response nonce for framework bootstrap code.
It blocks plugins, framing, external base URLs, and cross-origin form targets.
Google Fonts and HTTPS content images remain permitted. Inline styles remain allowed
for the app shell and Svelte transitions; executable inline scripts require a nonce.
Added Vercel headers for MIME sniffing protection, framing protection, referrer policy,
and disabling unused camera, microphone, and geolocation access.

### 4. Low-priority external link and maintenance hardening

Location: `mdsvex.config.js:12`, `src/lib/components/Footer.svelte`,
`src/routes/[locale=locale]/donate/+page.svelte`, `vercel.json:2`, and `.github/`.
External links opening a new tab now explicitly use `noopener noreferrer`.
Deployments install the committed lockfile without re-resolution.
CI audits dependencies and runs type, lint, build, and production HTTP checks with
read-only token permissions and commit-pinned Actions. Dependabot proposes weekly
Bun and Actions updates after this configuration is merged.

## Validation and limits

- Frozen dependency install and audit pass.
- TypeScript/Svelte checks pass with zero errors or warnings; Biome lint passes.
- Production build produces the Vercel serverless output.
- `bun run check:production` verifies 108 HTML pages, 216 Markdown routes, locale
  metadata, localized 404s, the Japanese redirect, and discovery endpoints.
  It checks live CSP headers and bootstrap nonces and checks new-tab link protections.
- Browser checks cover hydration, client navigation, and switching English to Persian.
  No browser console errors or CSP violations were observed during those interactions.
- Translation extraction succeeds with the updated toolchain.

Markdown is trusted repository content compiled at build time, rather than visitor
input. JSON-LD escapes `<` before insertion. No authentication, privileged user data,
visitor-submitted HTML, or state-changing application endpoints were found in scope.
The analytics origin remains an explicitly trusted script provider.

The validation above was performed locally. Vercel-wide headers require a deployment
and subsequent live verification; local preview only verifies the SvelteKit CSP.
This is a dependency and baseline-hardening review, not a penetration test.

References: [SvelteKit 3 migration](https://svelte.dev/docs/kit/migrating-to-sveltekit-3),
[SvelteKit CSP configuration](https://svelte.dev/docs/kit/@sveltejs-kit-vite#csp),
and [Dependabot ecosystem support](https://docs.github.com/en/code-security/reference/supply-chain-security/supported-ecosystems-and-repositories).
