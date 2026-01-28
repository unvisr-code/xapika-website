# PRD: Xapika 홈페이지 리뉴얼

## 1. 프로젝트 개요

### 1.1 프로젝트 정보
- **프로젝트명**: 하리카(Xapika Sp. z o.o.) 주식회사 홈페이지 리뉴얼
- **발주사**: 주식회사 비전잇
- **개발 도구**: Claude Code
- **기준 문서**: 구매사양서 (2026.01.23)

### 1.2 프로젝트 목적
해외 철도차량 유지보수 기업 하리카 주식회사의 홈페이지를 전면 리뉴얼하여:
- 한국 및 해외 도메인 최적화를 통한 가시성 향상
- 글로벌 철도차량 운영사 대상 마케팅 효과 극대화
- 안정적이고 현대적인 웹 플랫폼 구축

### 1.3 대상 사용자
- 대한민국 철도차량 운영사
- 해외(유럽, 중동 등) 철도차량 운영사
- 잠재 파트너 및 투자자

---

## 2. 기술 스택 (Claude Code 기반)

### 2.1 프론트엔드
- **프레임워크**: Next.js 14+ (App Router)
- **스타일링**: Tailwind CSS
- **언어**: TypeScript
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React

### 2.2 백엔드
- **API**: Next.js API Routes / Server Actions
- **이메일 전송**: Resend 또는 Nodemailer
- **폼 검증**: Zod + React Hook Form

### 2.3 배포 환경
- **호스팅**: Vercel (권장) 또는 발주사 제공 서버
- **도메인**: xapika.com / xapika.net / xapika.pl

### 2.4 기타
- **다국어**: next-intl 또는 next-i18next
- **SEO**: Next.js Metadata API
- **지도**: Google Maps API 또는 Kakao Maps API

---

## 3. 페이지 구성 및 기능 명세

### 3.1 공통 컴포넌트

#### 3.1.1 헤더 (Header)
| 요소 | 설명 |
|------|------|
| 로고 | 클릭 시 메인 페이지 이동 |
| 네비게이션 | 회사소개, 사업/서비스, 문의 |
| 언어 전환 | EN / KO 토글 버튼 |
| 모바일 메뉴 | 햄버거 메뉴 (반응형) |

#### 3.1.2 푸터 (Footer)
| 요소 | 설명 |
|------|------|
| 회사 정보 | 회사명, 주소, 연락처 |
| 빠른 링크 | 주요 페이지 링크 |
| 법적 고지 | 개인정보처리방침, 이용약관 |
| 저작권 | Copyright 표시 |

#### 3.1.3 쿠키 동의 배너
| 요소 | 설명 |
|------|------|
| 안내 문구 | 쿠키 사용 목적 설명 |
| 필수 쿠키 | 언어 설정, 세션 유지 (자동 허용) |
| 선택 쿠키 | 방문 통계 (Google Analytics - 추후) |
| 버튼 | 수락 / 거부 / 설정 |

---

### 3.2 메인 페이지 (Home)

**URL**: `/` (또는 `/[locale]`)

#### 섹션 구성

| 섹션 | 컴포넌트 | 설명 |
|------|----------|------|
| Hero | HeroSection | 회사 핵심 메시지, 배경 영상/이미지, CTA 버튼 |
| Services | ServicesOverview | 주요 서비스 3-4개 카드 형태 소개 |
| About | AboutPreview | 회사 소개 요약 + 더보기 링크 |
| References | ReferencesSection | 파트너사 로고 슬라이더 |
| CTA | ContactCTA | 문의 유도 섹션 |

#### 기능 요구사항
```
- [ ] 페이지 스크롤 시 섹션별 애니메이션 (fade-in, slide-up)
- [ ] Hero 섹션 배경 영상 자동 재생 (음소거)
- [ ] 서비스 카드 hover 효과
- [ ] 파트너 로고 무한 슬라이더
- [ ] CTA 버튼 클릭 시 문의 페이지 이동
```

---

### 3.3 회사 소개 페이지 (About)

**URL**: `/about` (또는 `/[locale]/about`)

#### 섹션 구성

