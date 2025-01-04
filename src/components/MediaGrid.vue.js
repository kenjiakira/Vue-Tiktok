import { computed } from 'vue';
const props = defineProps();
const currentMediaType = computed(() => {
    if (props.images?.length)
        return 'images';
    if (props.video)
        return 'video';
    return null;
});
const __VLS_emit = defineEmits();
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['clickable-image',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("media-container") },
    });
    if (__VLS_ctx.currentMediaType === 'video') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("video-container") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({
            controls: (true),
            src: ((__VLS_ctx.video)),
            ...{ class: ("video-preview") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.currentMediaType === 'video')))
                        return;
                    __VLS_ctx.video && __VLS_ctx.$emit('downloadVideo', __VLS_ctx.video);
                } },
            ...{ class: ("download-button primary center-text") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("icon") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("mp4-text") },
        });
    }
    else if (__VLS_ctx.currentMediaType === 'images') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("media-grid") },
        });
        for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((index)),
                ...{ class: ("media-item") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("media-content") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
                src: ((image)),
                alt: ((`Image ${index + 1}`)),
                ...{ class: ("preview-image") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("overlay") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("image-number") },
            });
            (index + 1);
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.currentMediaType === 'video'))))
                            return;
                        if (!((__VLS_ctx.currentMediaType === 'images')))
                            return;
                        __VLS_ctx.$emit('downloadImage', image);
                    } },
                ...{ class: ("download-button ghost") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("icon") },
            });
        }
    }
    ['media-container', 'video-container', 'video-preview', 'download-button', 'primary', 'center-text', 'icon', 'mp4-text', 'media-grid', 'media-item', 'media-content', 'preview-image', 'overlay', 'image-number', 'download-button', 'ghost', 'icon',];
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
            currentMediaType: currentMediaType,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
