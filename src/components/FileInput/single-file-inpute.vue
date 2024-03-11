<script setup lang="ts">
import { ref } from 'vue';

const files = ref();

// Event handler for file input change

</script>
<template>
    <div>
      <VFileInput
        v-model="files"
        :multiple="true"
        :chips="true"
        accept="image/*"
        label="File input"
      />
    </div>
  </template>

