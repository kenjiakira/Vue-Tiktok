import { ref } from 'vue';
export function useHistory() {
    const history = ref([]);
    function addToHistory(item) {
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
    };
}
