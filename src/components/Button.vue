<template>
  <button 
    class="button" 
    :class="[variant, { 'loading': loading }]" 
    :disabled="loading || disabled"
    @click="$emit('click')"
  >
    <component 
      v-if="iconComponent" 
      :is="iconComponent" 
      class="icon" 
      :width="16"  
      :height="16"
    />
    <span v-else-if="icon" class="icon">{{ icon }}</span>
    <span class="text">
      <slot>{{ loading ? '...' : '' }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading?: boolean
  disabled?: boolean
  variant?: 'default' | 'submit' | 'paste'
  icon?: string
  iconComponent?: any
}>()
</script>

<style scoped>
@import "../styles/button.css";
</style>
