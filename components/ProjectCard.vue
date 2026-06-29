<script setup lang="ts">
interface Project {
  key: string
  name: string
  thumb: string
  problem: string
  built: string
  stack: string[]
  demo: string
  github: string
  synthetic?: boolean
}
defineProps<{ project: Project }>()
</script>

<template>
  <article class="card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
    <a
      :href="project.demo"
      target="_blank"
      rel="noopener"
      class="block overflow-hidden border-b border-slate-200 dark:border-slate-800"
    >
      <img
        :src="project.thumb"
        :alt="project.name + ' screenshot'"
        width="960"
        height="600"
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1024px) 544px, calc(100vw - 40px)"
        class="aspect-[16/10] w-full bg-slate-100 object-cover object-top transition duration-300 group-hover:scale-[1.02] dark:bg-slate-800"
      />
    </a>
    <div class="flex flex-1 flex-col gap-3 p-5">
      <h3 class="text-base font-bold">{{ project.name }}</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400">
        <span class="font-semibold text-slate-700 dark:text-slate-300">Problem.</span> {{ project.problem }}
      </p>
      <p class="text-sm text-slate-500 dark:text-slate-400">
        <span class="font-semibold text-slate-700 dark:text-slate-300">Built.</span> {{ project.built }}
      </p>
      <div class="flex flex-wrap gap-1.5">
        <span v-for="s in project.stack" :key="s" class="badge">{{ s }}</span>
      </div>
      <div class="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <a :href="project.demo" target="_blank" rel="noopener" class="btn btn-primary">Live demo →</a>
        <a :href="project.github" target="_blank" rel="noopener" class="btn btn-outline">GitHub</a>
        <span v-if="project.synthetic" class="ml-auto text-xs text-slate-600 dark:text-slate-400">Synthetic demo data</span>
      </div>
    </div>
  </article>
</template>