| 섹션 | 컴포넌트 | 설명 |
|------|----------|------|
| Overview | CompanyOverview | 회사 개요 및 핵심 가치 |
| History | Timeline | 연혁 타임라인 |
| Vision | VisionMission | 비전 및 미션 |
| CEO | CEOIntro | 대표이사 소개 (사진, 인사말) |
| Team | TeamSection | 조직원/팀 소개 (선택적) |

#### 기능 요구사항
```
- [ ] 연혁 타임라인 인터랙티브 스크롤
- [ ] 비전/미션 아이콘 애니메이션
- [ ] CEO 섹션 프로페셔널 레이아웃
- [ ] 반응형 그리드 레이아웃
```

---

### 3.4 사업 및 서비스 페이지 (Services)

**URL**: `/services` (또는 `/[locale]/services`)
**서브 페이지**: `/services/[service-slug]`

#### 섹션 구성

| 섹션 | 컴포넌트 | 설명 |
|------|----------|------|
| Overview | ServicesHero | 사업 영역 총괄 소개 |
| Categories | ServiceCategories | 사업 분야별 카드/탭 |
| Detail | ServiceDetail | 개별 서비스 상세 (서브페이지) |
| Projects | PastProjects | 과거 사업 내역 갤러리 |
| Locations | LocationsMap | 사업장 위치 지도 |

#### 사업 분야 (예시)
1. 철도차량 유지보수
2. 부품 공급
3. 기술 컨설팅
4. 교육 훈련

#### 기능 요구사항
```
- [ ] 서비스 카테고리 탭/아코디언 UI
- [ ] 개별 서비스 상세 페이지 동적 라우팅
- [ ] 프로젝트 갤러리 이미지 라이트박스
- [ ] 사업장 위치 지도 API 연동
- [ ] 서비스 페이지 간 네비게이션
```

---

### 3.5 문의 페이지 (Contact)

**URL**: `/contact` (또는 `/[locale]/contact`)

#### 섹션 구성

| 섹션 | 컴포넌트 | 설명 |
|------|----------|------|
| Form | ContactForm | 문의 입력 폼 |
| Info | ContactInfo | 연락처 정보 |
| Map | LocationMap | 본사/지사 위치 지도 |

#### 문의 폼 필드

| 필드명 | 타입 | 필수 | 검증 |
|--------|------|------|------|
| 이름 | text | Y | 2자 이상 |
| 회사명 | text | N | - |
| 이메일 | email | Y | 이메일 형식 |
| 전화번호 | tel | N | 전화번호 형식 |
| 문의 유형 | select | Y | 사전 정의 옵션 |
| 문의 내용 | textarea | Y | 10자 이상 |
| 개인정보 동의 | checkbox | Y | 체크 필수 |

#### 기능 요구사항
```
- [ ] 클라이언트 사이드 폼 검증 (Zod)
- [ ] 서버 사이드 폼 처리 (Server Action)
- [ ] 이메일 전송 연동 (Resend/Nodemailer)
- [ ] 스팸 방지 (Honeypot 필드 또는 reCAPTCHA)
- [ ] 제출 성공/실패 토스트 메시지
- [ ] 제출 후 폼 초기화
- [ ] Google Maps 또는 Kakao Maps 삽입
```

---

### 3.6 법적 페이지

#### 3.6.1 개인정보처리방침
**URL**: `/privacy`
- 정적 콘텐츠 페이지
- 마크다운 또는 HTML 렌더링

#### 3.6.2 이용약관
**URL**: `/terms`
- 정적 콘텐츠 페이지
- 마크다운 또는 HTML 렌더링

---

## 4. 다국어 지원 (i18n)

### 4.1 지원 언어
| 코드 | 언어 | 기본 |
|------|------|------|
| en | English | O |
| ko | 한국어 | - |

### 4.2 URL 구조 (동일 URL 유지)
```
xapika.com/about        # 모든 언어 동일 URL
xapika.com/services     # 언어에 따라 콘텐츠만 변경
xapika.com/contact      # URL 경로에 언어 코드 없음
```

> **핵심 원칙**: URL은 언어와 무관하게 동일하게 유지하고, 콘텐츠만 사용자 환경에 맞게 자동 전환

### 4.3 언어 자동 감지 로직

#### 감지 우선순위
```
1순위: 사용자 선택 (쿠키/로컬스토리지에 저장된 언어 설정)
2순위: 브라우저 언어 설정 (Accept-Language 헤더)
3순위: IP 기반 지역 감지 (GeoIP)
4순위: 기본 언어 (English)
```

