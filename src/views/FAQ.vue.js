const faqItems = [
    {
        question: "Is this service free?",
        answer: "Yes, our TikTok downloader is completely free to use."
    },
    {
        question: "What video quality can I download?",
        answer: "We provide the highest quality available from the original TikTok video."
    },
    {
        question: "Can I download private videos?",
        answer: "No, you can only download public TikTok videos."
    },
    {
        question: "Is there a limit to how many videos I can download?",
        answer: "Currently there are no strict limits, but please use the service responsibly."
    }
];
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['faq-item', 'faq-item', 'faq-item', 'faq-item', 'faq-item',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("faq") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("faq-list") },
    });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.faqItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("faq-item") },
            key: ((index)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (item.question);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (item.answer);
    }
    ['faq', 'faq-list', 'faq-item',];
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
            faqItems: faqItems,
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
