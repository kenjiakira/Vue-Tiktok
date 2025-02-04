<template>
  <button 
    class="button" 
    :class="[variant, { 'loading': loading }]" 
    :disabled="loading || disabled"
    @click="$emit('click')"
    :aria-label="ariaLabel || defaultAriaLabel"
    :title="title || defaultAriaLabel"
  >
    <component 
      v-if="iconComponent" 
      :is="iconComponent" 
      class="icon" 
      :width="16"  
      :height="16"
      aria-hidden="true"
    />
    <span v-else-if="icon" class="icon" aria-hidden="true">{{ icon }}</span>
    <span class="text">
      <slot>{{ loading ? 'Loading...' : '' }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  loading?: boolean
  disabled?: boolean
  variant?: 'default' | 'submit' | 'paste'
  icon?: string
  iconComponent?: any
  ariaLabel?: string
  title?: string
}>()

const defaultAriaLabel = computed(() => {
  switch(props.variant) {
    case 'paste':
      return 'Paste URL from clipboard';
    case 'submit':
      return 'Download TikTok video';
    default:
      return props.loading ? 'Loading...' : 'Button';
  }
})
</script>

<style scoped>
@import "../styles/button.css";
</style>