#### 구현 방식
```typescript
// middleware.ts - 서버 사이드 언어 감지
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. 쿠키에서 사용자 선택 언어 확인
  const userPreference = request.cookies.get('preferred-locale')?.value;

  // 2. Accept-Language 헤더에서 브라우저 언어 감지
  const acceptLanguage = request.headers.get('accept-language');
  const browserLocale = detectBrowserLocale(acceptLanguage);

  // 3. GeoIP로 지역 감지 (Vercel Edge 또는 외부 서비스)
  const country = request.geo?.country || 'US';
  const geoLocale = getLocaleByCountry(country);

  // 우선순위에 따라 언어 결정
  const locale = userPreference || browserLocale || geoLocale || 'en';

  // 응답 헤더에 언어 정보 설정
  const response = NextResponse.next();
  response.cookies.set('detected-locale', locale);
  return response;
}
```

#### 브라우저 언어 감지 함수
```typescript
function detectBrowserLocale(acceptLanguage: string | null): string | null {
  if (!acceptLanguage) return null;

  const supportedLocales = ['en', 'ko'];
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase());

  for (const lang of languages) {
    // 정확한 매칭 (ko, en)
    if (supportedLocales.includes(lang)) return lang;
    // 부분 매칭 (ko-KR → ko, en-US → en)
    const baseLang = lang.split('-')[0];
    if (supportedLocales.includes(baseLang)) return baseLang;
  }

  return null;
}
```

#### 지역 기반 언어 매핑
```typescript
function getLocaleByCountry(country: string): string {
  const localeMap: Record<string, string> = {
    // 한국어 사용 국가
    'KR': 'ko',  // 대한민국

    // 영어 기본 (그 외 모든 국가)
    // 폴란드, 유럽, 미국, 중동 등
  };

  return localeMap[country] || 'en';
}
```

### 4.4 사용자 언어 전환 UI

#### 언어 전환 컴포넌트
```typescript
// components/LanguageSwitcher.tsx
'use client';

import { useLocale } from '@/hooks/useLocale';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const handleChange = (newLocale: string) => {
    // 쿠키에 사용자 선택 저장 (1년 유효)
    document.cookie = `preferred-locale=${newLocale}; max-age=31536000; path=/`;
    setLocale(newLocale);
    // 페이지 새로고침 없이 콘텐츠 전환
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleChange('en')}
        className={locale === 'en' ? 'font-bold' : 'opacity-70'}
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => handleChange('ko')}
        className={locale === 'ko' ? 'font-bold' : 'opacity-70'}
      >
        KO
      </button>
    </div>
  );
}
```

### 4.5 번역 파일 구조
```
messages/
├── en.json          # 영문 번역
└── ko.json          # 국문 번역
```

#### 번역 파일 예시 (en.json)
```json
{
  "common": {
    "nav": {
      "about": "About",
      "services": "Services",
      "contact": "Contact"
    },
    "cta": {
      "learnMore": "Learn More",
      "contactUs": "Contact Us"
    }
  },
  "home": {
    "hero": {
      "title": "Railway Excellence,\nGlobal Standards",
      "subtitle": "Your trusted partner in railway vehicle maintenance"
    }
  }
}
```

### 4.6 SEO 고려사항 (동일 URL)

#### hreflang 태그 설정
```html
<!-- 동일 URL에서 다국어 지원 시 -->
<link rel="alternate" hreflang="en" href="https://xapika.com/about" />
<link rel="alternate" hreflang="ko" href="https://xapika.com/about" />
<link rel="alternate" hreflang="x-default" href="https://xapika.com/about" />
```

#### Content-Language 헤더
```typescript
// 응답 헤더에 현재 표시 언어 명시
headers: {
  'Content-Language': locale  // 'en' 또는 'ko'
}
```

### 4.7 기술 스택 변경사항

| 기존 계획 | 변경 후 |
|-----------|---------|
| next-intl (URL 기반) | next-intl (쿠키/헤더 기반) 또는 커스텀 Context |
| /[locale]/ 라우팅 | 단일 라우팅 (언어 코드 없음) |
| URL로 언어 전환 | 쿠키 + 상태로 언어 전환 |

### 4.8 사용자 시나리오

