import axios from 'axios';
import type { TikTokResponse } from '@/types';

export async function downloadTikTok(url: string) {
  try {
    const response = await axios.post<TikTokResponse>(
      'https://www.tikwm.com/api/', 
      { url }, 
      { timeout: 10000 }
    );

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const videoData = response.data.data;

    if (response.data.code !== 0 || (!videoData.images && !videoData.play)) {
      throw new Error('Could not process this TikTok URL');
    }
    
    return videoData;

  } catch (error) {
   
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out - Please try again');
      }
      await new Promise(resolve => setTimeout(resolve, 10000));
      throw new Error('Network error - Please check your connection');
    }
    throw error;
  }
}
