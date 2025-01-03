<template>
  <div id="app">
    <div class="app-container">
      <nav>
        <div class="nav-left">
          <img src="./public/logo.png" alt="TikSave" class="nav-logo">
          <router-link to="/" class="brand-name">TikSave</router-link>
        </div>
        <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
          <span class="menu-icon">☰</span>
        </button>
        <div class="nav-right" :class="{ 'mobile-menu-open': isMenuOpen }">
          <button class="close-menu" @click="isMenuOpen = false">×</button>
          <router-link @click="isMenuOpen = false" to="/how-it-works">How It Works</router-link>
          <router-link @click="isMenuOpen = false" to="/faq">FAQ</router-link>
          <router-link @click="isMenuOpen = false" to="/about">About</router-link>
        </div>
      </nav>
      <main>
        <router-view></router-view>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Footer from './components/Footer.vue'

const isMenuOpen = ref(false)
</script>

<style>
@import "./styles/app.css";

.app-container {
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  width: 100%;
}
</style>