```
시나리오 1: 한국에서 처음 방문
1. 사용자가 xapika.com 접속
2. IP 감지 → 한국 (KR)
3. 브라우저 언어 확인 → ko-KR
4. 자동으로 한국어 콘텐츠 표시
5. URL은 xapika.com 그대로 유지

시나리오 2: 영어로 전환 희망
1. 헤더의 언어 전환 버튼 클릭 (EN)
2. 쿠키에 'preferred-locale=en' 저장
3. 페이지 콘텐츠가 영어로 전환
4. URL은 그대로 xapika.com
5. 이후 재방문 시에도 영어로 표시 (쿠키 우선)

시나리오 3: 폴란드에서 방문
1. IP 감지 → 폴란드 (PL)
2. 브라우저 언어 → pl-PL (지원 안함)
3. 기본 언어 영어로 표시
4. 필요시 수동으로 한국어 전환 가능
```

---

## 5. 반응형 디자인

### 5.1 브레이크포인트 (Tailwind 기준)
| 크기 | 픽셀 | 대상 |
|------|------|------|
| sm | 640px | 모바일 (가로) |
| md | 768px | 태블릿 |
| lg | 1024px | 노트북 |
| xl | 1280px | 데스크탑 |
| 2xl | 1536px | 대형 모니터 |

### 5.2 브라우저 지원
- Chrome (최신 2버전)
- Safari (최신 2버전)
- Microsoft Edge (최신 2버전)
- Firefox (권장)

---

## 6. 디자인 가이드라인

> **레퍼런스 분석 기반**: Stadler Rail, Siemens Mobility, Rotem SRS 등 글로벌 철도 기업 웹사이트의 공통 디자인 패턴을 분석하여 반영

### 6.1 디자인 컨셉

#### 전체 톤앤매너
- **키워드**: Professional, Trustworthy, Innovative, Global
- **분위기**: 기술력과 신뢰감을 전달하는 클린하고 모던한 디자인
- **특징**: 대형 비주얼 중심, 여백의 미, 산업적 이미지와 세련된 그래픽의 조화

#### 레퍼런스 사이트 디자인 특성

| 사이트 | 주요 특징 |
|--------|----------|
| Stadler Rail | 풀스크린 히어로 영상, 그리드 기반 서비스 카드, 블루/화이트 조합, 깔끔한 타이포그래피 |
| Siemens Mobility | 대담한 색상 사용, 다이나믹 레이아웃, 데이터 비주얼라이제이션, 테크 감성 |
| Rotem SRS | 기업 아이덴티티 강조, 사진 중심 비주얼, 전통적 코퍼레이트 스타일 |

### 6.2 브랜드 컬러

#### Primary Palette
| 용도 | 색상명 | HEX | RGB | 사용처 |
|------|--------|-----|-----|--------|
| Primary | Deep Navy | #0A1628 | 10, 22, 40 | 헤더, 푸터, 주요 배경 |
| Primary Light | Steel Blue | #1E3A5F | 30, 58, 95 | 버튼, 링크, 강조 |
| Secondary | Electric Blue | #0066CC | 0, 102, 204 | CTA 버튼, 액센트 |
| Accent | Coral Orange | #FF6B35 | 255, 107, 53 | 하이라이트, 알림 |

#### Neutral Palette
| 용도 | 색상명 | HEX | 사용처 |
|------|--------|-----|--------|
| White | Pure White | #FFFFFF | 배경, 카드 |
| Light Gray | Cloud | #F5F7FA | 섹션 배경 |
| Medium Gray | Slate | #6B7280 | 보조 텍스트 |
| Dark Gray | Charcoal | #374151 | 본문 텍스트 |
| Black | Ink Black | #111827 | 제목, 강조 텍스트 |

#### Semantic Colors
| 용도 | HEX | 사용처 |
|------|-----|--------|
| Success | #10B981 | 성공 메시지, 체크 |
| Warning | #F59E0B | 경고, 주의 |
| Error | #EF4444 | 오류, 필수 표시 |
| Info | #3B82F6 | 정보성 메시지 |

### 6.3 타이포그래피

#### 폰트 패밀리
```css
/* 영문 */
--font-heading: 'Inter', 'Helvetica Neue', sans-serif;
--font-body: 'Inter', 'Helvetica Neue', sans-serif;

/* 국문 */
--font-heading-ko: 'Pretendard', 'Noto Sans KR', sans-serif;
--font-body-ko: 'Pretendard', 'Noto Sans KR', sans-serif;
```

