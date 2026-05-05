<template>
  <section id="education" class="section-block">
    <div class="site-wrap">
      <h2 class="section-title text-white">
        Education
      </h2>

      <q-card
        v-for="(deg, idx) in educationDegrees"
        :key="idx"
        class="glass-card q-mb-lg"
      >
        <q-card-section class="q-pa-lg">
          <div class="row items-start justify-between q-mb-sm" style="gap: 12px">
            <div>
              <div class="font-display text-h6 text-white text-weight-bold">{{ deg.school }}</div>
              <div class="text-primary" style="font-size: 0.95rem">{{ deg.degree }}</div>
              <div class="text-grey-6 text-caption q-mt-xs">{{ deg.location }}</div>
            </div>
            <span class="font-mono text-grey-6 text-caption" style="white-space: nowrap">{{ deg.dates }}</span>
          </div>
          <div v-if="deg.detail" class="q-mt-md">
            <span class="font-mono text-primary text-caption">Detail:</span>
            <p class="text-grey-4 q-mt-xs" style="font-size: 0.9rem; line-height: 1.7">
              {{ deg.detail }}
            </p>
          </div>
        </q-card-section>
      </q-card>

      <!-- Journal articles -->
      <q-card v-if="publicationsJournals.length" class="glass-card q-mb-lg">
        <q-card-section class="q-pa-lg">
          <div class="row items-center q-mb-sm">
            <q-icon name="mdi-file-document-outline" color="secondary" size="22px" class="q-mr-sm" />
            <span class="font-display text-subtitle1 text-white text-weight-bold">Journal articles</span>
          </div>
          <div
            v-for="(pub, j) in publicationsJournals"
            :key="j"
            class="q-mb-md"
          >
            <div class="text-primary q-mb-xs" style="font-size: 0.95rem">
              "{{ pub.title }}"
            </div>
            <p class="text-grey-5 q-mb-xs" style="font-size: 0.88rem; line-height: 1.7">
              {{ pub.authors }}
            </p>
            <p class="text-grey-6 text-caption q-mb-sm" style="line-height: 1.6">
              {{ pub.venue }}
            </p>
            <a
              v-if="pub.link"
              :href="pub.link"
              target="_blank"
              rel="noopener noreferrer"
              class="pub-link-btn"
            >
              <q-icon name="mdi-open-in-new" size="16px" class="q-mr-xs" />
              {{ pub.linkLabel || 'Link' }}
            </a>
          </div>
        </q-card-section>
      </q-card>

      <!-- Conference posters -->
      <q-card v-if="publicationsPosters.length" class="glass-card q-mb-lg">
        <q-card-section class="q-pa-lg">
          <div class="row items-center q-mb-md">
            <q-icon name="mdi-presentation-play" color="secondary" size="22px" class="q-mr-sm" />
            <span class="font-display text-subtitle1 text-white text-weight-bold">Conference posters & talks</span>
          </div>
          <p class="text-grey-6 text-caption q-mb-md">
            Selected entries from CV (including [C1]–[C8] cited above).
          </p>
          <div
            v-for="(p, k) in publicationsPosters"
            :key="k"
            class="poster-row q-mb-md"
          >
            <div class="font-mono text-primary text-caption q-mb-xs">{{ p.cite }}</div>
            <div class="text-white text-weight-medium" style="font-size: 0.92rem">{{ p.title }}</div>
            <div class="text-grey-6 text-caption q-mt-xs">{{ p.venue }}</div>
            <a
              v-if="p.link"
              :href="p.link"
              target="_blank"
              rel="noopener noreferrer"
              class="pub-link-btn q-mt-xs inline-block"
            >
              <q-icon name="mdi-open-in-new" size="16px" class="q-mr-xs" />
              {{ p.linkLabel || 'Link' }}
            </a>
          </div>
        </q-card-section>
      </q-card>

      <div class="row q-col-gutter-lg">
        <div v-if="leadership.bullets.length" class="col-12 col-md-6">
          <q-card class="glass-card full-height">
            <q-card-section class="q-pa-lg">
              <div class="row items-center q-mb-sm">
                <q-icon name="mdi-account-group-outline" color="primary" size="22px" class="q-mr-sm" />
                <span class="font-display text-subtitle1 text-white text-weight-bold">Leadership</span>
              </div>
              <div class="text-white text-weight-medium q-mb-xs">{{ leadership.title }}</div>
              <div class="font-mono text-grey-6 text-caption q-mb-sm">{{ leadership.dates }}</div>
              <div
                v-for="(bullet, i) in leadership.bullets"
                :key="i"
                class="row no-wrap q-mb-xs"
              >
                <span class="text-primary q-mr-sm" style="flex-shrink: 0; margin-top: 2px">&#9656;</span>
                <span class="text-grey-4" style="font-size: 0.85rem; line-height: 1.65">{{ bullet }}</span>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div :class="leadership.bullets.length ? 'col-12 col-md-6' : 'col-12'">
          <q-card class="glass-card full-height">
            <q-card-section class="q-pa-lg">
              <div class="row items-center q-mb-md">
                <q-icon name="mdi-trophy-outline" color="warning" size="22px" class="q-mr-sm" />
                <span class="font-display text-subtitle1 text-white text-weight-bold">Honors & awards</span>
              </div>

              <div
                v-for="(h, hi) in honorsList"
                :key="hi"
                class="q-mb-md"
              >
                <div class="text-white text-weight-medium">{{ h.title }}</div>
                <div class="font-mono text-grey-6 text-caption">{{ h.context }} · {{ h.year }}</div>
              </div>

              <template v-if="affiliations.length">
                <q-separator dark class="q-mb-md" style="opacity: 0.7" />
                <div v-for="aff in affiliations" :key="aff" class="row items-center q-mb-xs">
                  <q-icon name="mdi-chevron-right" color="primary" size="16px" class="q-mr-xs" />
                  <span class="text-grey-4" style="font-size: 0.88rem">{{ aff }}</span>
                </div>
              </template>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  educationDegrees,
  publicationsJournals,
  publicationsPosters,
  leadership,
  honorsList,
  affiliations
} from 'src/data/resume'
</script>

<style lang="scss" scoped>
.poster-row {
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(240, 211, 160, 0.08);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.pub-link-btn {
  display: inline-flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid rgba(240, 211, 160, 0.15);
  color: rgba(240, 211, 160, 0.7);
  background: transparent;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-top: 8px;

  &:hover {
    color: var(--q-primary);
    border-color: rgba(240, 211, 160, 0.4);
    background: rgba(240, 211, 160, 0.06);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(240, 211, 160, 0.08);
  }
}
</style>
