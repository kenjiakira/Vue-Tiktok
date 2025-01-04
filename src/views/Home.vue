<template>
  <div class="home">
    <h1>TikTok Downloader</h1>
    <div class="content">
      <div class="input-container">
        <div class="input-wrapper">
          <Button 
            @click="pasteFromClipboard"
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
          @image-click="downloadImage"
          @video-click="handleVideoClick" 
        />
      </div>

      <FeatureGrid :hideFeatures="!!videoData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { downloadTikTok } from '@/services/tiktokService';
import { downloadFile } from '@/utils/download';
import MediaGrid from '@/components/MediaGrid.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import FeatureGrid from '@/components/FeatureGrid.vue';
import { ArrowDownTrayIcon, ClipboardIcon } from '@heroicons/vue/24/outline'
import { isTikTokUrl } from '@/utils/validation';

const windowWidth = ref(window.innerWidth);
const tiktokUrl = ref('');

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

const pasteFromClipboard = async () => {
  try {
    const text = await navigator.clipboard.readText();
    tiktokUrl.value = text;
  } catch (err) {
    error.value = "Unable to paste from clipboard";
    hideError();
  }
};
  
onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
const loading = ref(false);
const error = ref('');
const videoData = ref<any>(null);

const hideError = () => {
  setTimeout(() => {
    error.value = '';
  }, 5000);
}

const downloadMedia = async (url: string, type: string) => {
  try {
    const filename = `tiktok_${type}_${Date.now()}.${type === 'video' ? 'mp4' : 'jpg'}`;
    await downloadFile(url, filename);
  } catch (err) {
    error.value = 'Download failed';
    hideError();
  }
};

const downloadImage = async (imageUrl: string) => {
  try {
    await downloadMedia(imageUrl, 'image');
  } catch (err) {
    error.value = 'Image download failed';
    hideError();
  }
};

const handleVideoClick = async (videoUrl: string) => {
  try {
    await downloadMedia(videoUrl, 'video');
  } catch (err) {
    error.value = 'Video download failed';
    hideError();
  }
};

const checkTikTokUrl = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    // Tăng delay lên 10 giây cho validation URL
    setTimeout(() => {
      resolve(isTikTokUrl(url));
    }, 10000);
  });
};

const downloadVideo = async () => {
  if (!tiktokUrl.value) return;
  
  loading.value = true;
  error.value = '';
  videoData.value = null;

  try {
    const [isValid] = await Promise.all([
      checkTikTokUrl(tiktokUrl.value),
      // Minimum loading time cũng tăng lên 10 giây
      new Promise(resolve => setTimeout(resolve, 10000))
    ]);

    if (!isValid) {
      error.value = 'Invalid TikTok URL';
      hideError();
      return;
    }

    const data = await downloadTikTok(tiktokUrl.value);
    videoData.value = data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An error occurred';
    hideError();
    videoData.value = null;
  } finally {
    loading.value = false;
  }
};
</script><style scoped>@import "../styles/home.css";.content {  display: flex;  flex-direction: column;  gap: 24px;    padding: 0 16px;}.w-3 {  width: 12px;  height: 12px;}</style>