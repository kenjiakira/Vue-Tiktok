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
          @click="handleVideoDownload"
        >
          <span class="icon">⭳</span> Download Video <span class="mp4-text">.MP4</span>
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
                @click="$emit('imageClick', image)"
              >
                <span class="icon">⭳</span>
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
}>();

const currentMediaType = computed(() => {
  if (props.images?.length) return 'images'
  if (props.video) return 'video'
  return null
})

const handleVideoDownload = () => {
  if (props.video) {
    emit('videoClick', props.video);
  }
};

const emit = defineEmits<{
  (e: 'imageClick', url: string): void;
  (e: 'videoClick', url: string): void;
}>();
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

.clickable-image {
  cursor: pointer;
  transition: opacity 0.2s;
}
.clickable-image:hover {
  opacity: 0.8;
}
</style>