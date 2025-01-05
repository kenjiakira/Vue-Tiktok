import axios from 'axios';
import type { TikTokResponse } from '@/types';

const api = axios.create({
  timeout: 5000, 
  baseURL: 'https://www.tikwm.com/api/'
});

export async function downloadTikTok(url: string, retryCount = 2) {
  try {
    const response = await api.post<TikTokResponse>('', { url });
    
    const videoData = response.data.data;
    if (response.data.code !== 0 || (!videoData.images && !videoData.play)) {
      throw new Error('Could not process this TikTok URL');
    }
    
    return videoData;

  } catch (error) {
    if (axios.isAxiosError(error)) {
    
      if (retryCount > 0 && (error.code === 'ECONNABORTED' || !error.response)) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return downloadTikTok(url, retryCount - 1);
      }

      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out - Please try again');
      }
      throw new Error('Network error - Please check your connection');
    }
    throw error;
  }
}
