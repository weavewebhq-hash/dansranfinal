# Dansran local recreation

Source: https://github.com/runinentireasia-eng/dansran

This workspace copy was recreated from the downloaded repository at
`C:\Users\mishe\Downloads\dansran-main\dansran-main`. All 48 original files
were copied and verified against the download with SHA-256 hashes.

## Run the site

From this directory, using Node.js and pnpm:

```powershell
pnpm install --frozen-lockfile
pnpm dev --hostname 127.0.0.1 --port 3000
```

Open http://127.0.0.1:3000. The site has four routes:

- `/`: home page with the animated ceramic plate.
- `/collection`: product collection and image galleries.
- `/custom`: custom products linked to their original store pages.
- `/contact`: contact information and the request form.

For a production build and a separate TypeScript check:

```powershell
pnpm build
node node_modules/typescript/bin/tsc --noEmit --incremental false
```

## Custom requests

The contact form sends an email to `weavewebhq@gmail.com` through Resend.
It no longer requires a database or writes to `custom_requests`.

For local delivery, copy `.env.example` to `.env.local` and configure
`RESEND_API_KEY` and `RESEND_EMAIL_DOMAIN`, then restart the dev server.
The default sender is `Dansran <requests@dansran.shop>` when the domain is
`dansran.shop`; use `RESEND_FROM` only to override that sender.
The sender must use a domain verified in Resend.

For Vercel deployment later, import this GitHub repository and add these same
two server-only environment variables in the Vercel project settings for the
environments you use, then redeploy. Never commit real keys to GitHub or use
`NEXT_PUBLIC_` prefixes. No sending account or credentials are configured yet.

The form shows success only after the email provider accepts the message.
If configuration is missing or delivery fails, it shows an error and a direct
email link, retaining the visitor's entered details for another attempt.

The collection reads product images from the existing Dansran Shopify store,
with fallback image URLs in `lib/dansran-products.ts`. Product links open the
existing store. Internet access is required for those external images.

## Editing

Edit the files under `app`, `components`, `lib`, and `public`. The downloaded
source remains in Downloads. The recreated site retains the original
application behavior, with the requested visual updates listed below.

## Verification

- Production build: passed for all four application pages.
- Separate TypeScript check: passed.
- All four page routes and the main local assets returned HTTP 200.
- Browser preview: home, collection, custom, and contact pages render; navigation
  works and the product gallery advances to the next image.
- No browser errors were reported during those checks.
- Live contact email delivery requires configured Resend credentials and a
  verified sender; delivery to the inbox has not yet been tested.

Git history and the `origin` remote have been restored from the source
repository. The 47 Git-tracked source files matched the repository at recreation
time. The extra
`public/dansran-penholder.webp` image from the local download was also retained.

## Visual updates

- Collection product photos now use a square (1:1) frame instead of 4:5.
- Nunito is the default site font, including form controls and navigation.
- The collection and contact headings use Nunito italic for their emphasized
  text, replacing the previous serif styling.
- The regular and italic variable fonts are bundled under `app/fonts`, along
  with their SIL Open Font License. Source: https://github.com/google/fonts/tree/main/ofl/nunito