#### 타입 스케일
| 레벨 | 사이즈 (Desktop) | 사이즈 (Mobile) | Weight | Line Height | 용도 |
|------|------------------|-----------------|--------|-------------|------|
| Display | 64px (4rem) | 40px (2.5rem) | 700 | 1.1 | 히어로 헤드라인 |
| H1 | 48px (3rem) | 32px (2rem) | 700 | 1.2 | 페이지 타이틀 |
| H2 | 36px (2.25rem) | 28px (1.75rem) | 600 | 1.3 | 섹션 타이틀 |
| H3 | 28px (1.75rem) | 24px (1.5rem) | 600 | 1.4 | 서브 섹션 |
| H4 | 24px (1.5rem) | 20px (1.25rem) | 600 | 1.4 | 카드 타이틀 |
| Body Large | 18px (1.125rem) | 16px (1rem) | 400 | 1.6 | 리드 텍스트 |
| Body | 16px (1rem) | 16px (1rem) | 400 | 1.6 | 본문 |
| Small | 14px (0.875rem) | 14px (0.875rem) | 400 | 1.5 | 캡션, 레이블 |
| XSmall | 12px (0.75rem) | 12px (0.75rem) | 400 | 1.5 | 푸터, 법적 고지 |

### 6.4 레이아웃 시스템

#### 그리드 시스템
```css
/* 12 Column Grid */
--grid-columns: 12;
--grid-gutter: 24px;  /* Desktop */
--grid-gutter-mobile: 16px;  /* Mobile */
--container-max: 1440px;
--container-padding: 80px;  /* Desktop */
--container-padding-mobile: 20px;  /* Mobile */
```

#### 섹션 간격
| 구분 | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| 섹션 간 간격 | 120px | 80px | 60px |
| 컴포넌트 간 간격 | 48px | 32px | 24px |
| 요소 간 간격 | 24px | 16px | 12px |

### 6.5 컴포넌트 스타일

#### 버튼
```
Primary Button:
- Background: #0066CC
- Text: #FFFFFF
- Padding: 16px 32px
- Border Radius: 8px
- Hover: Background #0052A3, translateY(-2px)
- Active: Background #004080
- Transition: all 0.3s ease

Secondary Button:
- Background: transparent
- Border: 2px solid #0066CC
- Text: #0066CC
- Hover: Background #0066CC, Text #FFFFFF

Ghost Button:
- Background: transparent
- Text: #374151
- Hover: Background #F5F7FA
```

#### 카드
```
Service Card:
- Background: #FFFFFF
- Border Radius: 16px
- Box Shadow: 0 4px 6px -1px rgba(0,0,0,0.1)
- Padding: 32px
- Hover: translateY(-8px), shadow 증가
- Transition: all 0.3s ease

Feature Card:
- Background: linear-gradient(135deg, #0A1628, #1E3A5F)
- Text: #FFFFFF
- Icon: #0066CC
```

#### 입력 필드
```
Default:
- Border: 1px solid #D1D5DB
- Border Radius: 8px
- Padding: 12px 16px
- Background: #FFFFFF

Focus:
- Border: 2px solid #0066CC
- Box Shadow: 0 0 0 3px rgba(0,102,204,0.1)

Error:
- Border: 2px solid #EF4444
```

### 6.6 애니메이션 & 인터랙션

#### 기본 원칙
- **자연스러움**: 과하지 않은 미세한 움직임
- **목적성**: 사용자 주의 유도 및 피드백 제공
- **성능**: GPU 가속 속성 우선 사용 (transform, opacity)

#### 스크롤 애니메이션
```javascript
// Framer Motion 기반
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};
```

#### 페이지 전환 효과
| 요소 | 효과 | 지속시간 | Easing |
|------|------|----------|--------|
| 섹션 진입 | Fade In + Slide Up | 600ms | easeOut |
| 카드 호버 | Scale + Shadow | 300ms | easeInOut |
| 버튼 호버 | Background + Transform | 200ms | ease |
| 이미지 로드 | Fade In | 400ms | easeIn |
| 모달 | Scale + Fade | 300ms | easeOut |

