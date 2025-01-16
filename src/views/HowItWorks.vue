<template>
  <div class="how-it-works">
    <h1>{{ $t('howItWorks.title') }}</h1>
    <div class="content">
      <h2>{{ $t('howItWorks.subtitle') }}</h2>
      <div class="steps">
        <div class="step" v-for="index in 4" :key="index">
          <div class="step-number">{{ index }}</div>
          <p>{{ $t(`howItWorks.steps.${index - 1}`) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.how-it-works {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.content {
  margin-top: 32px;
}

h2 {
  font-size: 24px;
  margin-bottom: 32px;
  background: linear-gradient(135deg, #ff3b8d 0%, #ff71b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.steps {
  display: grid;
  gap: 24px;
}

.step {
  display: flex;
  align-items: center;
  padding: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff3b8d 0%, #ff71b3 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  margin-right: 20px;
  flex-shrink: 0;
}

.step p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 640px) {
  .how-it-works {
    margin: 24px auto;
  }

  .steps {
    gap: 16px;
  }
  
  .step {
    padding: 20px;
    transition: none; 
  }
  
  .step:hover {
    transform: none; 
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  
  .step-number {
    width: 32px;
    height: 32px;
    font-size: 16px;
    margin-right: 16px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 24px;
  }
}
</style>
