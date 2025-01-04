
export interface TikTokAuthor {
  nickname: string;
  unique_id: string;
  avatar: string;
}

export interface TikTokMusic {
  title: string;
  author: string;
  url: string;
}

export interface TikTokData {
  title: string;
  play: string;
  images?: string[];
  author: TikTokAuthor;
  digg_count: number;
  music?: TikTokMusic;
}

export interface TikTokResponse {
  code: number;
  msg: string;
  data: {
    author: {
      nickname: string;
      unique_id: string;
    };
    title: string;
    play: string;
    images?: string[];
    digg_count: number;
  };
}

export interface DownloadHistoryItem {
  url: string;
  type: 'video' | 'image' | 'audio';
  date: Date;
  title: string;
}

export type { TikTokData as default };
