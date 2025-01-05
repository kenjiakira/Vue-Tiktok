<template>
  <div class="media-container">
    <template v-if="currentMediaType === 'video'">
      <div class="video-container">
        <video 
          controls 
          :src="video"
          class="video-preview"
        ></video>
        <button 
          class="download-button primary center-text"
          @click="video && $emit('downloadVideo', video, videoId)"
          :disabled="downloading"
        >
          <i v-if="!downloading" class="fas fa-download"></i>
          <span v-else class="loading-dots">...</span>
          Download Video <span class="mp4-text">.MP4</span>
        </button>
      </div>
    </template>

    <template v-else-if="currentMediaType === 'images'">
      <div class="media-grid">
        <div v-for="(image, index) in images" 
           :key="index" 
           class="media-item"
        >
          <div class="media-content">
            <img :src="image" :alt="`Image ${index + 1}`" class="preview-image">
            <div class="overlay">
              <span class="image-number">#{{ index + 1 }}</span>
              <button 
                class="download-button ghost"
                @click="$emit('downloadImage', image, videoId, index)"
              >
                <i class="fas fa-download"></i>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  images?: string[]
  video?: string
  downloading?: boolean
  videoId: string  // Add new prop for video ID
}>();

const currentMediaType = computed(() => {
  if (props.images?.length) return 'images'
  if (props.video) return 'video'
  return null
})

defineEmits<{
  (e: 'downloadImage', url: string, id: string, index: number): void
  (e: 'downloadVideo', url: string, id: string): void
}>();
</script>

<style scoped>
@import "../styles/media.css";

.loading-dots {
  font-family: Arial, sans-serif;
  letter-spacing: 2px;
  font-weight: bold;
}

/* Remove duplicate styles that are already in media.css */
.center-text {
  justify-content: center;
  margin: 0 auto;
  width: fit-content;
  min-width: 200px;
}

.mp4-text {
  opacity: 0.7;
  font-size: 0.9em;
  margin-left: 4px;
}

@media (max-width: 640px) {
  .mp4-text {
    display: none;
  }
  
  .loading-dots {
    font-size: 18px;
    line-height: 0;
  }
}
</style>