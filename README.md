# yusufhayirli.com

Yusuf Hayırlı’nın tek sayfalık, iki dilli yazılım mühendisliği portfolyosu.

## Mimari

- Next.js App Router ve TypeScript
- Tailwind CSS v4; yalnız karmaşık kart geometrileri ve animasyonlarda SCSS Modules
- Statik export: uygulama çalışma zamanında sunucu gerektirmez
- Ayrı UI componentleri, domain modelleri ve repository/preference arayüzleri
- Varsayılan İngilizce; kalıcı EN/TR ve açık/koyu tema tercihleri
- Nginx ile production Docker image
- Cloudflare Pages CDN cache ve doğrudan deploy
- GitHub Actions üzerinde lint, unit test, build ve container doğrulaması

Redis veya ayrı backend bilinçli olarak eklenmedi. İçerik statik olduğu için Cloudflare ve Nginx cache katmanları yeterlidir. Dinamik iletişim formu, admin paneli veya API eklendiğinde backend ve veri cache’i ayrı bir servis olarak konumlandırılabilir.

## Yerel geliştirme

~~~bash
cd front
npm ci
npm run dev
~~~

Uygulama varsayılan olarak http://localhost:3000 adresinde açılır.

## Kalite kontrolü

~~~bash
cd front
npm run check
~~~

## Docker

~~~bash
docker compose up --build
~~~

Production image http://localhost:8080 adresinden servis edilir.

## Cloudflare Pages

GitHub repository’sinde aşağıdaki Actions secrets tanımlanmalıdır:

- CLOUDFLARE_API_TOKEN
- CLOUDFLARE_ACCOUNT_ID

Workflow, master dalındaki başarılı CI çalışmasından sonra front/out klasörünü mevcut yusufhayirli Pages projesine yükler.
