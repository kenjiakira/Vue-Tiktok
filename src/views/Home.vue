<template>
  <div class="home">
    <h1>TikTok Downloader</h1>
    <div class="content">
      <div class="input-container">
        <div class="input-wrapper">
          <Button 
            @click="handlePaste"
            variant="paste"
            :icon-component="ClipboardIcon"
          />
          <Input
            v-model="tiktokUrl"
            placeholder="Paste TikTok URL"
            :disabled="loading"
            @keyup.enter="downloadVideo"
          />
          <Button 
            @click="downloadVideo" 
            :loading="loading"
            :disabled="!tiktokUrl"
            variant="submit"
          >
            <ArrowDownTrayIcon class="w-3 h-3" />
            Download
          </Button>
        </div>
      </div>

      <p v-if="error && !videoData" class="error">{{ error }}</p>

      <div v-if="videoData" class="result">
        <h3>{{ videoData.title }}</h3>
        <p class="author">@{{ videoData.author.unique_id }} · {{ videoData.digg_count }} likes</p>
        
        <MediaGrid 
          :video="videoData.play"
          :images="videoData.images" 
          @download-image="handleMediaDownload.image"
          @download-video="handleMediaDownload.video" 
        />
      </div>

      <FeatureGrid :hideFeatures="!!videoData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { usePaste } from '@/utils/usePaste';
import { useVideoDownload } from '@/utils/useVideoDownload';
import MediaGrid from '@/components/MediaGrid.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import FeatureGrid from '@/components/FeatureGrid.vue';
import { ArrowDownTrayIcon, ClipboardIcon } from '@heroicons/vue/24/outline';

const windowWidth = ref(window.innerWidth);
const tiktokUrl = ref('');
const { error: pasteError, pasteFromClipboard } = usePaste();
const { 
  loading, 
  error, 
  videoData, 
  downloadVideo: startDownload,
  handleMediaDownload 
} = useVideoDownload();

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

const handlePaste = async () => {
  const text = await pasteFromClipboard();
  if (text) {
    tiktokUrl.value = text;
  }
};

const downloadVideo = () => {
  startDownload(tiktokUrl.value);
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<style scoped>@import "../styles/home.css";.content {  display: flex;  flex-direction: column;  gap: 24px;    padding: 0 16px;}.w-3 {  width: 12px;  height: 12px;}</style>