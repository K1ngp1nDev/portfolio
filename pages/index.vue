<script setup lang="ts">
const projects = [
  {
    key: 'merchant',
    name: 'Merchant Control Tower',
    thumb: '/thumbnails/merchant.webp',
    problem: 'E-commerce operations scattered across orders, inventory, returns and channels.',
    built: 'A dense ops analytics console — KPIs, cross-filtering charts, and orders / inventory / customers / returns / insights with drawers, modals and bulk actions.',
    stack: ['Nuxt 3', 'Vue', 'TypeScript', 'Pinia', 'Nitro', 'Prisma', 'SQLite'],
    demo: 'https://merchant.k1ngp1n.com',
    github: 'https://github.com/K1ngp1nDev/merchant-control-tower',
    synthetic: true,
  },
  {
    key: 'switchboard',
    name: 'SWITCHBOARD — AI Agent Control Room',
    thumb: '/thumbnails/switchboard.webp',
    problem: 'Agent workflows are hard to trust when you cannot see tools, retries, cost, trace history or approval gates.',
    built: 'A deterministic execution console: node canvas, replay timeline, trace waterfall, token/cost HUD, command palette and human-in-the-loop approval editing.',
    stack: ['React', 'TypeScript', 'Vite', 'React Flow', 'Monaco', 'Zustand'],
    demo: 'https://switchboard.k1ngp1n.com',
    github: 'https://github.com/K1ngp1nDev/switchboard',
    synthetic: true,
  },
  {
    key: 'resonance',
    name: 'RESONANCE LAB',
    thumb: '/thumbnails/resonance.webp',
    problem: 'Most portfolios show static screens; realtime graphics need performance, motion craft and careful browser engineering.',
    built: 'An audio-reactive WebGL particle instrument with GPGPU simulation, Web Audio analysis, responsive controls, reduced-motion mode and cinematic interactions.',
    stack: ['React', 'Three.js', 'R3F', 'Web Audio', 'GSAP', 'Zustand'],
    demo: 'https://resonance.k1ngp1n.com',
    github: 'https://github.com/K1ngp1nDev/resonance-lab',
    synthetic: true,
  },
  {
    key: 'linehaul',
    name: 'LINEHAUL — Fleet Operations Console',
    thumb: '/thumbnails/linehaul.webp',
    problem: 'Logistics teams need live map context, incidents, SLA drift and vehicle details in one operational view.',
    built: 'A map-first control room over a synthetic fleet day: animated trips, replay scrubber, incident feed, depot filters, KPI strip and vehicle drill-down drawer.',
    stack: ['React', 'Vite', 'deck.gl', 'MapLibre', 'GSAP', 'Zustand'],
    demo: 'https://linehaul.k1ngp1n.com',
    github: 'https://github.com/K1ngp1nDev/linehaul',
    synthetic: true,
  },
  {
    key: 'commerce',
    name: 'Aura Commerce Configurator',
    thumb: '/thumbnails/commerce-storefront.webp',
    problem: 'Premium storefronts need more than product cards: configuration, cart logic, checkout states and polish.',
    built: 'A frontend-only e-commerce experience with animated product configurator, filters, cart drawer, mock checkout, order timeline and persisted saved builds.',
    stack: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'Zustand'],
    demo: 'https://commerce.k1ngp1n.com',
    github: 'https://github.com/K1ngp1nDev/commerce-configurator',
    synthetic: true,
  },
  {
    key: 'finance',
    name: 'AI Finance Dashboard',
    thumb: '/thumbnails/finance.webp',
    problem: 'Personal finance data with no clear cash-flow, budget or category insight.',
    built: 'Transactions, analytics, CSV import, budgets, subscriptions, savings goals, reports — plus a keyless AI assistant with per-page prompts.',
    stack: ['Angular', 'NestJS', 'Prisma', 'PostgreSQL', 'AI (Claude)'],
    demo: 'https://finance.k1ngp1n.com',
    github: 'https://github.com/K1ngp1nDev/finance-dashboard-frontend',
    synthetic: true,
  },
  {
    key: 'k2',
    name: 'K2 CRM / ERP — Order Accounting',
    thumb: '/thumbnails/k2.webp',
    problem: 'Sales teams drowning in spreadsheets and manual order math.',
    built: 'An order-accounting module: clients, inventory, server-computed orders, analytics, reports, client drill-downs and an activity log.',
    stack: ['Flask', 'React', 'TypeScript', 'SQLite / Postgres'],
    demo: 'https://crm.k1ngp1n.com',
    github: 'https://github.com/K1ngp1nDev/k2-crm',
    synthetic: true,
  },
  {
    key: 'care',
    name: 'Care Intake Console',
    thumb: '/thumbnails/care.webp',
    problem: 'Outpatient intake & triage operations run by hand on spreadsheets.',
    built: 'A queue + triage-review workflow with patients, appointments, follow-ups, operational reports and an audit log.',
    stack: ['Angular', 'NestJS', 'TypeScript', 'ApexCharts'],
    demo: 'https://care.k1ngp1n.com',
    github: 'https://github.com/K1ngp1nDev/care-intake-console-web',
    synthetic: true,
  },
]

