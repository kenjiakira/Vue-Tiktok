import axios from 'axios';
import { downloadFile } from '@/utils/download';
import type { TikTokResponse } from '@/types';

export async function downloadTikTok(url: string) {
  try {
    const response = await axios.post<TikTokResponse>('https://www.tikwm.com/api/', { url });
    
    if (response.data.code !== 0) {
      throw new Error('Invalid TikTok URL');
    }
    
    const videoData = response.data.data;
    
    // Kiểm tra xem có dữ liệu media không
    if (!videoData.images && !videoData.play) {
      throw new Error('No media content found');
    }
    
    return videoData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Network error - Please check your connection');
    }
    throw error;
  }
}
