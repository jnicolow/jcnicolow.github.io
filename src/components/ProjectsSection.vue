<template>
  <section id="projects" class="section-block section-light">
    <div class="q-px-lg" style="max-width: 1100px; margin: 0 auto">
      <h2 class="section-title text-white">
        Some Projects
      </h2>

      <div class="exp-container">
          <!-- Tab selector -->
          <q-tabs
            v-model="activeTab"
            :vertical="$q.screen.gt.sm"
            active-color="primary"
            indicator-color="primary"
            no-caps
            class="exp-tabs"
            :class="{ 'exp-tabs--vertical': $q.screen.gt.sm }"
          >
            <q-tab
              v-for="(project, i) in projects"
              :key="i"
              :name="i"
              class="exp-tab"
            >
              <span class="exp-tab-label">{{ project.title }}</span>
            </q-tab>
          </q-tabs>

          <!-- Panel content -->
          <q-tab-panels
            v-model="activeTab"
            animated
            swipeable-horizontal="false"
            transition-prev="fade"
            transition-next="fade"
            class="exp-panels bg-transparent"
            style="overflow: hidden"
          >
            <q-tab-panel v-for="(project, i) in projects" :key="i" :name="i" class="q-pa-none">
              <h3 class="text-h6 text-white text-weight-bold q-mb-xs">
                {{ project.title }}
                <span v-if="project.subtitle" class="text-primary"> @ {{ project.subtitle }}</span>
              </h3>
              <p class="font-mono text-grey-6 text-caption q-mb-sm">
                {{ project.dates }}
              </p>

              <p class="text-grey-4 q-mt-md" style="font-size: 0.92rem; line-height: 1.7; max-width: 640px">
                {{ project.description }}
              </p>

              <div class="row items-center q-gutter-sm q-mt-md">
                <span v-for="tag in project.tags" :key="tag" class="tech-tag">
                  {{ tag }}
                </span>
              </div>

              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="github-btn q-mt-lg"
              >
                <q-icon name="mdi-github" size="18px" class="q-mr-xs" />
                View on GitHub
              </a>
            </q-tab-panel>
          </q-tab-panels>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { projects } from 'src/data/resume'

const $q = useQuasar()
const activeTab = ref(0)
</script>

<style lang="scss" scoped>
.exp-container {
  display: flex;
  gap: 32px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
  }
}

.exp-tabs {
  flex-shrink: 0;

  &--vertical {
    max-width: 280px;
    border-left: 2px solid rgba(53, 84, 49, 0.15);
  }
}

.exp-tab {
  justify-content: flex-start !important;
  padding: 14px 24px;
  min-height: 52px;
}

.exp-tab-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.92rem;
  text-align: left;
  color: #7a6466;
}

:deep(.q-tab--active) .exp-tab-label {
  color: var(--q-primary);
}

:deep(.q-tab) {
  color: #7a6466 !important;
}

:deep(.q-tab--active) {
  color: var(--q-primary) !important;
}

.exp-panels {
  flex: 1;
  min-height: 280px;
}

:deep(.q-tab-panel) {
  overflow: hidden;
}

:deep(.q-panel.scroll) {
  overflow: hidden;
}

.github-btn {
  display: inline-flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid rgba(53, 84, 49, 0.15);
  color: #6b5557;
  background: transparent;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: var(--q-primary);
    border-color: rgba(240, 211, 160, 0.4);
    background: rgba(240, 211, 160, 0.06);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(240, 211, 160, 0.08);
  }
}
</style>
