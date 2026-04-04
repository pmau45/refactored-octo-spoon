# Axiom Canine — Next.js Website

Professional dog training website for Axiom Canine, Jacksonville, FL. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Netlify Forms.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Modules (`app/globals.css`)
- **Fonts:** Google Fonts via `next/font` (Oswald + Chivo)
- **Forms:** Netlify Forms (no backend required)
- **Hosting:** Netlify

## Project Structure

```
axiom-canine/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, JSON-LD, SiteLayout)
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── globals.css         # Global styles (Tailwind + custom CSS)
│   ├── behavior/
│   │   └── page.tsx        # Behavior Modification page
│   ├── obedience/
│   │   └── page.tsx        # Advanced Obedience page
│   ├── community/
│   │   └── page.tsx        # Axiom Cares page
│   └── components/
│       ├── SiteLayout.tsx  # Client wrapper (modal state + event bus)
│       ├── Navbar.tsx      # Navigation (uses next/link + usePathname)
│       ├── Footer.tsx      # Footer
│       ├── IntakeModal.tsx # Intake form (Netlify Forms)
│       ├── OpenModalButton.tsx  # Button that triggers modal via custom event
│       └── ErrorBoundary.tsx    # React error boundary
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
├── netlify.toml            # Netlify build + plugin config
├── .env.example            # Environment variable template
├── .netlifyignore
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Local Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/pmau45/refactored-octo-spoon.git
cd refactored-octo-spoon

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. Push this repository to GitHub
2. Log in to [app.netlify.com](https://app.netlify.com)
3. Click **Add new site → Import an existing project**
4. Select your GitHub repository
5. Netlify auto-detects `netlify.toml` — build settings are pre-configured
6. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` → your production URL (e.g., `https://axiomcanine.com`)
7. Click **Deploy**

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Required Netlify Plugin

The `netlify.toml` includes `@netlify/plugin-nextjs` which handles:
- Server-side rendering via Netlify Functions
- Image optimization
- API routes (if added later)

Install it locally for testing:

```bash
npm install --save-dev @netlify/plugin-nextjs
```

## Netlify Forms Setup

The intake form uses **Netlify Forms** — no backend code required.

### How It Works

1. The form in `IntakeModal.tsx` has `data-netlify="true"` and `name="intake"`
2. Netlify detects the form at build time and creates a form endpoint
3. On submit, the form POSTs to `/` with `Content-Type: application/x-www-form-urlencoded`
4. Submissions appear in the **Netlify Dashboard → Forms**

### Spam Prevention

- **Honeypot field** (`bot-field`): Hidden field that bots fill out; legitimate users won't
- **Netlify Akismet**: Enable in Netlify Dashboard → Forms → Spam Filters

### Viewing Submissions

Go to: **Netlify Dashboard → Your Site → Forms → intake**

### Email Notifications

Set up in: **Netlify Dashboard → Forms → intake → Form notifications**

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL for canonical links and OG tags | `https://axiomcanine.com` |
| `NEXT_TELEMETRY_DISABLED` | Disables Next.js telemetry | `1` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID (optional) | — |

## Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, philosophy, services overview |
| `/behavior` | Behavior Modification | Reactivity, aggression, resource guarding |
| `/obedience` | Advanced Obedience | Off-leash reliability, recall, place command |
| `/community` | Axiom Cares | Free rescue/adoption support |

## Accessibility

- WCAG 2.2 AA targeted
- ARIA labels on all interactive elements
- Skip-to-content link for keyboard users
- Focus trap in modal dialog
- `aria-required`, `aria-invalid`, `aria-describedby` on all form fields
- Error messages with `role="alert"` for screen readers
- Semantic HTML throughout (`header`, `nav`, `main`, `footer`, `article`, `section`, `address`)
- Proper heading hierarchy (h1 → h2 → h3, no skipped levels)

## Performance

- Fonts loaded via `next/font` (zero layout shift, self-hosted)
- Images use Next.js `<Image>` component for optimization
- CSS-in-JS replaced with Tailwind + `globals.css`
- Production source maps disabled
- Static pages pre-rendered at build time
- Security headers configured in `netlify.toml` and `next.config.js`

## License

Private — All rights reserved, Axiom Canine.
