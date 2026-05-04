<template>
  <section id="gallery" class="section-block">
    <div class="q-px-lg" style="max-width: 1100px; margin: 0 auto">
      <h2 class="section-title text-white">
        Gallery
      </h2>

      <div v-if="gallery.length" class="gallery-grid">
        <div
          v-for="(img, i) in gallery"
          :key="i"
          class="gallery-cell"
          :class="'cell-' + i"
        >
          <div class="gallery-item cursor-pointer" @click="openLightbox(i)">
            <q-img
              :src="img.src"
              :alt="img.alt"
              :ratio="4/3"
              class="gallery-img"
            />
            <div class="gallery-overlay">
              <q-icon name="mdi-arrow-expand" size="24px" color="white" class="q-mb-sm" />
              <span class="font-mono text-white text-caption">{{ img.caption }}</span>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="text-grey-6 text-body2 text-center q-py-lg font-mono">
        Add images to <strong>src/assets/media/gallery/</strong>
      </p>
    </div>

    <!-- Lightbox -->
    <q-dialog v-model="lightboxOpen" maximized transition-show="fade" transition-hide="fade">
      <div class="lightbox-backdrop flex flex-center" @click="lightboxOpen = false">
        <q-btn
          flat
          round
          dense
          icon="close"
          color="white"
          size="lg"
          class="lightbox-close"
          @click.stop="lightboxOpen = false"
        />
        <q-btn
          v-if="gallery.length > 1"
          flat round dense icon="mdi-chevron-left" color="white" size="lg"
          class="lightbox-nav lightbox-prev"
          @click.stop="navigate(-1)"
        />
        <q-img
          v-if="activeIdx !== null"
          :src="gallery[activeIdx].src"
          :alt="gallery[activeIdx].alt"
          fit="contain"
          class="lightbox-img"
          @click.stop
        />
        <q-btn
          v-if="gallery.length > 1"
          flat round dense icon="mdi-chevron-right" color="white" size="lg"
          class="lightbox-nav lightbox-next"
          @click.stop="navigate(1)"
        />
        <div class="lightbox-caption font-mono text-white text-caption" @click.stop>
          {{ gallery[activeIdx]?.caption }}
        </div>
      </div>
    </q-dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { galleryItems as gallery } from 'src/data/media'

const lightboxOpen = ref(false)
const activeIdx = ref(null)

function openLightbox (i) {
  activeIdx.value = i
  lightboxOpen.value = true
}

function navigate (dir) {
  activeIdx.value = (activeIdx.value + dir + gallery.length) % gallery.length
}
</script>

<style lang="scss" scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  .gallery-img {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover .gallery-img {
    transform: scale(1.06);
  }

  &:hover .gallery-overlay {
    opacity: 1;
  }
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(53, 84, 49, 0.65);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.lightbox-backdrop {
  background: rgba(53, 84, 49, 0.95);
  width: 100%;
  height: 100%;
  position: relative;
}

.lightbox-close {
  position: absolute;
  top: 16px;
  right: 24px;
  z-index: 10;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.lightbox-prev { left: 16px; }
.lightbox-next { right: 16px; }

.lightbox-img {
  max-width: 85vw;
  max-height: 80vh;
  border-radius: 8px;
}

.lightbox-caption {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;
}
</style>
