<template>
  <div v-if="!hideFeatures">
    <h2 class="features-heading">{{ $t('features.title') }}</h2>
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

<style croped>
@import "../styles/feature.css";
</style>