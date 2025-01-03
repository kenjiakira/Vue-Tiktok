<template>
  <button 
    class="button" 
    :class="[
      variant, 
      { 'loading': loading,
        'icon-only': showIconOnly || isMobile 
      }
    ]" 
    :disabled="loading || disabled"
    @click="$emit('click')"
  >
    <span class="icon" v-if="icon">{{ icon }}</span>
    <span class="text" v-if="!(showIconOnly || isMobile)">
      <slot>{{ loading ? '...' : 'Submit' }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  loading?: boolean
  disabled?: boolean
  variant?: 'default' | 'submit'
  showIconOnly?: boolean
  icon?: string
}>()

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 640
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
@import "../styles/button.css";
</style>
