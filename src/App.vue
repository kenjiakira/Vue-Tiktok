<template>
  <div id="app">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div class="app-container" v-else>
      <nav>
        <div class="nav-left">
          <picture>
            <source srcset="/logo.webp" type="image/webp">
            <source srcset="/logo.avif" type="image/avif">
            <img 
              src="../public/logo.png" 
                alt="SaveTik" 
                class="nav-logo"
                width="48"
              height="48"
              loading="lazy"
            >
          </picture>
          <router-link to="/" class="brand-name">SaveTik</router-link>
        </div>
        <div class="nav-controls">
          <div class="language-selector mobile">
            <label for="mobile-lang-select" class="visually-hidden">
              {{ $t('nav.selectLanguage') }}
            </label>
            <select 
              id="mobile-lang-select"
              v-model="selectedLang" 
              @change="switchLanguage(selectedLang)"
              class="lang-select"
              aria-label="Select language"
            >
              <option v-for="(name, code) in SUPPORTED_LANGUAGES" 
                      :key="code" 
                      :value="code">
                {{ name }}
              </option>
            </select>
          </div>
          <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
            <span class="menu-icon">☰</span>
          </button>
        </div>
        <div class="nav-right" :class="{ 'mobile-menu-open': isMenuOpen }">
          <button class="close-menu" @click="isMenuOpen = false">×</button>
          <router-link @click="isMenuOpen = false" to="/how-it-works">{{ $t('nav.howItWorks') }}</router-link>
          <router-link @click="isMenuOpen = false" to="/faq">{{ $t('nav.faq') }}</router-link>
          <router-link @click="isMenuOpen = false" to="/about">{{ $t('nav.about') }}</router-link>
          <div class="language-selector desktop">
            <label for="desktop-lang-select" class="visually-hidden">
              {{ $t('nav.selectLanguage') }}
            </label>
            <select 
              id="desktop-lang-select"
              v-model="selectedLang" 
              @change="switchLanguage(selectedLang)"
              class="lang-select"
              aria-label="Select language"
            >
              <option v-for="(name, code) in SUPPORTED_LANGUAGES" 
                      :key="code" 
                      :value="code">
                {{ name }}
              </option>
            </select>
          </div>
        </div>
      </nav>
      <main>
        <router-view></router-view>
      </main>
      <Footer />
      <BuyMeCoffee />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Footer from './components/Footer.vue'
import BuyMeCoffee from './components/BuyMeCoffee.vue'
import { detectUserLanguage, SUPPORTED_LANGUAGES, type LanguageCode } from './services/languageService'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const { locale } = useI18n()
const isMenuOpen = ref(false)
const isLoading = ref(true)
const selectedLang = ref<LanguageCode>('en')

const switchLanguage = (lang: LanguageCode) => {
  locale.value = lang
  selectedLang.value = lang
  localStorage.setItem('user_language', JSON.stringify({
    language: lang,
    timestamp: Date.now()
  }))
}

const route = useRoute()

useHead({
  title: computed(() => `${route.meta.title || 'SaveTik'} - Download TikTok Videos Without Watermark`),
  meta: [
    {
      name: 'description',
      content: computed(() => route.meta.description || 'Download TikTok videos without watermark instantly! ⚡ HD quality, 100% free & secure.')
    },
    {
      property: 'og:title',
      content: computed(() => `${route.meta.title || 'SaveTik'} - Download TikTok Videos`)
    },
    {
      property: 'og:description',
      content: computed(() => route.meta.description || 'Download TikTok videos without watermark instantly!')
    }
  ]
})

onMounted(async () => {
  try {
    const timeoutPromise = new Promise(resolve => setTimeout(resolve, 300));
    const detectedLang = await detectUserLanguage();
    selectedLang.value = detectedLang;
    locale.value = detectedLang;
    await timeoutPromise;
  } catch (error) {
    console.error('Failed to detect language:', error);
  } finally {
    isLoading.value = false;
  }
})
</script>
<style>
@import "./styles/app.css";

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>