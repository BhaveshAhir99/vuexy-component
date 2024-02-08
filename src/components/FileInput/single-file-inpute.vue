<template>
    <div>
      <VFileInput
        :multiple="true"
        :chips="true"
        v-model="files"
        accept="image/*"
        label="File input"
      />
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';

  const files = ref();

  // Event handler for file input change

  </script>
