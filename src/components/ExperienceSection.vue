<template>
  <section id="experience" class="section-block experience-section">
    <div class="site-wrap">
      <h2 class="section-title text-white">
        Employment
      </h2>

      <div class="timeline">
        <div
          v-for="(job, i) in displayedExperience"
          :key="jobKey(job, i)"
          class="timeline-item"
        >
          <div class="timeline-marker" />
          <div class="timeline-content glass-card q-pa-xl">
            <div class="timeline-header">
              <h3 class="font-display timeline-job-title text-white text-weight-bold q-my-none">
                {{ job.title }}
              </h3>
              <span class="timeline-date font-mono text-grey-5 text-body2 q-my-none">
                {{ job.dates }}
              </span>
            </div>

            <p class="text-primary timeline-company text-subtitle1 q-mb-none q-mt-sm">{{ job.company }}</p>
            <p class="font-mono text-grey-5 text-body2 q-mt-xs q-mb-none">
              {{ job.location }}
            </p>

            <div class="q-mt-lg timeline-bullets">
              <div
                v-for="(bullet, j) in job.bullets"
                :key="j"
                class="row no-wrap q-mb-md"
              >
                <span class="timeline-bullet-marker q-mr-sm" style="flex-shrink: 0; margin-top: 4px">&#9656;</span>
                <span class="text-grey-3 timeline-bullet-text">{{ bullet }}</span>
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
/* Matches $secondary / $positive in quasar.variables.scss */
.experience-section {
  --exp-accent: #a83e03;
}

.timeline {
  position: relative;
  padding-left: 2.25rem;
}

/* Vertical track (“scrollbar”) beside roles */
.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 5px;
  border-radius: 3px;
  background: linear-gradient(
    180deg,
    var(--exp-accent) 0%,
    rgba(168, 62, 3, 0.35) 55%,
    rgba(168, 62, 3, 0.2) 100%
  );
  box-shadow: 0 0 20px rgba(168, 62, 3, 0.15);
}

.timeline-item {
  position: relative;
  padding-bottom: 2.75rem;

  &:last-child {
    padding-bottom: 0;
  }
}

.timeline-marker {
  position: absolute;
  left: -2.25rem;
  top: 28px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #355431;
  border: 3px solid var(--exp-accent);
  transform: translateX(calc(-50% + 2.5px));
  z-index: 1;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.timeline-item:hover .timeline-marker {
  background: var(--exp-accent);
  box-shadow:
    0 0 0 4px rgba(168, 62, 3, 0.2),
    0 0 16px rgba(168, 62, 3, 0.45);
}

.timeline-content {
  border-left: 4px solid transparent !important;
  border-radius: 6px 20px 20px 6px !important;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.22),
    0 0 0 1px rgba(240, 211, 160, 0.06);
}

.timeline-item:hover .timeline-content {
  border-left-color: var(--exp-accent) !important;
  transform: translateX(6px);
  box-shadow:
    0 18px 48px rgba(0, 0, 0, 0.28),
    0 0 48px rgba(168, 62, 3, 0.08);
}

.timeline-job-title {
  font-size: clamp(1.35rem, 2.8vw, 1.85rem);
  line-height: 1.18;
  letter-spacing: -0.025em;
}

.timeline-company {
  font-weight: 600;
  letter-spacing: -0.01em;
}

.timeline-bullet-marker {
  color: var(--exp-accent);
  font-size: 0.95rem;
}

.timeline-bullet-text {
  font-size: 1.03rem;
  line-height: 1.75;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.25rem;
}

.timeline-date {
  white-space: nowrap;
  flex-shrink: 0;
  opacity: 0.95;
}

.expand-btn {
  border: 1px solid rgba(168, 62, 3, 0.4);
  border-radius: 8px;
}

@media (max-width: 600px) {
  .timeline {
    padding-left: 1.65rem;
  }

  .timeline-marker {
    left: -1.65rem;
    transform: translateX(calc(-50% + 2px));
  }

  .timeline-header {
    flex-direction: column;
    gap: 0.35rem;
    align-items: flex-start;
  }

  .timeline-job-title {
    font-size: clamp(1.22rem, 5vw, 1.55rem);
  }
}
</style>
