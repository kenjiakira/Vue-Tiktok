import { ref } from 'vue';
export function usePaste() {
    const error = ref('');
    const hideError = () => {
        setTimeout(() => {
            error.value = '';
        }, 5000);
    };
    const pasteFromClipboard = async () => {
        try {
            const permissionResult = await navigator.permissions.query({
                name: 'clipboard-read'
            });
            if (permissionResult.state === 'denied') {
                error.value = "Unable to paste from clipboard - Permission denied";
                hideError();
                return '';
            }
            const text = await navigator.clipboard.readText();
            return text || '';
        }
        catch (err) {
            if (err instanceof Error && !err.message.includes('Permission')) {
                error.value = "Unable to paste from clipboard";
                hideError();
            }
            return '';
        }
    };
    return {
        error,
        pasteFromClipboard
    };
}
