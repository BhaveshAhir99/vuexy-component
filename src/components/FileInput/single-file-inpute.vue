<template>
    <div>
      <input type="file" @change="handleFileChange" />
      <div v-if="selectedFile">Selected File: {{ selectedFile.name }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedFile = ref(null);
  
  // Event handler for file input change
  const handleFileChange = (event) => {
    const files = event.target.files;
    
    console.log(files);

    if (files.length > 0) {
      selectedFile.value = files[0];
    } else {
      selectedFile.value = null; // User unselected the file or canceled the selection
    }
  };
  </script>
  