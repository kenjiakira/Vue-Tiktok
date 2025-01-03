<template>
  <input 
    class="input"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>();
</script>

<style scoped>
@import "../styles/button.css";
</style>
