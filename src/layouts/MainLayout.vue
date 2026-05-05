<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="main-header" :class="{ 'header-scrolled': scrolled, 'header-hidden': headerHidden }">
      <q-toolbar class="site-wrap">
        <a href="#hero" class="logo font-mono text-primary text-weight-bold text-h6 q-mr-auto" @click.prevent="scrollTo('hero')">
          {{ personal.brand }}
        </a>

        <div class="gt-sm row items-center q-gutter-x-md">
          <a
            :href="cvPdfUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link text-caption text-weight-medium"
          >
            CV
          </a>
          <a
            v-for="(link, i) in navLinks"
            :key="link.id"
            :href="'#' + link.id"
            class="nav-link text-caption text-weight-medium"
            :class="{ active: activeSection === link.id }"
            @click.prevent="scrollTo(link.id)"
          >
            {{ link.label }}
          </a>
        </div>

        <q-btn flat dense round icon="menu" class="lt-md" color="white" @click="drawer = !drawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay :width="280" class="mobile-drawer">
      <q-list padding class="q-mt-xl">
        <q-item
          tag="a"
          :href="cvPdfUrl"
          target="_blank"
          rel="noopener noreferrer"
          clickable
          @click="drawer = false"
        >
          <q-item-section>
            <span class="text-subtitle1 text-weight-medium">CV</span>
          </q-item-section>
        </q-item>
        <q-item
          v-for="(link, i) in navLinks"
          :key="link.id"
          clickable
          @click="drawerScrollTo(link.id)"
        >
          <q-item-section>
            <span class="text-subtitle1 text-weight-medium">{{ link.label }}</span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Fixed side social bar (left) -->
    <div class="side-social gt-sm">
      <a
        v-if="personal.website"
        :href="personal.website"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Website"
      >
        <q-icon name="mdi-web" size="20px" />
      </a>
      <a :href="personal.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <q-icon name="mdi-github" size="20px" />
      </a>
      <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <q-icon name="mdi-linkedin" size="20px" />
      </a>
      <a :href="'mailto:' + personal.email" aria-label="Email">
        <q-icon name="mdi-email-outline" size="20px" />
      </a>
      <div class="side-line" />
    </div>

    <!-- Fixed side email (right) -->
    <div class="side-email gt-sm">
      <a :href="'mailto:' + personal.email" class="font-mono">{{ personal.email }}</a>
      <div class="side-line" />
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

    <transition name="fade-up">
      <q-btn
        v-show="scrolled"
        round
        flat
        icon="mdi-chevron-up"
        class="back-to-top"
        aria-label="Back to top"
        @click="scrollToTop"
      />
    </transition>

  </q-layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { personal } from 'src/data/resume'
import { cvPdfUrl } from 'src/data/media'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' }
]

const drawer = ref(false)
const scrolled = ref(false)
const headerHidden = ref(false)
const activeSection = ref('hero')
let lastScroll = 0

function scrollTo (id) {
  const el = document.getElementById(id)
  if (!el) return
  const headerOffset = 70
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

function drawerScrollTo (id) {
  drawer.value = false
  setTimeout(() => scrollTo(id), 300)
}

function scrollToTop () {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onScroll () {
  const current = window.scrollY
  scrolled.value = current > 50
  headerHidden.value = current > lastScroll && current > 200
  lastScroll = current

  const scrollPos = current + window.innerHeight / 3
  let currentId = 'hero'
  for (const link of navLinks) {
    const section = document.getElementById(link.id)
    if (section && section.offsetTop <= scrollPos) {
      currentId = link.id
    }
  }
  activeSection.value = currentId
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style lang="scss" scoped>
.main-header {
  background: rgba(53, 84, 49, 0.88);
  backdrop-filter: blur(20px) saturate(1.5);
  border-bottom: 1px solid rgba(240, 211, 160, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.header-scrolled {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.header-hidden {
  transform: translateY(-100%);
}

.logo {
  text-decoration: none;
  letter-spacing: -0.02em;
  font-size: 1.1rem !important;
}

.nav-link {
  color: rgba(249, 248, 248, 0.7);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  padding: 6px 0;

  .nav-num {
    font-size: 0.7rem;
    margin-right: 4px;
  }

  &:hover,
  &.active {
    color: var(--q-primary);
  }
}

.mobile-drawer {
  background: #355431 !important;
  border-left: 1px solid rgba(240, 211, 160, 0.08);
}

.side-social,
.side-email {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  z-index: 10;
}

.side-social {
  left: 32px;

  a {
    color: rgba(240, 211, 160, 0.5);
    transition: all 0.3s ease;

    &:hover {
      color: var(--q-primary);
      transform: translateY(-3px);
    }
  }
}

.side-email {
  right: 32px;

  a {
    writing-mode: vertical-rl;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    color: rgba(240, 211, 160, 0.5);
    transition: all 0.3s ease;

    &:hover {
      color: var(--q-primary);
      transform: translateY(-3px);
    }
  }
}

.side-line {
  width: 1px;
  height: 90px;
  background: rgba(240, 211, 160, 0.2);
}

.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 84px;
  z-index: 100;
  color: rgba(88, 114, 82, 0.5) !important;
  border: 1px solid rgba(88, 114, 82, 0.2);
  backdrop-filter: blur(8px);
  background: rgba(88, 114, 82, 0.06) !important;
  transition: all 0.25s ease;

  &:hover {
    color: rgba(88, 114, 82, 0.9) !important;
    border-color: rgba(88, 114, 82, 0.4);
    background: rgba(88, 114, 82, 0.12) !important;
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    right: 20px;
    bottom: 20px;
  }
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

</style>
