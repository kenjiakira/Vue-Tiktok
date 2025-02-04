<template>
  <div class="home">
    <h1 class="main-title">TikTok Downloader</h1>
    <div class="content">
      <div class="input-container">
        <div class="input-wrapper">
          <Button 
            @click="handlePaste"
            variant="paste"
            :icon-component="ClipboardIcon"
            aria-label="Paste TikTok URL from clipboard"
            title="Paste from clipboard"
          />
          <Input
            v-model="tiktokUrl"
            placeholder="Paste TikTok URL"
            :disabled="loading"
            @keyup.enter="downloadVideo"
            aria-label="TikTok video URL input"
          />
          <Button 
            @click="downloadVideo" 
            :loading="loading"
            :disabled="!tiktokUrl"
            variant="submit"
            :aria-label="loading ? 'Downloading...' : 'Download TikTok video'"
            :title="loading ? 'Downloading...' : 'Download video'"
          >
            <ArrowDownTrayIcon class="w-3 h-3" aria-hidden="true" />
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
          :downloading="downloading"
          :videoId="videoData.id"
          @download-image="handleMediaDownload.image"
          @download-video="handleMediaDownload.video" 
        />
      </div>

      <FeatureGrid :hideFeatures="!!videoData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { extractTikTokUrl } from '@/utils/urlExtractor';
import { usePaste } from '@/utils/usePaste';
import { useVideoDownload } from '@/utils/useVideoDownload';
import { downloadFile } from '@/utils/download';
import MediaGrid from '@/components/MediaGrid.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import FeatureGrid from '@/components/FeatureGrid.vue';
import { ArrowDownTrayIcon, ClipboardIcon } from '@heroicons/vue/24/outline';

const windowWidth = ref(window.innerWidth);
const tiktokUrl = ref('');
const processedUrl = ref('');
const downloading = ref(false);
const { error: pasteError, pasteFromClipboard } = usePaste();
const { 
  loading, 
  error, 
  videoData, 
  downloadVideo: startDownload,
} = useVideoDownload();

const handleMediaDownload = {
  video: async (url: string, id: string) => {
    downloading.value = true;
    try {
      await downloadFile(url, `savetik_${id}.mp4`);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      downloading.value = false;
    }
  },
  image: async (url: string, id: string, index: number) => {
    downloading.value = true;
    try {
      await downloadFile(url, `savetik_${id}_${index + 1}.jpg`);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      downloading.value = false;
    }
  }
};

watch(tiktokUrl, (newValue) => {
  const extractedUrl = extractTikTokUrl(newValue);
  if (extractedUrl) {
    processedUrl.value = extractedUrl;
  }
});

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

const handlePaste = async () => {
  const text = await pasteFromClipboard();
  if (text) {
    tiktokUrl.value = text;
    const extractedUrl = extractTikTokUrl(text);
    if (extractedUrl) {
      processedUrl.value = extractedUrl;
    }
  }
};

const downloadVideo = () => {
  startDownload(processedUrl.value || tiktokUrl.value);
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<style scoped>@import "../styles/home.css";.content {  display: flex;  flex-direction: column;  gap: 24px;    padding: 0 16px;}.w-3 {  width: 12px;  height: 12px;}

.main-title {
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(135deg, #fff 0%, #e6e9f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.5px;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .main-title {
    font-size: 32px;
    margin-bottom: 24px;
    padding: 0 16px;
  }

  .content {
    gap: 16px;
    padding: 0 12px;
  }

  .result {
    padding: 16px;
  }

  .result h3 {
    font-size: 16px;
    line-height: 1.4;
  }

  .author {
    font-size: 14px;
  }
}
</style>