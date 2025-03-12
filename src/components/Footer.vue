<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-logo">
          <picture>
            <source srcset="/logo.webp" type="image/webp">
            <source srcset="/logo.avif" type="image/avif">
            <img 
              src="/logo.png" 
              alt="SaveTik"
              class="footer-logo-img"
              width="32"
              height="32"
              loading="lazy"
            >
          </picture>
          <span class="footer-brand">SaveTik</span>
        </div>
        <p class="footer-description">{{ $t('footer.description') }}</p>
      </div>

      <div class="footer-links">
        <router-link to="/how-it-works">{{ $t('nav.howItWorks') }}</router-link>
        <router-link to="/faq">{{ $t('nav.faq') }}</router-link>
        <router-link to="/about">{{ $t('nav.about') }}</router-link>
        <router-link to="/terms">{{ $t('nav.terms') }}</router-link>
        <router-link to="/privacy">{{ $t('nav.privacy') }}</router-link>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} SaveTik · {{ $t('footer.copyright') }}</p>
      <p class="disclaimer">{{ $t('footer.disclaimer') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  margin-top: auto;
  padding: 24px 32px 16px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-logo-img {
  width: 32px;  
  height: 32px;
}

.footer-brand {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #ff3b8d 0%, #ff71b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #ff3b8d;
}

.footer-bottom {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.disclaimer {
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
}

@media (max-width: 640px) {
  .footer {
    padding: 16px;
  }

  .footer-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-left {
    align-items: center;
  }

  .footer-links {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-bottom {
    margin-top: 12px;
    padding-top: 12px;
  }

  .footer-logo-img {
    width: 28px;  
    height: 28px;
  }
  
  .footer-brand {
    font-size: 20px;
  }

  .disclaimer {
    margin-top: 6px;
    font-size: 11px;
  }
}
</style>