### 6.7 이미지 & 미디어 가이드라인

#### 히어로 섹션
- **형식**: 영상 (MP4, WebM) 또는 고해상도 이미지
- **해상도**: 최소 1920x1080px (영상), 2560x1440px (이미지)
- **비율**: 16:9 권장
- **톤**: 실제 철도/기술 이미지, 블루 계열 오버레이

#### 서비스/프로젝트 이미지
- **형식**: WebP (PNG 폴백)
- **해상도**: 1200x800px (썸네일), 1920x1280px (상세)
- **스타일**: 전문적, 고품질, 일관된 색감

#### 아이콘
- **스타일**: Line icon (Lucide React)
- **사이즈**: 24px (기본), 32px (강조), 48px (피처)
- **색상**: 브랜드 컬러 또는 모노톤

### 6.8 페이지별 레이아웃 명세

#### 메인 페이지 와이어프레임
```
┌─────────────────────────────────────────┐
│ [Header - Fixed, Transparent → Solid]   │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │                                     │ │
│ │           HERO SECTION              │ │
│ │      Full-screen Video/Image        │ │
│ │      + Headline + CTA Button        │ │
│ │                                     │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │         SERVICES OVERVIEW           │ │
│ │   [Card] [Card] [Card] [Card]       │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │           ABOUT PREVIEW             │ │
│ │   Image | Text + Stats + Link       │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │        PARTNERS & REFERENCES        │ │
│ │   [Logo Slider - Auto Scroll]       │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │            CTA SECTION              │ │
│ │   "Ready to work with us?"          │ │
│ │        [Contact Button]             │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ [Footer - Multi-column]                 │
└─────────────────────────────────────────┘
```

#### 서브 페이지 공통 구조
```
┌─────────────────────────────────────────┐
│ [Header]                                │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │          PAGE HERO BANNER           │ │
│ │   Background Image + Title          │ │
│ │   + Breadcrumb Navigation           │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│                                         │
│            [PAGE CONTENT]               │
│                                         │
├─────────────────────────────────────────┤
│ [Footer]                                │
└─────────────────────────────────────────┘
```

### 6.9 헤더 상세 디자인

#### 데스크탑 헤더
```
┌──────────────────────────────────────────────────────────────┐
│ [Logo]          [About] [Services] [Contact]     [EN/KO] ▼  │
└──────────────────────────────────────────────────────────────┘

- 높이: 80px
- 배경: 투명 (스크롤 시 #0A1628)
- 로고 위치: 좌측
- 네비게이션: 우측
- 언어 전환: 최우측
```

#### 모바일 헤더
```
┌────────────────────────────────────────┐
│ [Logo]                          [≡]    │
└────────────────────────────────────────┘

- 높이: 64px
- 햄버거 메뉴 → 풀스크린 오버레이
```

### 6.10 푸터 상세 디자인

```
┌─────────────────────────────────────────────────────────────────────┐
│                           FOOTER                                     │
│  ┌─────────────┬─────────────┬─────────────┬─────────────────────┐  │
│  │   COMPANY   │   SERVICES  │   CONTACT   │      NEWSLETTER     │  │
│  │   - About   │  - Service1 │  - Email    │   [Email Input]     │  │
│  │   - History │  - Service2 │  - Phone    │   [Subscribe Btn]   │  │
│  │   - Team    │  - Service3 │  - Address  │                     │  │
│  └─────────────┴─────────────┴─────────────┴─────────────────────┘  │
│  ─────────────────────────────────────────────────────────────────  │
│  © 2026 Xapika. All rights reserved.  |  Privacy  |  Terms          │
└─────────────────────────────────────────────────────────────────────┘

- 배경: #0A1628
- 텍스트: #FFFFFF (제목), #9CA3AF (링크)
- 패딩: 80px 상하
```

---

## 7. SEO 요구사항

### 7.1 기본 메타 태그
```html
<title>Xapika - Railway Vehicle Maintenance Solutions</title>
<meta name="description" content="..." />
<meta name="keywords" content="railway, maintenance, vehicle, ..." />
<meta name="robots" content="index, follow" />
```

