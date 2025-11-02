# 프린들 팬페이지

미국 경제 유튜버 프린들의 공식 팬페이지입니다. Next.js 14, TypeScript, Tailwind CSS로 구축되었습니다.

## 주요 기능

- 📺 **유튜브 영상 목록**: YouTube API를 통한 최신 영상 표시
- 📝 **경제 분석 블로그**: MDX 기반의 심층 경제 분석 글
- 💬 **커뮤니티**: 구독자들과 함께 경제에 대해 토론
- 📊 **Google Analytics**: 방문자 통계 및 분석
- 🎨 **모던 미니멀 디자인**: Tailwind CSS 기반의 깔끔한 UI
- 🌙 **다크 모드**: 자동 다크 모드 지원

## 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **콘텐츠**: MDX (Markdown + JSX)
- **분석**: Google Analytics
- **API**: YouTube Data API v3

## 시작하기

### 사전 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

1. 의존성 설치:
```bash
npm install
```

2. 환경 변수 설정:
`.env.example` 파일을 `.env.local`로 복사하고 필요한 값을 입력하세요.

```bash
cp .env.example .env.local
```

필요한 환경 변수:
- `YOUTUBE_API_KEY`: YouTube Data API v3 키 ([여기서 발급](https://console.cloud.google.com/apis/credentials))
- `YOUTUBE_CHANNEL_ID`: YouTube 채널 ID ([여기서 확인](https://www.youtube.com/account_advanced))
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics Measurement ID ([여기서 발급](https://analytics.google.com/))

3. 개발 서버 실행:
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
.
├── app/                    # Next.js App Router 페이지
│   ├── page.tsx           # 홈페이지
│   ├── videos/            # 유튜브 영상 목록
│   ├── blog/              # 블로그
│   ├── community/         # 커뮤니티
│   └── about/             # 소개
├── components/            # React 컴포넌트
├── content/              # MDX 블로그 포스트
│   └── blog/
├── lib/                  # 유틸리티 함수
│   ├── youtube.ts        # YouTube API 헬퍼
│   └── blog.ts           # 블로그 헬퍼
└── public/               # 정적 파일
```

## 블로그 포스트 작성

`content/blog/` 디렉토리에 MDX 파일을 추가하여 새로운 블로그 포스트를 작성할 수 있습니다.

### 예시

```mdx
---
title: "포스트 제목"
excerpt: "포스트 요약"
date: "2024-01-15"
category: "경제분석"
readTime: "5분"
featured: true
---

# 제목

콘텐츠 내용...
```

## 배포

### Vercel (권장)

1. GitHub에 코드를 푸시합니다
2. [Vercel](https://vercel.com)에 연결합니다
3. 환경 변수를 설정합니다
4. 배포합니다

### 빌드

```bash
npm run build
npm run start
```

## 라이선스

이 프로젝트는 개인 사용을 위한 것입니다.

## 연락처

- 이메일: contact@frindle.com
- YouTube: [@frindle](https://youtube.com/@frindle)
# code-review-test
