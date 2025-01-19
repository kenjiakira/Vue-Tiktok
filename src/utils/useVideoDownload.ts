import { ref } from 'vue';
import { downloadTikTok } from '@/services/tiktokService';
import { downloadFile } from '@/utils/download';
import { isTikTokUrl } from '@/utils/validation';

export function useVideoDownload() {
  const loading = ref(false);
  const error = ref('');
  const videoData = ref<any>(null);

  const hideError = () => {
    setTimeout(() => {
      error.value = '';
    }, 5000);
  }

  const downloadMediaFile = async (url: string, type: string, id?: string, index?: number) => {
    try {
      let filename = '';
      if (type === 'video') {
        filename = `savetik_${id}.mp4`;
      } else {
        const imageIndex = typeof index === 'number' ? index : 0;
        filename = `savetik_${id}_${imageIndex + 1}.jpg`;
      }
      await downloadFile(url, filename);
    } catch (err) {
      error.value = `${type.charAt(0).toUpperCase() + type.slice(1)} download failed`;
      hideError();
    }
  };

  const handleMediaDownload = {

    image: (url: string, id: string, index: number) => downloadMediaFile(url, 'image', id, index),
    video: (url: string, id: string) => downloadMediaFile(url, 'video', id)
  };

  const checkTikTokUrl = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(isTikTokUrl(url));
      }, 3000); 
    });
  };

  const downloadVideo = async (tiktokUrl: string) => {
    if (!tiktokUrl) return;
    
    loading.value = true;
    error.value = '';
    videoData.value = null;

    try {
      const [isValid] = await Promise.all([
        checkTikTokUrl(tiktokUrl),
        new Promise(resolve => setTimeout(resolve, 3000)) 
      ]);

      if (!isValid) {
        error.value = 'Invalid TikTok URL';
        hideError();
        return;
      }

      const data = await downloadTikTok(tiktokUrl);
      videoData.value = data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred';
      hideError();
      videoData.value = null;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    videoData,
    downloadVideo,
    handleMediaDownload
  };
}
