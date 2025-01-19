<template>
  <div id="app">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div class="app-container" v-else>
      <nav>
        <div class="nav-left">
          <img src="../public/logo.png" alt="SaveTik" class="nav-logo">
          <router-link to="/" class="brand-name">SaveTik</router-link>
        </div>
        <div class="nav-controls">
          <div class="language-selector mobile">
            <select 
              v-model="selectedLang" 
              @change="switchLanguage(selectedLang)"
              class="lang-select">
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
            <select 
              v-model="selectedLang" 
              @change="switchLanguage(selectedLang)"
              class="lang-select">
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
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Footer from './components/Footer.vue'
import BuyMeCoffee from './components/BuyMeCoffee.vue'
import { detectUserLanguage, SUPPORTED_LANGUAGES, type LanguageCode } from './services/languageService'

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
</style>