# Xapika - Railway Vehicle Maintenance Solutions

유럽 철도차량 유지보수 전문 기업 **Xapika Sp. z o.o.** 의 공식 웹사이트입니다.
정비(Maintenance), 부품(Parts), 컨설팅(Consulting), 교육(Training) 서비스를 소개하며, 영어/한국어 다국어를 지원합니다.

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js (App Router) | 16.1.5 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Framer Motion | 12.x |
| Icons | Lucide React | 0.563 |
| i18n | next-intl | 4.7 |
| Form | React Hook Form + Zod | 7.x / 4.x |
| Email | Resend | 6.x |
| Package Manager | pnpm | - |
| Deployment | Vercel | - |

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

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

# Lint
pnpm lint
```

http://localhost:3000 에서 확인할 수 있습니다.

### Environment Variables

`.env.local` 파일을 생성하고 아래 값을 설정합니다.

```env
# Required - Contact form email delivery
RESEND_API_KEY=re_xxxxx

# Optional
NEXT_PUBLIC_SITE_URL=https://xapika.com
GOOGLE_SITE_VERIFICATION=xxxxx
```

**Resend 설정 방법:**

1. [resend.com](https://resend.com)에서 계정 생성
2. 도메인 인증
3. API 키 발급
4. `lib/email.ts`에서 발신자/수신자 주소 확인:
   - `from: "Xapika Website <noreply@xapika.com>"`
   - `to: ["contact@xapika.com"]`

---

## Project Structure

```
xapika-website/
├── app/
│   ├── [locale]/               # 다국어 라우팅 (en, ko)
│   │   ├── page.tsx            # 홈페이지
│   │   ├── about/page.tsx      # 회사 소개
│   │   ├── services/page.tsx   # 서비스 목록
│   │   ├── services/[slug]/    # 서비스 상세 (동적 라우트)
│   │   ├── contact/page.tsx    # 문의하기
│   │   ├── privacy/page.tsx    # 개인정보처리방침
│   │   └── terms/page.tsx      # 이용약관
│   ├── api/
│   │   └── contact/route.ts    # Contact form API endpoint
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles (Tailwind)
│   ├── sitemap.ts              # Dynamic sitemap generation
│   └── robots.ts               # Robots.txt generation
│
├── components/
│   ├── home/                   # 홈페이지 섹션
│   │   ├── HeroSection.tsx     # 히어로 (비디오 배경 + 패럴랙스)
│   │   ├── ServicesOverview.tsx # 서비스 개요 그리드
│   │   ├── AboutPreview.tsx    # 회사 소개 프리뷰
│   │   ├── PartnersSlider.tsx  # 파트너사 로고 슬라이더
│   │   └── ContactCTA.tsx      # CTA 섹션
│   ├── about/                  # About 페이지
│   │   ├── CompanyOverview.tsx  # 회사 개요
│   │   ├── Timeline.tsx        # 연혁 타임라인
│   │   ├── VisionMission.tsx   # 비전/미션
│   │   └── CEOIntro.tsx        # CEO 인사말
│   ├── services/               # 서비스 페이지
│   │   ├── ServicesHero.tsx    # 서비스 히어로
│   │   └── ServiceCategories.tsx
│   ├── contact/                # 문의 페이지
│   │   ├── ContactForm.tsx     # 문의 폼 (validation + submission)
│   │   └── ContactInfo.tsx     # 연락처 정보
│   ├── layout/                 # 공통 레이아웃
│   │   ├── Header.tsx          # 네비게이션 헤더
│   │   ├── Footer.tsx          # 푸터
│   │   ├── MobileMenu.tsx      # 모바일 메뉴 (햄버거)
│   │   ├── LanguageSwitcher.tsx # 언어 전환
│   │   └── CookieBanner.tsx    # 쿠키 동의 배너
│   └── ui/                     # 공통 UI 컴포넌트
│       ├── Button.tsx          # 버튼 (variant, size)
│       ├── Card.tsx            # 카드
│       ├── AnimatedSection.tsx # 스크롤 애니메이션 래퍼
│       └── PageHero.tsx        # 페이지 히어로 공통
│
├── lib/
│   ├── i18n/                   # next-intl 설정
│   ├── email.ts                # Resend 이메일 유틸리티
│   ├── validations.ts          # Zod 스키마 정의
│   └── styles.ts               # 공유 스타일 유틸리티
│
├── data/
│   └── services.ts             # 서비스 데이터 정의
│
├── messages/
│   ├── en.json                 # 영어 번역
│   └── ko.json                 # 한국어 번역
│
├── hooks/                      # Custom React hooks
│
├── public/
│   ├── images/                 # 정적 이미지
│   │   ├── about/              # About 페이지 이미지
│   │   ├── services/           # 서비스 이미지
│   │   └── partners/           # 파트너사 로고
│   └── videos/
│       └── hero-bg.mp4         # 히어로 배경 비디오
│
├── middleware.ts               # 언어 감지 미들웨어
├── PRD_Xapika_Website.md       # 제품 요구사항 문서
├── TODO.md                     # 남은 작업 목록
└── MIDJOURNEY_PROMPTS.md       # 이미지 생성 프롬프트
```

---

## Features

### Multi-language (i18n)

| 항목 | 내용 |
|------|------|
| 지원 언어 | English (기본), Korean |
| URL 구조 | 동일 URL (언어 prefix 없음) |
| 감지 우선순위 | Cookie → Accept-Language → GeoIP → Default |
| 쿠키 | `NEXT_LOCALE` |

**번역 추가 방법:**

```tsx
// 1. messages/en.json, messages/ko.json에 키 추가
// 2. 컴포넌트에서 사용
import { useTranslations } from "next-intl";

