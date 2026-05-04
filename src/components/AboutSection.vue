<template>
  <section id="about" class="section-block section-light">
    <div class="q-px-lg" style="max-width: 1100px; margin: 0 auto">
      <h2 class="section-title text-white">
        About Me
      </h2>

      <div class="row q-col-gutter-xl items-start">
        <div :class="aboutPhotos.length ? 'col-12 col-md-7' : 'col-12'">
          <p
            v-for="(para, i) in personal.about"
            :key="i"
            class="about-text text-grey-4 q-mb-md"
            v-html="para"
          />

          <div class="q-mt-lg row q-gutter-md">
            <div
              v-for="(stat, i) in personal.aboutStats"
              :key="i"
              class="about-stat"
            >
              <div class="about-stat-value font-display text-primary">{{ stat.value }}</div>
              <div class="about-stat-label text-grey-6 font-mono">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div v-if="aboutPhotos.length" class="col-12 col-md-5">
          <div class="photo-mosaic">
            <div class="mosaic-tall mosaic-cell">
              <q-img
                v-if="mosaicSlots[0]"
                :key="'t-' + String(mosaicSlots[0])"
                :src="mosaicSlots[0]"
                alt="About photo"
                class="mosaic-img"
              />
              <div v-else class="mosaic-placeholder" aria-hidden="true" />
            </div>
            <div class="mosaic-square mosaic-cell">
              <q-img
                v-if="mosaicSlots[1]"
                :key="'s-' + String(mosaicSlots[1])"
                :src="mosaicSlots[1]"
                alt="About photo"
                class="mosaic-img"
              />
              <div v-else class="mosaic-placeholder" aria-hidden="true" />
            </div>
            <div class="mosaic-wide mosaic-cell">
              <q-img
                v-if="mosaicSlots[2]"
                :key="'w-' + String(mosaicSlots[2])"
                :src="mosaicSlots[2]"
                alt="About photo"
                class="mosaic-img"
              />
              <div v-else class="mosaic-placeholder" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { personal } from 'src/data/resume'
import { aboutPhotos } from 'src/data/media'

/** Three mosaic cells: up to 3 distinct random picks from `about/`; `null` = empty slot */
const mosaicSlots = ref([null, null, null])

function shuffleInPlace (arr) {
  const a = arr
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function refreshMosaic () {
  const pool = [...aboutPhotos]
  shuffleInPlace(pool)
  const picks = pool.slice(0, Math.min(3, pool.length))
  while (picks.length < 3) picks.push(null)
  shuffleInPlace(picks)
  mosaicSlots.value = picks
}

let rotateTimer = null

onMounted(() => {
  refreshMosaic()
  if (aboutPhotos.length >= 1) {
    rotateTimer = setInterval(refreshMosaic, 5000)
  }
})

onUnmounted(() => {
  clearInterval(rotateTimer)
})
</script>

<style lang="scss" scoped>
.about-text {
  font-size: 1rem;
  line-height: 1.8;

  :deep(strong) {
    color: #f9f8f8;
    font-weight: 600;
  }
}

.about-stat {
  padding: 12px 20px;
  border-left: 2px solid rgba(88, 114, 82, 0.4);

  &-value {
    font-size: 1rem;
    font-weight: 600;
  }

  &-label {
    font-size: 0.72rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top: 2px;
  }
}

.photo-mosaic {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 14px;
  max-width: 440px;
  margin: 0 auto;
}

.mosaic-cell {
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18);
  }
}

.mosaic-tall {
  grid-row: 1 / 3;
  border-radius: 40% 8px 8px 16px;
  aspect-ratio: 2 / 3;
}

.mosaic-wide {
  border-radius: 8px 24px 4px 8px;
  aspect-ratio: 4 / 3;
}

.mosaic-square {
  border-radius: 8px 4px 32% 8px;
  aspect-ratio: 1;
}

.mosaic-img {
  width: 100%;
  height: 100%;
  filter: saturate(0.85);
  transition: filter 0.4s ease, transform 0.5s ease;

  :deep(img) {
    object-fit: cover;
  }

  &:hover {
    filter: saturate(1);
    transform: scale(1.03);
  }
}

.mosaic-placeholder {
  width: 100%;
  height: 100%;
  min-height: 80px;
  background: rgba(53, 84, 49, 0.22);
  border: 1px dashed rgba(240, 211, 160, 0.18);
}
</style>