const future = [
  { title: 'AI companion / assistant', desc: 'Conversational assistants with tools, memory, context and human-in-the-loop review.' },
  { title: 'Marketplace / checkout systems', desc: 'Buyer flows, seller/admin workflows, payments, catalog and order operations.' },
  { title: 'Data automation / reporting', desc: 'ETL-style cleanup and scheduled reporting pipelines over messy sources.' },
  { title: 'SaaS-style internal products', desc: 'Multi-view internal tools with auth, roles, dashboards and deployment.' },
]

const capabilities = [
  'Dashboards & reporting systems',
  'Admin panels & internal tools',
  'E-commerce systems',
  'AI assistants & workflow automation',
  'API integrations',
  'Realtime maps & WebGL experiences',
  'Data-heavy frontend UX',
  'Full-stack deployment',
]

const stackGroups = [
  { label: 'Frontend', items: ['React / Next.js', 'Vue / Nuxt', 'Angular', 'TypeScript', 'Tailwind'] },
  { label: 'Backend', items: ['Node.js / NestJS / Express / Fastify', 'Laravel / PHP', 'Python / FastAPI / Flask / Django', 'Go (when it fits)'] },
  { label: 'Data & API', items: ['PostgreSQL', 'MySQL', 'SQLite', 'REST APIs', 'Reporting & ETL-style cleanup'] },
  { label: 'AI-assisted delivery', items: ['AI agents & tools for speed', 'Engineering review', 'Architecture & testing', 'Deploy discipline'] },
]

