import { ref } from 'vue';
import Footer from './components/Footer.vue';
const isMenuOpen = ref(false); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: ("app"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("app-container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("nav-left") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("../public/logo.png"),
        alt: ("TikSave"),
        ...{ class: ("nav-logo") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ("/"),
        ...{ class: ("brand-name") },
    }));
    const __VLS_2 = __VLS_1({
        to: ("/"),
        ...{ class: ("brand-name") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.isMenuOpen = !__VLS_ctx.isMenuOpen;
            } },
        ...{ class: ("menu-toggle") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("menu-icon") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("nav-right") },
        ...{ class: (({ 'mobile-menu-open': __VLS_ctx.isMenuOpen })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.isMenuOpen = false;
            } },
        ...{ class: ("close-menu") },
    });
    const __VLS_6 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...{ 'onClick': {} },
        to: ("/how-it-works"),
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClick': {} },
        to: ("/how-it-works"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (...[$event]) => {
            __VLS_ctx.isMenuOpen = false;
        }
    };
    let __VLS_9;
    let __VLS_10;
    __VLS_11.slots.default;
    var __VLS_11;
    const __VLS_14 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
        ...{ 'onClick': {} },
        to: ("/faq"),
    }));
    const __VLS_16 = __VLS_15({
        ...{ 'onClick': {} },
        to: ("/faq"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_20;
    const __VLS_21 = {
        onClick: (...[$event]) => {
            __VLS_ctx.isMenuOpen = false;
        }
    };
    let __VLS_17;
    let __VLS_18;
    __VLS_19.slots.default;
    var __VLS_19;
    const __VLS_22 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({
        ...{ 'onClick': {} },
        to: ("/about"),
    }));
    const __VLS_24 = __VLS_23({
        ...{ 'onClick': {} },
        to: ("/about"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    let __VLS_28;
    const __VLS_29 = {
        onClick: (...[$event]) => {
            __VLS_ctx.isMenuOpen = false;
        }
    };
    let __VLS_25;
    let __VLS_26;
    __VLS_27.slots.default;
    var __VLS_27;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    const __VLS_30 = {}.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    // @ts-ignore
    /** @type { [typeof Footer, ] } */ ;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(Footer, new Footer({}));
    const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
    ['app-container', 'nav-left', 'nav-logo', 'brand-name', 'menu-toggle', 'menu-icon', 'nav-right', 'mobile-menu-open', 'close-menu',];
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
            Footer: Footer,
            isMenuOpen: isMenuOpen,
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
