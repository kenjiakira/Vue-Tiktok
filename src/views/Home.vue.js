import { ref, onMounted, onUnmounted } from 'vue';
import { usePaste } from '@/utils/usePaste';
import { useVideoDownload } from '@/utils/useVideoDownload';
import MediaGrid from '@/components/MediaGrid.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import FeatureGrid from '@/components/FeatureGrid.vue';
import { ArrowDownTrayIcon, ClipboardIcon } from '@heroicons/vue/24/outline';
const windowWidth = ref(window.innerWidth);
const tiktokUrl = ref('');
const { error: pasteError, pasteFromClipboard } = usePaste();
const { loading, error, videoData, downloadVideo: startDownload, handleMediaDownload } = useVideoDownload();
const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};
const handlePaste = async () => {
    const text = await pasteFromClipboard();
    if (text) {
        tiktokUrl.value = text;
    }
};
const downloadVideo = () => {
    startDownload(tiktokUrl.value);
};
onMounted(() => {
    window.addEventListener('resize', updateWidth);
});
onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("home") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("content") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("input-container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("input-wrapper") },
    });
    // @ts-ignore
    /** @type { [typeof Button, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Button, new Button({
        ...{ 'onClick': {} },
        variant: ("paste"),
        iconComponent: ((__VLS_ctx.ClipboardIcon)),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onClick': {} },
        variant: ("paste"),
        iconComponent: ((__VLS_ctx.ClipboardIcon)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onClick: (__VLS_ctx.handlePaste)
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onKeyup': {} },
        modelValue: ((__VLS_ctx.tiktokUrl)),
        placeholder: ("Paste TikTok URL"),
        disabled: ((__VLS_ctx.loading)),
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onKeyup': {} },
        modelValue: ((__VLS_ctx.tiktokUrl)),
        placeholder: ("Paste TikTok URL"),
        disabled: ((__VLS_ctx.loading)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onKeyup: (__VLS_ctx.downloadVideo)
    };
    let __VLS_9;
    let __VLS_10;
    var __VLS_11;
    // @ts-ignore
    /** @type { [typeof Button, typeof Button, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(Button, new Button({
        ...{ 'onClick': {} },
        loading: ((__VLS_ctx.loading)),
        disabled: ((!__VLS_ctx.tiktokUrl)),
        variant: ("submit"),
    }));
    const __VLS_15 = __VLS_14({
        ...{ 'onClick': {} },
        loading: ((__VLS_ctx.loading)),
        disabled: ((!__VLS_ctx.tiktokUrl)),
        variant: ("submit"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    let __VLS_19;
    const __VLS_20 = {
        onClick: (__VLS_ctx.downloadVideo)
    };
    let __VLS_16;
    let __VLS_17;
    const __VLS_21 = {}.ArrowDownTrayIcon;
    /** @type { [typeof __VLS_components.ArrowDownTrayIcon, ] } */ ;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
        ...{ class: ("w-3 h-3") },
    }));
    const __VLS_23 = __VLS_22({
        ...{ class: ("w-3 h-3") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    __VLS_18.slots.default;
    var __VLS_18;
    if (__VLS_ctx.error && !__VLS_ctx.videoData) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("error") },
        });
        (__VLS_ctx.error);
    }
    if (__VLS_ctx.videoData) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("result") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (__VLS_ctx.videoData.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("author") },
        });
        (__VLS_ctx.videoData.author.unique_id);
        (__VLS_ctx.videoData.digg_count);
        // @ts-ignore
        /** @type { [typeof MediaGrid, ] } */ ;
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(MediaGrid, new MediaGrid({
            ...{ 'onDownloadImage': {} },
            ...{ 'onDownloadVideo': {} },
            video: ((__VLS_ctx.videoData.play)),
            images: ((__VLS_ctx.videoData.images)),
        }));
        const __VLS_28 = __VLS_27({
            ...{ 'onDownloadImage': {} },
            ...{ 'onDownloadVideo': {} },
            video: ((__VLS_ctx.videoData.play)),
            images: ((__VLS_ctx.videoData.images)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_27));
        let __VLS_32;
        const __VLS_33 = {
            onDownloadImage: (__VLS_ctx.handleMediaDownload.image)
        };
        const __VLS_34 = {
            onDownloadVideo: (__VLS_ctx.handleMediaDownload.video)
        };
        let __VLS_29;
        let __VLS_30;
        var __VLS_31;
    }
    // @ts-ignore
    /** @type { [typeof FeatureGrid, ] } */ ;
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(FeatureGrid, new FeatureGrid({
        hideFeatures: ((!!__VLS_ctx.videoData)),
    }));
    const __VLS_36 = __VLS_35({
        hideFeatures: ((!!__VLS_ctx.videoData)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    ['home', 'content', 'input-container', 'input-wrapper', 'w-3', 'h-3', 'error', 'result', 'author',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MediaGrid: MediaGrid,
            Button: Button,
            Input: Input,
            FeatureGrid: FeatureGrid,
            ArrowDownTrayIcon: ArrowDownTrayIcon,
            ClipboardIcon: ClipboardIcon,
            tiktokUrl: tiktokUrl,
            loading: loading,
            error: error,
            videoData: videoData,
            handleMediaDownload: handleMediaDownload,
            handlePaste: handlePaste,
            downloadVideo: downloadVideo,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
