<template>
  <section id="skills" class="section-block section-light">
    <div class="q-px-lg" style="max-width: 1100px; margin: 0 auto">
      <h2 class="section-title text-white">
        Skills
      </h2>

      <div class="row q-col-gutter-lg">
        <div
          v-for="(items, category) in skills"
          :key="category"
          class="col-12 col-sm-6"
        >
          <div class="skill-card q-pa-lg">
              <div class="row items-center q-mb-md">
                <q-icon :name="categoryIcon(category)" color="primary" size="24px" class="q-mr-sm" />
                <h3 class="font-display text-subtitle1 text-white text-weight-bold q-ma-none">
                  {{ category }}
                </h3>
              </div>
              <div class="row q-gutter-sm">
                <q-chip
                  v-for="skill in items"
                  :key="skill"
                  class="skill-chip"
                  color="dark"
                  text-color="grey-4"
                  size="md"
                >
                  {{ skill }}
                </q-chip>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from 'src/data/resume'

function categoryIcon (cat) {
  const map = {
    Languages: 'mdi-code-braces',
    'ML & DL': 'mdi-brain',
    Geospatial: 'mdi-earth',
    'Misc.': 'mdi-text-box-outline',
    'Frameworks & Tools': 'mdi-wrench-outline',
    'Libraries & ML': 'mdi-brain',
    'Platforms & Infrastructure': 'mdi-cloud-outline'
  }
  return map[cat] || 'mdi-chip'
}
</script>

<style lang="scss" scoped>
.skill-card {
  background: #ffffff;
  border: 1px solid rgba(80, 61, 63, 0.06);
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(80, 61, 63, 0.06);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(236, 195, 11, 0.25);
    transform: translateY(-4px);
    box-shadow:
      0 12px 40px rgba(80, 61, 63, 0.08),
      0 0 40px rgba(236, 195, 11, 0.04);
  }
}
</style>
