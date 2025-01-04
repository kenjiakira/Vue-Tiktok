const props = defineProps(); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.$emit('click');
            } },
        ...{ class: ("button") },
        ...{ class: (([__VLS_ctx.variant, { 'loading': __VLS_ctx.loading }])) },
        disabled: ((__VLS_ctx.loading || __VLS_ctx.disabled)),
    });
    if (__VLS_ctx.iconComponent) {
        const __VLS_0 = ((__VLS_ctx.iconComponent));
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            ...{ class: ("icon") },
            width: ((16)),
            height: ((16)),
        }));
        const __VLS_2 = __VLS_1({
            ...{ class: ("icon") },
            width: ((16)),
            height: ((16)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    else if (__VLS_ctx.icon) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("icon") },
        });
        (__VLS_ctx.icon);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text") },
    });
    var __VLS_6 = {};
    (__VLS_ctx.loading ? '...' : '');
    ['button', 'loading', 'icon', 'icon', 'text',];
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
        return {};
    },
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
