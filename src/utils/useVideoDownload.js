import { ref } from 'vue';
import { downloadTikTok } from '@/services/tiktokService';
import { downloadFile } from '@/utils/download';
import { isTikTokUrl } from '@/utils/validation';
export function useVideoDownload() {
    const loading = ref(false);
    const error = ref('');
    const videoData = ref(null);
    const hideError = () => {
        setTimeout(() => {
            error.value = '';
        }, 5000);
    };
    const downloadMediaFile = async (url, type) => {
        try {
            const filename = `tiktok_${type}_${Date.now()}.${type === 'video' ? 'mp4' : 'jpg'}`;
            await downloadFile(url, filename);
        }
        catch (err) {
            error.value = `${type.charAt(0).toUpperCase() + type.slice(1)} download failed`;
            hideError();
        }
    };
    const handleMediaDownload = {
        image: (url) => downloadMediaFile(url, 'image'),
        video: (url) => downloadMediaFile(url, 'video')
    };
    const checkTikTokUrl = (url) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(isTikTokUrl(url));
            }, 10000);
        });
    };
    const downloadVideo = async (tiktokUrl) => {
        if (!tiktokUrl)
            return;
        loading.value = true;
        error.value = '';
        videoData.value = null;
        try {
            const [isValid] = await Promise.all([
                checkTikTokUrl(tiktokUrl),
                new Promise(resolve => setTimeout(resolve, 10000))
            ]);
            if (!isValid) {
                error.value = 'Invalid TikTok URL';
                hideError();
                return;
            }
            const data = await downloadTikTok(tiktokUrl);
            videoData.value = data;
        }
        catch (err) {
            error.value = err instanceof Error ? err.message : 'An error occurred';
            hideError();
            videoData.value = null;
        }
        finally {
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
