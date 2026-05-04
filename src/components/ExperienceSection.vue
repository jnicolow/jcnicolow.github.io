<template>
  <section id="experience" class="section-block">
    <div class="q-px-lg" style="max-width: 1100px; margin: 0 auto">
      <h2 class="section-title text-white">
        Where I've Worked
      </h2>

      <div class="timeline">
        <div
          v-for="(job, i) in displayedExperience"
          :key="jobKey(job, i)"
          class="timeline-item"
        >
          <div class="timeline-marker" />
          <div class="timeline-content glass-card q-pa-lg">
            <div class="timeline-header">
              <h3 class="font-display text-h6 text-white text-weight-bold q-my-none">
                {{ job.title }}
              </h3>
              <span class="timeline-date font-mono text-grey-6 text-h7 q-my-none">
                {{ job.dates }}
              </span>
            </div>

            <p class="text-primary text-subtitle2 q-mb-none">{{ job.company }}</p>
            <p class="font-mono text-grey-6 text-caption q-mt-xs q-mb-none">
              {{ job.location }}
            </p>

            <div class="q-mt-md">
              <div
                v-for="(bullet, j) in job.bullets"
                :key="j"
                class="row no-wrap q-mb-sm"
              >
                <span class="text-primary q-mr-sm" style="flex-shrink: 0; margin-top: 2px">&#9656;</span>
                <span class="text-grey-4" style="font-size: 0.92rem; line-height: 1.7">{{ bullet }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="canToggleExperience" class="row justify-center q-mt-lg">
        <q-btn
          flat
          no-caps
          color="secondary"
          class="font-mono text-weight-medium expand-btn"
          padding="10px 24px"
          :label="expanded ? 'Show less' : 'Show all experience'"
          :icon-right="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="expanded = !expanded"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { experience, experienceSettings } from 'src/data/resume'

const expanded = ref(false)

function jobKey (job, i) {
  return `${job.title}|${job.dates}|${job.company}|${i}`
}

/** Collapsed: first `collapsedCount` roles that are not `expandOnly`; expanded: full list (same order as data). */
const displayedExperience = computed(() => {
  if (expanded.value) return experience
  const n = experienceSettings.collapsedCount ?? 3
  const out = []
  for (const job of experience) {
    if (job.expandOnly) continue
    out.push(job)
    if (out.length >= n) break
  }
  return out
})

const canToggleExperience = computed(() => {
  const n = experienceSettings.collapsedCount ?? 3
  let shownNonExpand = 0
  let hasOverflowNonExpand = false
  for (const job of experience) {
    if (job.expandOnly) continue
    if (shownNonExpand < n) {
      shownNonExpand++
    } else {
      hasOverflowNonExpand = true
      break
    }
  }
  const hasExpandOnly = experience.some(j => j.expandOnly)
  return hasOverflowNonExpand || hasExpandOnly
})
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--q-secondary);
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;

  &:last-child {
    padding-bottom: 0;
  }
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #355431;
  border: 2px solid var(--q-secondary);
  transform: translateX(-5px);
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker {
  background: var(--q-secondary);
  box-shadow: 0 0 12px rgba(88, 114, 82, 0.4);
}

.timeline-content {
  border-left: 3px solid transparent !important;
  border-radius: 4px 16px 16px 4px !important;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-item:hover .timeline-content {
  border-left-color: var(--q-secondary) !important;
  transform: translateX(4px);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.timeline-date {
  white-space: nowrap;
  flex-shrink: 0;
}

.expand-btn {
  border: 1px solid rgba(88, 114, 82, 0.35);
  border-radius: 8px;
}

@media (max-width: 600px) {
  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-marker {
    left: -1.5rem;
  }

  .timeline-header {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
