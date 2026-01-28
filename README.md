# Xapika - Railway Vehicle Maintenance Solutions

Xapika 주식회사 공식 홈페이지입니다. 철도차량 유지보수 서비스를 제공하는 글로벌 기업의 웹사이트입니다.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.1.5 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| i18n | next-intl 4.7 |
| Form | React Hook Form + Zod |
| Email | Resend |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
xapika-website/
├── app/
│   ├── [locale]/           # Localized pages (en, ko)
│   │   ├── page.tsx        # Home
│   │   ├── about/          # About page
│   │   ├── services/       # Services + [slug] dynamic routes
│   │   ├── contact/        # Contact page
│   │   ├── privacy/        # Privacy policy
│   │   └── terms/          # Terms of service
│   ├── api/
│   │   └── contact/        # Contact form API
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Header, Footer, MobileMenu, etc.
│   ├── home/               # Homepage sections
│   ├── about/              # About page components
│   ├── services/           # Services components
│   ├── contact/            # Contact form & info
│   └── ui/                 # Shared UI components (Button, Card, etc.)
├── lib/
│   ├── i18n/               # i18n configuration
│   ├── email.ts            # Resend email utility
│   ├── validations.ts      # Zod schemas
│   └── styles.ts           # Shared style utilities
├── data/
│   └── services.ts         # Service data definitions
├── messages/
│   ├── en.json             # English translations
│   └── ko.json             # Korean translations
├── public/
│   ├── images/             # Static images
│   └── videos/             # Hero video
├── middleware.ts           # Language detection
├── TODO.md                 # Remaining tasks
└── PRD_Xapika_Website.md   # Product Requirements Document
```

## Features

### Multi-language Support (i18n)

- **Languages**: English (default), Korean
- **URL Structure**: Same URL for all languages (no `/en`, `/ko` prefix)
- **Detection Priority**:
  1. Cookie preference (`NEXT_LOCALE`)
  2. Browser `Accept-Language` header
  3. GeoIP (Korea → Korean)
  4. Default (English)

### Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Hero, Services, About preview, Partners, CTA |
| `/about` | Company overview, History, Vision, CEO message |
| `/services` | Service categories |
| `/services/[slug]` | Service detail (maintenance, parts, consulting, training) |
| `/contact` | Contact form with email integration |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

### Contact Form

- Client-side validation with Zod
- Server-side validation
- Resend email integration
- Honeypot spam protection
- Rate limiting (5 requests/minute)
- Auto-reply confirmation email

### SEO

- Dynamic sitemap.xml generation
- Robots.txt configuration
- Open Graph & Twitter Card meta tags
- hreflang tags for multi-language
- Security headers configured

## Environment Variables

Create `.env.local` with:

```env
# Required for production
RESEND_API_KEY=re_xxxxx

# Optional
NEXT_PUBLIC_SITE_URL=https://xapika.com
GOOGLE_SITE_VERIFICATION=xxxxx
```

### Resend Setup

1. Create account at [resend.com](https://resend.com)
2. Verify your domain
3. Get API key
4. Update sender addresses in `lib/email.ts`:
   - `from: "Xapika Website <noreply@xapika.com>"`
   - `to: ["contact@xapika.com"]`

## Development

### Adding New Translations

1. Add keys to `messages/en.json`
2. Add Korean translations to `messages/ko.json`
3. Use in components:

```tsx
import { useTranslations } from "next-intl";

function MyComponent() {
  const t = useTranslations("namespace");
  return <h1>{t("key")}</h1>;
}
```

### Adding New Services

1. Add service data to `data/services.ts`
2. Add translations to `messages/*.json` under `home.services.items`
3. The service page is automatically generated via dynamic routing

### Using Style Utilities

```tsx
import { formStyles, getInputClasses, animations } from "@/lib/styles";

// Form inputs
<input className={getInputClasses(!!errors.field)} />
<label className={formStyles.label}>Label</label>

// Animations
<motion.div {...animations.fadeInUp}>Content</motion.div>
```

## Scripts

```bash
pnpm dev        # Development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## Browser Support

- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Firefox (latest 2 versions)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Domain Configuration

- Primary: `xapika.com`
- Redirects: `xapika.net`, `xapika.pl` → `xapika.com`

## Security

- HTTPS enforced
- Security headers configured (X-Frame-Options, X-Content-Type-Options, etc.)
- XSS protection in email templates
- CORS restrictions on API
- Rate limiting on contact form
- Honeypot spam protection

## Assets Required

Before production deployment, add these files:

```
public/
├── images/
│   ├── hero-poster.jpg    # Video poster (1920x1080)
│   ├── og-image.jpg       # Open Graph image (1200x630)
│   └── partners/          # Partner logos (SVG recommended)
└── videos/
    └── hero-bg.mp4        # Hero background video
```

## Remaining Tasks

See [TODO.md](./TODO.md) for the complete list of remaining tasks including:

- [ ] Map integration (Google Maps)
- [ ] Past projects gallery
- [ ] Google Analytics integration
- [ ] Team section (optional)
- [ ] Newsletter subscription

## Documentation

- **PRD**: `PRD_Xapika_Website.md` - Full product requirements
- **TODO**: `TODO.md` - Remaining tasks and deployment checklist

## Design References

- [Stadler Rail](https://www.stadlerrail.com/en)
- [Siemens Mobility](https://www.mobility.siemens.com/)
- [Rotem SRS](http://www.rotemsrs.co.kr/)

## License

Copyright 2026 Xapika Sp. z o.o. All rights reserved.
