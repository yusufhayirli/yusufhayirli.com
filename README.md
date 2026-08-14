<div align="center">

# yusufhayirli.com

**Full-stack yazılım mühendisliği portfolyosu** - tek sayfa, iki dil, sıfır sunucu.

[![Live Site](https://img.shields.io/badge/live-yusufhayirli.com-111827?style=for-the-badge&logo=googlechrome&logoColor=white)](https://yusufhayirli.com)

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

</div>

<p align="center">
  <img src="https://yusufhayirli.com/opengraph-image" alt="yusufhayirli.com önizlemesi" width="100%" />
</p>

---

## Genel bakış

Yusuf Hayırlı'nın tek sayfalık, iki dilli (EN/TR) yazılım mühendisliği portfolyosu. Next.js ile statik olarak export edilir, sunucu tarafı çalışma zamanı gerektirmez ve Nginx üzerinden konteynerlenmiş şekilde ya da doğrudan Cloudflare Pages CDN üzerinden servis edilir.

> Full-stack software engineer for commerce products, web platforms and the systems that keep them moving.

## Öne çıkanlar

- 🌐 **İki dilli** - varsayılan İngilizce, kalıcı EN/TR tercihi
- 🌓 **Açık/koyu tema** - kullanıcı tercihi tarayıcıda kalıcı olarak saklanır
- ⚡ **Statik export** - çalışma zamanında sunucu yok, tamamen CDN'den servis edilir
- 🧱 **Katmanlı mimari** - domain, infrastructure, providers ve composition ayrımıyla test edilebilir yapı
- 🎬 **Zengin bölümler** - Hero, Experience, Commerce, Projects, Toolkit ve Contact bölümleri
- 🧪 **Uçtan uca kalite kontrolü** - lint, unit test, build ve container doğrulaması tek komutla ve CI'da
- 🖼️ **Dinamik sosyal görseller** - OpenGraph/Twitter kartları çalışma zamanında üretilir

## Tech stack

| Katman | Teknolojiler |
| --- | --- |
| Framework | Next.js (App Router), React, TypeScript |
| Stil | Tailwind CSS v4 · karmaşık kart geometrisi/animasyonlar için SCSS Modules |
| Test | Vitest |
| Kod kalitesi | ESLint (`eslint-config-next`) |
| Dağıtım | Docker (multi-stage build) + Nginx · Cloudflare Pages (CDN + direkt deploy) |
| CI/CD | GitHub Actions - lint, unit test, build ve container doğrulaması |

## Mimari

```
front/src
├── app/              Next.js App Router - sayfa, layout, sitemap, robots, sosyal görseller
├── components/
│   ├── sections/      Hero, Experience, Commerce, Projects, Toolkit, Manifesto Marquee
│   ├── layout/         Header, ContactFooter
│   ├── controls/        LanguageToggle, ThemeSwitch
│   ├── system/           PreferenceBootstrap, StructuredData
│   └── ui/                 Container, SectionHeading gibi paylaşılan bileşenler
├── domain/           Portfolyo içeriği ve tercihler için framework'ten bağımsız tipler
├── infrastructure/    İçerik deposu (StaticPortfolioContentRepository) ve tarayıcı tercih deposu
├── providers/        React context ile bağımlılık enjeksiyonu (PortfolioProvider)
└── composition/       Domain arayüzlerini somut implementasyonlara bağlayan composition root
```

Redis veya ayrı bir backend bilinçli olarak eklenmedi: içerik statik olduğu için Cloudflare ve Nginx cache katmanları yeterli. Dinamik bir iletişim formu, admin paneli veya API eklenirse backend ve veri cache'i ayrı bir servis olarak konumlandırılabilir.

## Yerel geliştirme

```bash
cd front
npm ci
npm run dev
```

Uygulama varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde açılır.

## Kalite kontrolü

```bash
cd front
npm run check   # lint + test + build
```

## Docker

```bash
docker compose up --build
```

Production image [http://localhost:8080](http://localhost:8080) adresinden servis edilir (multi-stage build → statik export → Nginx).

## Cloudflare Pages

GitHub repository'sinde aşağıdaki Actions secrets tanımlanmalıdır:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Deploy workflow'u `front/out` klasörünü mevcut `yusufhayirli` Pages projesine yükler; `master` dalındaki başarılı CI çalışmasının ardından tetiklenir.

---

<div align="center">

[yusufhayirli.com](https://yusufhayirli.com) tarafından geliştirildi.

</div>
