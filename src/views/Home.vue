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
          />
          <Button 
            @click="downloadVideo" 
            :loading="loading"
            :disabled="!tiktokUrl"
            variant="submit"
          >
            <ArrowDownTrayIcon class="w-3 h-3" /> <!-- Thêm class để điều chỉnh kích thước -->
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
        />
      </div>

      <FeatureGrid :hideFeatures="!!videoData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { downloadTikTok } from '@/services/tiktokService';
import MediaGrid from '@/components/MediaGrid.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import FeatureGrid from '@/components/FeatureGrid.vue';
import { ArrowDownTrayIcon, ClipboardIcon } from '@heroicons/vue/24/outline'

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

const downloadVideo = async () => {
  if (!tiktokUrl.value) return;
  
  loading.value = true;
  error.value = '';

  try {
    const data = await downloadTikTok(tiktokUrl.value);
    videoData.value = data;

    error.value = '';
  } catch (err) {
 
    if (!videoData.value) {
      error.value = err instanceof Error ? err.message : 'An error occurred';
      hideError();
    }
  } finally {    loading.value = false;  }}</script><style scoped>@import "../styles/home.css";.content {  display: flex;  flex-direction: column;  gap: 24px;    padding: 0 16px;}.w-3 {  width: 12px;  height: 12px;}</style>