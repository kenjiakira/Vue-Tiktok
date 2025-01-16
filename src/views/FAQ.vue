<template>
  <div class="faq">
    <h1>{{ $t('faq.title') }}</h1>
    <div class="faq-list">
      <div v-for="(item, index) in faqList" 
           :key="index"
           class="faq-item">
        <h3>{{ $t(`faq.items[${index}].question`) }}</h3>
        <p>{{ $t(`faq.items[${index}].answer`) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Định nghĩa interface cho FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

const faqList = computed<FAQItem[]>(() => {
  try {
    // Lấy số lượng items từ i18n
    const items = Array.from({ length: 4 }, (_, index) => ({
      question: t(`faq.items.${index}.question`),
      answer: t(`faq.items.${index}.answer`)
    }));
    return items;
  } catch (error) {
    console.error('Error loading FAQ items:', error);
    return [];
  }
});
</script>

<style scoped>
.faq {
  width: min(800px, 100%);
  margin: clamp(24px, 5vw, 40px) auto;
  padding: 0 max(16px, 2vw);
}

.faq-list {
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-item {
  padding: clamp(24px, 4vw, 36px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  border-radius: 16px;
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.1),
    inset 0 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  will-change: transform;
  isolation: isolate;
  margin-bottom: 4px;
}

@media (hover: hover) {
  .faq-item {
    transition: transform 0.2s ease;
  }
  
  .faq-item:hover {
    transform: translateY(-2px);
  }
}

.faq-item h3 {
  color: #fff;
  margin-bottom: clamp(16px, 3vw, 24px);
  font-size: clamp(18px, 2vw, 20px);
  font-weight: 600;
  background: linear-gradient(135deg, #ff3b8d, #ff71b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.faq-item p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: clamp(15px, 1.6vw, 16px);
}

@media (max-width: 640px) {
  .faq-item {
    backdrop-filter: none;
    background: rgba(255, 255, 255, 0.08);
  }
}
</style>
