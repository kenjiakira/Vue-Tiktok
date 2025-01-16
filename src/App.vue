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
        <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
          <span class="menu-icon">☰</span>
        </button>
        <div class="nav-right" :class="{ 'mobile-menu-open': isMenuOpen }">
          <button class="close-menu" @click="isMenuOpen = false">×</button>
          <router-link @click="isMenuOpen = false" to="/how-it-works">{{ $t('nav.howItWorks') }}</router-link>
          <router-link @click="isMenuOpen = false" to="/faq">{{ $t('nav.faq') }}</router-link>
          <router-link @click="isMenuOpen = false" to="/about">{{ $t('nav.about') }}</router-link>
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
import { detectUserLanguage } from './services/languageService'

const { locale } = useI18n()
const isMenuOpen = ref(false)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const timeoutPromise = new Promise(resolve => setTimeout(resolve, 300));
    
    // Set default locale first
    locale.value = 'en';
    
    const [detectedLocale] = await Promise.all([
      detectUserLanguage(),
      timeoutPromise
    ]);
    
    if (detectedLocale) {
      locale.value = detectedLocale;
    }
  } catch (error) {
    console.error('Failed to detect language:', error);
  } finally {
    isLoading.value = false;
  }
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  border-top-color: #ff3b8d;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<style>
@import "./styles/app.css";
</style>