function MyComponent() {
  const t = useTranslations("namespace");
  return <h1>{t("key")}</h1>;
}
```

### Pages

| Route | Description |
|-------|-------------|
| `/` | 홈 - Hero, Services, About preview, Partners, CTA |
| `/about` | 회사 개요, 연혁, 비전/미션, CEO 인사말 |
| `/services` | 서비스 카테고리 목록 |
| `/services/[slug]` | 서비스 상세 (maintenance, parts, consulting, training) |
| `/contact` | 문의 폼 + 연락처 정보 |
| `/privacy` | 개인정보처리방침 |
| `/terms` | 이용약관 |

### Contact Form

- **Client-side**: React Hook Form + Zod validation
- **Server-side**: API route에서 Zod 재검증
- **Email**: Resend를 통한 이메일 발송 + 자동 응답 확인 메일
- **보안**: Honeypot 필드 (스팸 방지), IP 기반 Rate Limiting (5회/분)

### SEO

- `sitemap.ts`: 동적 사이트맵 생성 (다국어 hreflang 포함)
- `robots.ts`: Robots.txt 설정
- Open Graph & Twitter Card 메타 태그
- Security headers (X-Frame-Options, X-Content-Type-Options 등)

### Animation

Framer Motion 기반 애니메이션:
- 스크롤 기반 fade-in / slide-up
- Hero 섹션 패럴랙스 효과
- Partners 무한 슬라이더
- 페이지 전환 효과

---

## Development Guide

### 서비스 추가 방법

1. `data/services.ts`에 서비스 데이터 추가
2. `messages/en.json`, `messages/ko.json`의 `home.services.items`에 번역 추가
3. 동적 라우팅으로 `/services/[slug]` 페이지가 자동 생성됨

### 스타일 유틸리티 사용

```tsx
import { formStyles, getInputClasses, animations } from "@/lib/styles";

// Form inputs with error state
<input className={getInputClasses(!!errors.field)} />
<label className={formStyles.label}>Label</label>

// Scroll animations
<motion.div {...animations.fadeInUp}>Content</motion.div>
```

---

## Security

| 항목 | 설명 |
|------|------|
| HTTPS | 강제 적용 |
| Security Headers | X-Frame-Options, X-Content-Type-Options, Referrer-Policy 등 |
| XSS Protection | 이메일 템플릿 이스케이프 처리 |
| CORS | API 엔드포인트 제한 |
| Rate Limiting | Contact form IP 기반 제한 (5회/분) |
| Spam Protection | Honeypot 필드 |

---

## Assets (Production)

배포 전 다음 이미지 파일을 추가해야 합니다.
프롬프트는 `MIDJOURNEY_PROMPTS.md` 파일을 참고하세요.

```
public/
├── images/
│   ├── hero-poster.jpg          # 비디오 포스터 (1920x1080)
│   ├── og-image.jpg             # Open Graph (1200x630)
│   ├── about/
│   │   ├── vision.jpg           # 비전 섹션 배경 (1920x1080)
│   │   ├── mission.jpg          # 미션 섹션 배경 (1920x1080)
│   │   └── ceo-photo.jpg        # CEO 프로필 (400x400)
│   ├── services/
│   │   ├── maintenance.jpg      # 정비 서비스 (1200x800)
│   │   ├── parts.jpg            # 부품 서비스 (800x600)
│   │   ├── consulting.jpg       # 컨설팅 서비스 (800x600)
│   │   └── training.jpg         # 교육 서비스 (1200x400)
│   └── partners/
│       └── partner-1~6.svg      # 파트너사 로고
└── videos/
    └── hero-bg.mp4              # 히어로 배경 비디오 ✅
```

---

## Deployment

### Vercel (권장)

1. GitHub에 push
2. Vercel에서 프로젝트 import
3. Environment variables 설정
4. 배포

### Domain

| Domain | 용도 |
|--------|------|
| `xapika.com` | Primary |
| `xapika.net` | → xapika.com redirect |
| `xapika.pl` | → xapika.com redirect |

---

## Browser Support

- Chrome (latest 2)
- Safari (latest 2)
- Edge (latest 2)
- Firefox (latest 2)

---

## Documentation

| 문서 | 설명 |
|------|------|
| `PRD_Xapika_Website.md` | 제품 요구사항 문서 (전체 기능 명세) |
| `TODO.md` | 남은 작업 및 배포 체크리스트 |
| `MIDJOURNEY_PROMPTS.md` | 이미지 생성용 Midjourney 프롬프트 |

## Design References

- [Stadler Rail](https://www.stadlerrail.com/en)
- [Siemens Mobility](https://www.mobility.siemens.com/)
- [Rotem SRS](http://www.rotemsrs.co.kr/)

---

## License

Copyright 2026 Xapika Sp. z o.o. All rights reserved.
