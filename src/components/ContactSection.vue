<template>
  <section id="contact" class="section-block">
    <div class="q-px-lg text-center" style="max-width: 620px; margin: 0 auto">
      <h2 class="font-display text-h3 text-white text-weight-bold q-mb-md" style="letter-spacing: -0.02em">
        HIT ME UP
      </h2>

      <p class="text-grey-5 q-mb-xl" style="font-size: 1.05rem; line-height: 1.8">
        {{ personal.contactBlurb }}
      </p>

      <q-btn
        unelevated
        no-caps
        color="primary"
        text-color="dark"
        class="font-mono text-weight-medium q-mb-xl contact-btn"
        padding="14px 40px"
        type="a"
        :href="'mailto:' + personal.email"
        label="What's good?"
        icon-right="mdi-email-outline"
      />

      <div class="row justify-center q-gutter-xl lt-md">
          <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <q-icon name="mdi-linkedin" size="26px" class="social-icon text-grey-5" />
          </a>
          <a :href="personal.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <q-icon name="mdi-github" size="26px" class="social-icon text-grey-5" />
          </a>
          <a :href="'mailto:' + personal.email" aria-label="Email">
            <q-icon name="mdi-email-outline" size="26px" class="social-icon text-grey-5" />
          </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { personal } from 'src/data/resume'
</script>

<style lang="scss" scoped>
.contact-btn {
  font-size: 0.95rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(236, 195, 11, 0.2);
    transform: translateY(-2px);
  }
}

.social-icon {
  transition: all 0.3s ease;

  &:hover {
    color: var(--q-primary) !important;
    transform: translateY(-3px);
  }
}
</style>
