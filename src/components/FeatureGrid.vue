<template>
  <div v-if="!hideFeatures">
    <h2 class="features-heading">
      Save TT Videos For<br class="mobile-break"> 
      <span class="highlight">&amp;</span><br class="mobile-break">
      Free using our<br class="mobile-break"> 
      TikTok Video Downloader
    </h2>
    <div class="features-grid">
      <div class="feature">
        <div class="feature-icon-wrapper">
          <div class="feature-icon">⚡</div>
        </div>
        <div class="feature-content">
          <h3>Unlimited Downloads</h3>
          <p>Experience unrestricted video downloads with TikSave. No constraints, just limitless content available for you.</p>
        </div>
      </div>
      
      <div class="feature">
        <div class="feature-icon-wrapper">
          <div class="feature-icon">🎯</div>
        </div>
        <div class="feature-content">
          <h3>Eliminate the Watermark</h3>
          <p>Effortlessly get rid of annoying TikTok symbols from your downloaded videos. Say goodbye to watermarks with TikSave.</p>
        </div>
      </div>
      
      <div class="feature">
        <div class="feature-icon-wrapper">
          <div class="feature-icon">🎵</div>
        </div>
        <div class="feature-content">
          <h3>MP4 and MP3 Support</h3>
          <p>Save your favorite TikTok videos in high-quality MP4 format or convert them to MP3 audio files for various uses.</p>
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