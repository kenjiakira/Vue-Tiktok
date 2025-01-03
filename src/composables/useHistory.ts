import { ref } from 'vue'

interface DownloadHistory {
  url: string;
  type: 'video' | 'image' | 'audio';
  date: Date;
  title: string;
}

export function useHistory() {
  const history = ref<DownloadHistory[]>([]);

  function addToHistory(item: Omit<DownloadHistory, 'date'>) {
    history.value.unshift({
      ...item,
      date: new Date()
    });
  }

  function clearHistory() {
    history.value = [];
  }

  return {
    history,
    addToHistory,
    clearHistory
  }
}