const approach = [
  { title: 'Prototype → working demo, fast', desc: 'I turn messy requirements into a clickable, deployed demo quickly — then harden it.' },
  { title: 'Clear written communication', desc: 'Short, concrete updates. You always know what is done, what is next, and what is a trade-off.' },
  { title: 'AI-assisted, engineer-reviewed', desc: 'I use AI agents to move faster, but every result gets architecture, testing and review before it ships.' },
  { title: 'Production-minded', desc: 'Sensible structure, tests where they matter, Docker, and deployable from day one.' },
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="sticky top-0 z-30 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <div class="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" class="flex items-center gap-2.5">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-sm font-extrabold text-white">SK</span>
          <span class="hidden leading-tight sm:block">
            <span class="block text-sm font-bold">Serhii Kulitskyi</span>
            <span class="block text-[11px] text-slate-500 dark:text-slate-400">Full-Stack Product Engineer</span>
          </span>
        </a>
        <nav class="flex items-center gap-1 text-sm">
          <a href="#demos" class="hidden rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 sm:block">Demos</a>
          <a href="#capabilities" class="hidden rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:block">Capabilities</a>
          <a href="#approach" class="hidden rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:block">Approach</a>
          <a href="https://github.com/K1ngp1nDev" target="_blank" rel="noopener" class="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">GitHub</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>

    <main id="top">
      <!-- Hero -->
      <section class="relative overflow-hidden">
        <div class="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl"></div>
        <div class="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"></div>
        <div class="container-x relative py-16 sm:py-20">
          <p class="eyebrow">Full-Stack Product Engineer · AI-Native Builder</p>
          <h1 class="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            I build practical software products — not framework demos.
          </h1>
          <p class="mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            I turn messy requirements into working web products: data-heavy dashboards, admin panels, API-backed
            workflows, e-commerce systems and AI-powered tools. I work framework-agnostic and choose the stack that
            fits the product — the framework is not the product, the result is.
          </p>
          <div class="mt-7 flex flex-wrap items-center gap-3">
            <a href="#demos" class="btn btn-primary">View live demos ↓</a>
            <a href="https://github.com/K1ngp1nDev" target="_blank" rel="noopener" class="btn btn-outline">GitHub</a>
          </div>
          <div class="mt-8 flex flex-wrap gap-2">
            <span v-for="c in ['Dashboards', 'Admin systems', 'E-commerce', 'AI assistants', 'Internal tools']" :key="c" class="badge">{{ c }}</span>
          </div>
        </div>
      </section>

      <!-- Demos -->
      <section id="demos" class="container-x py-12 sm:py-16">
        <p class="eyebrow">Live demos</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">Things I have shipped</h2>
        <p class="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
          A mix of full-stack products and frontend-heavy experiences you can click through. Built across different
          stacks on purpose.
        </p>
        <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ProjectCard v-for="p in projects" :key="p.key" :project="p" />
        </div>
      </section>

      <!-- What's next -->
      <section class="container-x py-12 sm:py-16">
        <p class="eyebrow">What's next</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">The portfolio grows beyond dashboards</h2>
        <p class="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
          Categories I am actively building demos for next.
        </p>
        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div v-for="f in future" :key="f.title" class="card p-5">
            <h3 class="text-sm font-bold">{{ f.title }}</h3>
            <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{{ f.desc }}</p>
            <span class="mt-3 inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400">In progress</span>
          </div>
        </div>
      </section>

      <!-- Capabilities + stack -->
      <section id="capabilities" class="border-y border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900/40 sm:py-16">
        <div class="container-x">
          <p class="eyebrow">Capabilities</p>
          <h2 class="mt-2 text-2xl font-bold sm:text-3xl">What I do</h2>
          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="c in capabilities" :key="c" class="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">{{ c }}</span>
          </div>

          <h3 class="mt-10 text-lg font-bold">Stack — chosen per product</h3>
          <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <div v-for="g in stackGroups" :key="g.label" class="card p-5">
              <p class="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">{{ g.label }}</p>
              <ul class="mt-3 space-y-1.5">
                <li v-for="i in g.items" :key="i" class="text-sm text-slate-600 dark:text-slate-300">{{ i }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Approach -->
      <section id="approach" class="container-x py-12 sm:py-16">
        <p class="eyebrow">How I work</p>
        <h2 class="mt-2 text-2xl font-bold sm:text-3xl">Practical, production-minded delivery</h2>
        <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div v-for="(a, i) in approach" :key="a.title" class="card flex gap-4 p-5">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">{{ i + 1 }}</span>
            <div>
              <h3 class="text-sm font-bold">{{ a.title }}</h3>
              <p class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{{ a.desc }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-200 py-10 dark:border-slate-800">
      <div class="container-x flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p class="font-bold">Serhii Kulitskyi</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">Full-stack product engineer · framework-agnostic · AI-native delivery</p>
        </div>
        <div class="flex items-center gap-4 text-sm">
          <a href="https://github.com/K1ngp1nDev" target="_blank" rel="noopener" class="font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">GitHub</a>
          <span class="text-slate-600 dark:text-slate-400">Demos use synthetic data</span>
        </div>
      </div>
    </footer>
  </div>
</template>
