<template>
  <div class="media-container">
    <template v-if="currentMediaType === 'video'">
      <div class="video-container">
        <video 
          controls 
          :src="video"
          class="video-preview"
        ></video>
        <a :href="video" 
           download
           class="download-button primary center-text"
        >
          <span class="icon">⭳</span> Download Video <span class="mp4-text">.MP4</span>
        </a>
      </div>
    </template>

    <template v-else-if="currentMediaType === 'images'">
      <div class="media-grid">
        <div v-for="(image, index) in images" 
           :key="index" 
           class="media-item"
        >
          <div class="media-content">
            <img :src="image" :alt="`Image ${index + 1}`">
            <div class="overlay">
              <span class="image-number">#{{ index + 1 }}</span>
              <a :href="image" 
                 download 
                 class="download-button ghost"
                 @click.stop
              >
                <span class="icon">⭳</span>
                Download
              </a>
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
}>();

const currentMediaType = computed(() => {
  if (props.images?.length) return 'images'
  if (props.video) return 'video'
  return null
})
</script>

<style scoped>
@import "../styles/media.css"; 

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
</style>