### 7.2 Open Graph
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
```

### 7.3 기술적 SEO
- sitemap.xml 자동 생성
- robots.txt 설정
- canonical URL 설정 (중복 컨텐츠 방지)
- 다국어 hreflang 태그
- 구조화된 데이터 (JSON-LD)

---

## 8. 보안 요구사항

### 8.1 HTTPS
- 모든 도메인 SSL 인증서 적용
- HTTP → HTTPS 자동 리다이렉트

### 8.2 보안 헤더
```javascript
// next.config.js
headers: [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
]
```

### 8.3 폼 보안
- CSRF 토큰 (필요시)
- 입력값 서버 사이드 검증
- Rate Limiting (문의 폼)

---

## 9. 도메인 설정

### 9.1 도메인 목록
| 도메인 | 용도 | 상태 |
|--------|------|------|
| xapika.com | 메인 (글로벌) | 신규 |
| xapika.net | 대체 도메인 | 신규 |
| xapika.pl | 폴란드 (레거시) | 기존 |

### 9.2 리다이렉트 정책
- xapika.pl → xapika.com (301 리다이렉트)
- xapika.net → xapika.com (301 리다이렉트)
- 또는 xapika.pl은 폴란드 전용으로 유지 (협의 필요)

---

## 10. 프로젝트 구조 (예시)

```
xapika-website/
├── app/
│   ├── page.tsx                  # 메인 페이지
│   ├── about/
│   │   └── page.tsx              # 회사소개
│   ├── services/
│   │   ├── page.tsx              # 서비스 목록
│   │   └── [slug]/
│   │       └── page.tsx          # 서비스 상세
│   ├── contact/
│   │   └── page.tsx              # 문의
│   ├── privacy/
│   │   └── page.tsx              # 개인정보처리방침
│   ├── terms/
│   │   └── page.tsx              # 이용약관
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # 문의 폼 API
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageSwitcher.tsx  # 언어 전환 UI
│   │   └── CookieBanner.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   └── ...
│   ├── about/
│   ├── services/
│   ├── contact/
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── ...
├── contexts/
│   └── LocaleContext.tsx         # 언어 상태 관리 Context
├── hooks/
│   └── useLocale.ts              # 언어 관련 커스텀 훅
├── lib/
│   ├── i18n.ts                   # 다국어 유틸리티
│   ├── locale-detection.ts       # 언어 감지 로직
│   ├── email.ts
│   └── validations.ts
├── messages/
│   ├── en.json                   # 영문 번역
│   └── ko.json                   # 국문 번역
├── middleware.ts                 # 언어 감지 미들웨어
├── public/
│   ├── images/
│   └── videos/
├── next.config.js
├── tailwind.config.ts
├── package.json
└── README.md
```

> **참고**: URL에 언어 코드가 없는 구조입니다. 언어는 쿠키/브라우저 설정/IP 기반으로 자동 감지되며, `LocaleContext`를 통해 앱 전체에서 관리됩니다.

---

## 11. 제외 범위 (Out of Scope)

다음 기능은 본 PRD 범위에 포함되지 않음:

| 항목 | 사유 |
|------|------|
| CMS (관리자 페이지) | 클라이언트 요청에 따라 제외 |
| 회원 시스템 | 초기 버전 범위 외 |
| 결제 기능 | 초기 버전 범위 외 |
| ERP 연동 | 초기 버전 범위 외 |
| 채팅/챗봇 | 초기 버전 범위 외 |

---

## 12. 마일스톤

| 단계 | 산출물 | 예상 기간 |
|------|--------|----------|
| 1차 | 기획 및 와이어프레임 | 1주 |
| 2차 | 디자인 시안 | 1-2주 |
| 3차 | 개발 (프론트엔드) | 2-3주 |
| 4차 | 개발 (백엔드/API) | 1주 |
| 5차 | 테스트 및 QA | 1주 |
| 6차 | 배포 및 검수 | 1주 |

*총 예상 기간: 7-9주*

---

## 13. 참고 레퍼런스

- Stadler Rail: https://www.stadlerrail.com/en
- Rotem SRS: http://www.rotemsrs.co.kr/
- Siemens Mobility: https://www.mobility.siemens.com/kr/en.html

---

## 14. 문서 이력

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| 1.0 | 2026-01-27 | Claude | 초안 작성 |

---

*본 문서는 구매사양서(2026.01.23)를 기반으로 작성되었으며, 상세 요구사항은 협의를 통해 조정될 수 있습니다.*
