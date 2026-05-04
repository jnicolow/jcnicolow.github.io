<template>
  <section id="hero" class="hero-section flex flex-center">
    <div class="hero-grid">
      <div class="hero-text q-px-lg">
        <p class="font-mono text-secondary text-body2 q-mb-md hero-intro">Hey there!, I'm...</p>

        <h1 class="hero-name font-display text-weight-bold q-mb-sm">
          {{ personal.name }}
        </h1>

        <h2 class="hero-tagline font-display text-weight-bold q-mb-lg">
          {{ personal.tagline }}
        </h2>

        <p class="hero-summary text-grey-5 q-mb-xl">
          {{ personal.summary }}
        </p>

        <div class="row q-gutter-md">
          <q-btn
            unelevated
            no-caps
            color="primary"
            text-color="dark"
            label="View My Work"
            class="font-mono text-weight-medium"
            padding="12px 32px"
            @click="scrollTo('projects')"
          />
          <q-btn
            outline
            no-caps
            color="secondary"
            label="Get in Touch"
            class="font-mono text-weight-medium"
            padding="12px 32px"
            @click="scrollTo('contact')"
          />
        </div>
      </div>

      <div v-if="photos.length" class="hero-portrait gt-sm q-px-lg">
        <div class="portrait-frame">
          <img
            v-for="(src, i) in photos"
            :key="i"
            :src="src"
            :class="['portrait-img', { active: activePhoto === i }]"
            :alt="personal.name"
          />
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <q-icon name="mdi-chevron-down" color="secondary" size="24px" class="bounce" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { personal } from 'src/data/resume'
import { heroPhotos } from 'src/data/media'

/** Every image in `src/assets/media/hero/` — random order per load (see `media.js`) */
const photos = heroPhotos

const activePhoto = ref(0)
let rotateTimer = null

function scrollTo (id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  if (photos.length <= 1) return
  rotateTimer = setInterval(() => {
    activePhoto.value = (activePhoto.value + 1) % photos.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(rotateTimer)
})
</script>

<style lang="scss" scoped>
.hero-section {
  min-height: 100vh;
  position: relative;
  padding-top: 60px;
  padding-bottom: 100px;
}

.hero-grid {
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.hero-intro {
  animation: fadeUp 0.6s ease both;
  animation-delay: 0.1s;
}

.hero-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: linear-gradient(135deg, #f9f8f8 40%, #F0D3A0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeUp 0.6s ease both;
  animation-delay: 0.2s;
}

.hero-tagline {
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: rgba(240, 211, 160, 0.8);
  -webkit-text-fill-color: unset;
  animation: fadeUp 0.6s ease both;
  animation-delay: 0.35s;
}

.hero-summary {
  font-size: 1rem;
  line-height: 1.8;
  max-width: 520px;
  animation: fadeUp 0.6s ease both;
  animation-delay: 0.5s;
}

.hero-text .row {
  animation: fadeUp 0.6s ease both;
  animation-delay: 0.65s;
}

/* Portrait */
.hero-portrait {
  animation: fadeUp 0.8s ease both;
  animation-delay: 0.6s;
}

.portrait-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  max-width: 380px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(240, 211, 160, 0.12);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.25),
    0 0 80px rgba(240, 211, 160, 0.04);
}

.portrait-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;

  &.active {
    opacity: 1;
  }
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.bounce {
  animation: bounceDown 2s ease-in-out infinite;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceDown {
  0%, 100% { transform: translateY(0); opacity: 0.4; }
  50% { transform: translateY(8px); opacity: 1; }
}
</style>
