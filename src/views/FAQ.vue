<template>
  <div class="faq">
    <h1>Frequently Asked Questions</h1>
    <div class="faq-list"></div>
      <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </div>
    </div>
</template>

<script setup lang="ts">
const faqItems = [
  {
    question: "Is this service free?",
    answer: "Yes, our TikTok downloader is completely free to use."
  },
  {
    question: "What video quality can I download?",
    answer: "We provide the highest quality available from the original TikTok video."
  },
  {
    question: "Can I download private videos?",
    answer: "No, you can only download public TikTok videos."
  },
  {
    question: "Is there a limit to how many videos I can download?",
    answer: "Currently there are no strict limits, but please use the service responsibly."
  }
];
</script>

<style scoped>
.faq {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.faq-list {
  margin-top: 48px; 
  display: grid;
  gap: 48px; 
}

.faq-item {
  margin-bottom: 0;
  padding: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.faq-item h3 {
  color: #fff;
  margin-bottom: 24px; 
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff3b8d 0%, #ff71b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.faq-item p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin: 0;
  font-size: 16px;
}

@media (max-width: 640px) {
  .faq {
    margin: 32px auto;
  }

  .faq-list {
    gap: 32px;
  }
  
  .faq-item {
    padding: 28px;
    transition: none; 
  }

  .faq-item:hover {
    transform: none;  
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
}
</style>
