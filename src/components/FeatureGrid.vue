<template>
  <div class="features-grid" v-if="!hideFeatures">
    <div class="feature">
      <div class="feature-icon-wrapper">
        <div class="feature-icon">⚡</div>
      </div>
      <div class="feature-content">
        <h3>Unlimited Downloads</h3>
        <p>Experience unrestricted video downloads with TikSave. No constraints, just limitless content available for you.</p>
      </div>
    </div>
    
    <div class="feature">
      <div class="feature-icon-wrapper">
        <div class="feature-icon">🎯</div>
      </div>
      <div class="feature-content">
        <h3>Eliminate the Watermark</h3>
        <p>Effortlessly get rid of annoying TikTok symbols from your downloaded videos. Say goodbye to watermarks with TikSave.</p>
      </div>
    </div>
    
    <div class="feature">
      <div class="feature-icon-wrapper">
        <div class="feature-icon">🎵</div>
      </div>
      <div class="feature-content">
        <h3>MP4 and MP3 Support</h3>
        <p>Save your favorite TikTok videos in high-quality MP4 format or convert them to MP3 audio files for various uses.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const hideFeatures = ref(false)

const isVideoLoading = ref(false)
watch(isVideoLoading, (newVal) => {
  hideFeatures.value = newVal
})
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr)); 
  gap: 48px; 
  margin: 48px auto;
  padding: 0 max(32px, calc((100% - 1600px) / 2));
  max-width: 100%; 
  width: 100%;
  animation: fadeIn 0.5s ease;
  place-items: center; 
  justify-content: center; 
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px 40px; 
  width: 100%; 
  max-width: 480px; 
  min-height: 360px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  margin: 0 auto; 
}

.feature-icon-wrapper {
  width: 120px;
  height: 120px;
  margin-bottom: 36px;
  background: linear-gradient(135deg, rgba(255, 59, 141, 0.2) 0%, rgba(255, 113, 179, 0.2) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 8px 32px rgba(255, 59, 141, 0.15);
  transition: all 0.3s ease;
}

.feature-icon {
  font-size: 56px;
  filter: drop-shadow(0 2px 8px rgba(255, 59, 141, 0.3));
}

.feature:hover .feature-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 40px rgba(255, 59, 141, 0.25);
}

.feature-content {
  text-align: center;
  width: 100%;
}

.feature:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
}

.feature h3 {
  font-size: 26px; 
  margin-bottom: 24px;
  color: #fff;
  background: linear-gradient(135deg, #ff3b8d 0%, #ff71b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.feature p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  font-size: 17px; 
  max-width: 360px;
  margin: 0 auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1600px) {
  .features-grid {
    max-width: 1400px;
    padding: 0 max(32px, calc((100% - 1200px) / 2));
    gap: 40px;
  }
}

@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(2, minmax(280px, 1fr));
    max-width: 1000px;
    padding: 0 32px;
    gap: 32px;
    place-content: center;
  }

  .feature {
    padding: 40px 32px;
    min-height: 340px;
  }
}

@media (max-width: 968px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 800px;
  }

  .feature {
    padding: 28px;
    gap: 24px;
  }

  .feature-icon-wrapper {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }

  .feature-icon {
    font-size: 32px;
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 32px auto;
  }

  .feature {
    padding: 24px;
    transition: none;
    transform: none !important; 
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .feature-icon-wrapper {
    width: 50px;
    height: 50px;
    margin-bottom: 16px;
    border-radius: 16px;
    transform: none !important;
    box-shadow: 0 8px 32px rgba(255, 59, 141, 0.15) !important;
  }

  .feature-icon {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .feature-content {
    text-align: center;
  }

  .feature h3 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .feature p {
    font-size: 14px;
  }

  .feature:hover .feature-icon-wrapper {
    transform: none;
    box-shadow: 0 8px 32px rgba(255, 59, 141, 0.15);
  }
}
</style>
