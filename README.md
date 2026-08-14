# yusufhayirli.com

Full-stack software engineering portfolio - a single page, bilingual (EN/TR), served with no application server at request time.

Live site: [yusufhayirli.com](https://yusufhayirli.com)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=flat-square&logo=cloudflarepages&logoColor=white)

![yusufhayirli.com preview](https://yusufhayirli.com/opengraph-image)

## Overview

Yusuf Hayırlı's single-page, bilingual (EN/TR) software engineering portfolio. Statically exported with Next.js, it requires no server runtime at request time and is served either as a containerized image behind Nginx or directly through the Cloudflare Pages CDN.

> Full-stack software engineer for commerce products, web platforms and the systems that keep them moving.

## Highlights

- **Bilingual** - defaults to English, with a persisted EN/TR preference
- **Light/dark theme** - the user's choice is persisted in the browser
- **Static export** - no server at runtime, served entirely from the CDN
- **Layered architecture** - testable structure with domain, infrastructure, providers and composition boundaries
- **Sections** - Hero, Experience, Commerce, Projects, Toolkit and Contact
- **Quality gate** - lint, unit tests, build and container verification in one command and in CI
- **Dynamic social images** - OpenGraph/Twitter cards generated at build time

## Tech stack

| Layer | Technologies |
| --- | --- |
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS v4 · SCSS Modules for complex card geometry/animations |
| Testing | Vitest |
| Code quality | ESLint (`eslint-config-next`) |
| Delivery | Docker (multi-stage build) + Nginx · Cloudflare Pages (CDN + direct deploy) |
| CI/CD | GitHub Actions - lint, unit test, build and container verification |

## Architecture

```
front/src
├── app/              Next.js App Router - page, layout, sitemap, robots, social images
├── components/
│   ├── sections/      Hero, Experience, Commerce, Projects, Toolkit, Manifesto Marquee
│   ├── layout/         Header, ContactFooter
│   ├── controls/        LanguageToggle, ThemeSwitch
│   ├── system/           PreferenceBootstrap, StructuredData
│   └── ui/                 Shared building blocks like Container, SectionHeading
├── domain/           Framework-agnostic types for portfolio content and preferences
├── infrastructure/    Content repository (StaticPortfolioContentRepository) and browser preference store
├── providers/        Dependency injection via React context (PortfolioProvider)
└── composition/       Composition root wiring domain interfaces to concrete implementations
```

Redis or a separate backend was deliberately left out: since the content is static, the Cloudflare and Nginx cache layers are enough. If a dynamic contact form, admin panel or API is added later, the backend and its data cache can be introduced as a separate service.

## Local development

```bash
cd front
npm ci
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000) by default.

## Quality gate

```bash
cd front
npm run check   # lint + test + build
```

## Docker

```bash
docker compose up --build
```

The production image is served at [http://localhost:8080](http://localhost:8080) (multi-stage build → static export → Nginx).

## Cloudflare Pages

The following Actions secrets must be configured on the GitHub repository:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The deploy workflow uploads the `front/out` folder to the existing `yusufhayirli` Pages project; it runs after a successful CI run on `master`.
