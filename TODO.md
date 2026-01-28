# Xapika Website - TODO List

PRD 기반 남은 작업 목록입니다. 우선순위별로 정리되어 있습니다.

---

## High Priority (필수 기능)

### 1. Assets & Media
- [ ] Hero 배경 영상 추가 (`public/videos/hero-bg.mp4`)
- [ ] Hero 포스터 이미지 추가 (`public/images/hero-poster.jpg`)
- [ ] Open Graph 이미지 추가 (`public/images/og-image.jpg` - 1200x630)
- [ ] 파트너사 로고 이미지 추가 (`public/images/partners/`)
- [ ] About 페이지 이미지 (CEO, 회사 등)
- [ ] Services 페이지 이미지

### 2. Environment Variables
- [ ] Resend API 키 설정 (`RESEND_API_KEY`)
- [ ] 이메일 발신자 주소 확인 (`lib/email.ts`)
- [ ] Google Site Verification 설정

---

## Medium Priority (권장 기능)

### 3. Location Map Integration
> PRD 3.5: 문의 페이지에 지도 API 연동

- [ ] Google Maps API 키 발급
- [ ] `components/contact/LocationMap.tsx` 컴포넌트 구현
- [ ] Contact 페이지에 지도 섹션 추가
- [ ] 본사/지사 위치 마커 표시

### 4. Past Projects Gallery
> PRD 3.4: 과거 사업 내역 갤러리

- [ ] `components/services/PastProjects.tsx` 컴포넌트 구현
- [ ] 이미지 라이트박스 기능
- [ ] 프로젝트 데이터 구조 정의 (`data/projects.ts`)
- [ ] Services 페이지에 섹션 추가

### 5. SEO Enhancement
- [ ] JSON-LD 구조화된 데이터 추가 (Organization, WebSite)
- [ ] 각 페이지별 메타데이터 최적화
- [ ] canonical URL 검증

### 6. Analytics Integration
> PRD 3.1.3: 선택 쿠키 - Google Analytics

- [ ] Google Analytics 4 설정
- [ ] 쿠키 동의 연동 (선택 쿠키로 처리)
- [ ] 이벤트 트래킹 설정 (문의 폼 제출 등)

---

## Low Priority (선택 기능)

### 7. Team Section
> PRD 3.3: 조직원/팀 소개 (선택적)

- [ ] `components/about/TeamSection.tsx` 컴포넌트 구현
- [ ] 팀 멤버 데이터 구조 정의
- [ ] About 페이지에 섹션 추가

### 8. Newsletter Subscription
> PRD 6.10: 푸터 Newsletter 섹션

- [ ] 뉴스레터 구독 API 구현
- [ ] Footer에 구독 폼 추가
- [ ] 이메일 서비스 연동

---

## Technical Improvements (코드 품질)

### 9. Refactoring
- [ ] `Button.tsx`: 사용하지 않는 `as` 변수 제거
- [ ] Form input 클래스 유틸리티로 추출 (`lib/styles.ts`)
- [ ] 애니메이션 variants 공통화 (`lib/animations.ts`)

### 10. Testing
- [ ] 주요 컴포넌트 유닛 테스트 추가
- [ ] Contact Form E2E 테스트
- [ ] 다국어 전환 테스트

### 11. Performance
- [ ] 이미지 최적화 (WebP 변환)
- [ ] 폰트 서브셋팅
- [ ] 번들 사이즈 분석 및 최적화

---

## Deployment Checklist

배포 전 확인 사항:

- [ ] 환경 변수 설정 완료
- [ ] 도메인 DNS 설정 (xapika.com)
- [ ] SSL 인증서 활성화
- [ ] 리다이렉트 설정 (xapika.net, xapika.pl → xapika.com)
- [ ] Robots.txt 검증
- [ ] Sitemap 검증
- [ ] 모바일 반응형 테스트
- [ ] 크로스 브라우저 테스트
- [ ] Lighthouse 성능 점수 확인

---

## Completed Features

- [x] 프로젝트 초기 설정 (Next.js 16, TypeScript, Tailwind)
- [x] 다국어 지원 (next-intl) - EN/KO
- [x] Header/Footer 레이아웃
- [x] 모바일 메뉴
- [x] 언어 전환 (LanguageSwitcher)
- [x] Hero 섹션 (비디오 배경, 패럴랙스)
- [x] Services 개요 섹션
- [x] About Preview 섹션
- [x] Partners 슬라이더
- [x] Contact CTA 섹션
- [x] About 페이지 (Overview, Timeline, Vision, CEO)
- [x] Services 페이지 (카테고리, 상세 페이지)
- [x] Contact 페이지 (폼, 정보)
- [x] Contact Form API (Zod 검증, Resend 이메일)
- [x] 스팸 방지 (Honeypot, Rate Limiting)
- [x] Privacy Policy 페이지
- [x] Terms of Service 페이지
- [x] Cookie Banner
- [x] SEO 기본 설정 (sitemap.xml, robots.txt)
- [x] 보안 헤더 설정

---

## Notes

- PRD 문서: `PRD_Xapika_Website.md`
- 디자인 참고: Stadler Rail, Siemens Mobility, Rotem SRS
- 기술 스택: Next.js 16 + TypeScript + Tailwind CSS 4 + Framer Motion

---

*Last updated: 2026-01-28*
