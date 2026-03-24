# Nostr.how Improvements & Issues

A comprehensive audit of routing, page structure, and localization across the project.

---

## Critical Bugs (Fix Immediately)

### 1. Wrong Import in NavLink.svelte

**File:** `src/lib/components/NavLink.svelte:2`

**Issue:** Imports `page` from `$app/state` instead of `$app/stores`

```javascript
// Current (WRONG)
import { page } from "$app/state";

// Should be
import { page } from "$app/stores";
```

**Impact:** This may cause runtime errors or incorrect behavior. All other components (Header.svelte, page files) correctly use `$app/stores`.

---

### 2. Missing Translation Key in Chinese Locale

**File:** `src/lib/locales/zh.json`

**Issue:** Missing the `guideSetupWallet` key that exists in all 10 other locales.

**Add to `nav` object:**
```json
"guideSetupWallet": "设置用于 Zaps 的钱包"
```

**Impact:** Chinese users see a missing translation for the "Setup a wallet for zaps" sidebar link.

---

### 3. Missing Dutch Redirect

**File:** `src/lib/data/redirects.ts`

**Issue:** All locales have a root redirect except Dutch (nl).

**Add:**
```typescript
{ old: "/nl", new: "/nl/get-started" },
```

**Impact:** Users navigating to `/nl` directly won't be redirected to the Dutch getting started page.

---

## Content Coverage Gaps

### Guide: setup-zapping-wallet.md

This guide is linked in the sidebar navigation for ALL locales but only exists in 6 of 11 locales.

| Locale | Has Content? |
|--------|-------------|
| en | Yes |
| es | **No** |
| de | **No** |
| fr | **No** |
| it | **No** |
| pt | Yes |
| nl | Yes |
| uk | Yes |
| jp | Yes |
| zh | Yes |
| fa | **No** |

**Users clicking this link in es, de, fr, it, or fa locales will see a "translation not found" error.**

---

### Page: manage-your-sats.md

| Locale | Has Content? |
|--------|-------------|
| en | Yes |
| es | Yes |
| de | Yes |
| fr | Yes |
| it | **No** |
| pt | Yes |
| nl | Yes |
| uk | Yes |
| jp | **No** |
| zh | Yes |
| fa | Yes |

**Note:** This page is NOT in sidebar navigation, so impact is lower.

---

### Guide: astral.md

| Locale | Has Content? |
|--------|-------------|
| en | Yes |
| es | Yes |
| de | Yes |
| fr | Yes |
| it | **No** |
| pt | Yes |
| nl | Yes |
| uk | **No** |
| jp | **No** |
| zh | Yes |
| fa | Yes |

**Note:** This guide is NOT in sidebar navigation (intentionally unlisted?).

---

## Architecture & Code Quality Issues

### 4. Draft Files Are Routable

**Files:**
- `src/routes/pages/en/guides/_draft_self-custody.md`
- `src/routes/pages/fa/guides/_draft_self-custody.md`
- `src/routes/pages/uk/guides/_draft_self-custody.md`
- `src/routes/pages/zh/guides/_draft_self-custody.md`

**Issue:** Draft files (prefixed with `_draft_`) can be accessed if someone knows the URL pattern. The route loader doesn't filter them out.

**Options:**
1. Move drafts outside `routes/pages/` to a `drafts/` folder
2. Add a check in `+page.ts` to reject slugs starting with `_draft_`
3. Use a different naming convention like `.draft.md` (mdsvex may ignore these)

---

### 5. NavLink Active State Detection

**File:** `src/lib/components/NavLink.svelte:16`

```javascript
class:active={page.url.pathname.includes(href)}
```

**Issue:** Uses `includes()` which could cause false positives. For example, if a route `/guides/sweep` existed, visiting `/guides/sweep-to-self-custody` would incorrectly mark both as active.

**Safer alternative:**
```javascript
class:active={page.url.pathname === `/${$locale}${href}` || page.url.pathname.startsWith(`/${$locale}${href}/`)}
```

---

## Configuration Consistency

### Locale Sources

The project defines locales in multiple places that should stay synchronized:

| File | Purpose | Count |
|------|---------|-------|
| `src/lib/config/l10n.ts` | Primary source of truth | 11 locales |
| `src/lib/i18n.ts` | i18n registration | 11 locales |
| `src/lib/data/redirects.ts` | Root redirects | **10 locales** (missing nl) |

---

## Recommendations

### Immediate Fixes (High Priority)

1. Fix NavLink.svelte import: `$app/state` → `$app/stores`
2. Add missing `guideSetupWallet` to `zh.json`
3. Add Dutch redirect to `redirects.ts`

### Short-term Improvements

4. Either remove `setup-zapping-wallet` from sidebar for locales without content, OR create placeholder content for missing locales
5. Add route protection for `_draft_` files

### Long-term Improvements

6. Consider a content coverage CI check that validates all sidebar-linked content exists in all locales
7. Refactor NavLink active state detection to be more precise
8. Consolidate locale definitions to reduce sync points

---

## Verification Commands

Check for import inconsistencies:
```bash
grep -r "\$app/state" src/
grep -r "\$app/stores" src/
```

List all locales with setup-zapping-wallet guide:
```bash
ls -la src/routes/pages/*/guides/setup-zapping-wallet.md 2>/dev/null
```

Find all draft files:
```bash
find src/routes/pages -name "_draft_*"
```

---

*Generated: 2026-01-24*
