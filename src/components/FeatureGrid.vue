<template>
  <div v-if="!hideFeatures">
    <h2 class="features-heading optimized-heading">{{ $t('features.title') }}</h2>
    <div class="features-grid">
      <div class="feature">
        <div class="feature-icon-wrapper">
          <div class="feature-icon">⚡</div>
        </div>
        <div class="feature-content">
          <h3>{{ $t('features.unlimited.title') }}</h3>
          <p>{{ $t('features.unlimited.description') }}</p>
        </div>
      </div>
      
      <div class="feature">
        <div class="feature-icon-wrapper">
          <div class="feature-icon">🎯</div>
        </div>
        <div class="feature-content">
          <h3>{{ $t('features.watermark.title') }}</h3>
          <p>{{ $t('features.watermark.description') }}</p>
        </div>
      </div>
      
      <div class="feature">
        <div class="feature-icon-wrapper">
          <div class="feature-icon">🚀</div>
        </div>
        <div class="feature-content">
          <h3>{{ $t('features.fast.title') }}</h3>
          <p>{{ $t('features.fast.description') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const hideFeatures = ref(false)

const isVideoLoading = ref(false)
watch(isVideoLoading, (newVal) => {
  hideFeatures.value = newVal
})
</script>

<style scoped>
@import "../styles/feature.css";

.optimized-heading {
  font-display: swap;
  will-change: transform;
  transform: translateZ(0);
  font-size: clamp(24px, 4vw, 32px);
  text-align: center;
  margin: 2rem 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

@media (max-width: 640px) {
  .optimized-heading {
    font-size: 24px;
    margin: 1.5rem 0;
  }
}
</style>