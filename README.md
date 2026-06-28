# k1ngp1n.com — Personal Site

Personal landing / portfolio for **Serhii Kulitskyi** — a full-stack product engineer and
AI-native builder. It is framework-agnostic by design: the copy and demos span React/Next,
Vue/Nuxt and Angular front ends with Node/NestJS, PHP/Laravel and Python back ends.

The site links to four live, deployed demos (each a real full-stack app, synthetic data only):

| Demo | URL | Repo |
|---|---|---|
| Merchant Control Tower | https://merchant.k1ngp1n.com | `merchant-control-tower` |
| AI Finance Dashboard | https://finance.k1ngp1n.com | `finance-dashboard-frontend` / `-api` |
| K2 CRM / ERP | https://crm.k1ngp1n.com | `k2-crm` |
| Care Intake Console | https://care.k1ngp1n.com | `care-intake-console-web` / `-api` |

![Home](docs/screenshots/home-light.png)

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/home-dark.png" alt="Home (dark)" /></td>
    <td width="50%"><img src="docs/screenshots/home-mobile-light.png" alt="Home (mobile)" /></td>
  </tr>
</table>

## Stack

- **Nuxt 3** + **Vue 3** + **TypeScript** (SSR for SEO)
- **Tailwind CSS** + **@nuxtjs/color-mode** (class-based light/dark, no flash)
- Static content — no backend or database

> Nuxt is the tool used for *this* site; it is not the limit of what I build. See the demos.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & run (production)

```bash
npm run build
node .output/server/index.mjs    # serves on PORT (default 3000)
```

## Docker

```bash
docker build -t k1ngp1n-portfolio .
docker run -d --name portfolio -p 3000:3000 k1ngp1n-portfolio
```

## Deploy (VPS + Caddy)

Run the container on the VPS, then let Caddy terminate TLS and reverse-proxy the root
domain to it. Example `Caddyfile` (the root site plus the demo subdomains):

```caddy
k1ngp1n.com, www.k1ngp1n.com {
    encode zstd gzip
    reverse_proxy 127.0.0.1:3000
}

merchant.k1ngp1n.com { reverse_proxy 127.0.0.1:3100 }
finance.k1ngp1n.com  { reverse_proxy 127.0.0.1:3001 }
crm.k1ngp1n.com      { reverse_proxy 127.0.0.1:5000 }
care.k1ngp1n.com     { reverse_proxy 127.0.0.1:3000 }
```

Caddy fetches and renews Let's Encrypt certificates automatically. Point an A record for
`k1ngp1n.com` (and a CNAME/A for `www` and each demo subdomain) at the VPS, then
`caddy reload`. Adjust the upstream ports to match how each demo container is published.

## Screenshots

Live in [`docs/screenshots/`](docs/screenshots), all kept ≤ 4000×4000 px. Verify with:

```bash
node docs/check-screenshots.mjs
```
