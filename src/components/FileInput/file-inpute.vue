<template>
    <div>
      <VFileInput
        v-model="files"
        multiple
        label="File input"
        @change="handleFileChange"
      />
      <div v-if="imagePreviews.length > 0">
        <div class="imageAligment" >
          <div v-for="(preview, index) in imagePreviews" :key="index">
            <img :src="preview" alt="Image Preview" class="image-preview"/>
            <button @click="deleteFile(index)" class="trash-button"> Trash</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const files = ref([]);
  const imagePreviews = ref([]);
  
  const handleFileChange = () => {
    // imagePreviews.value = [];
    files.value.forEach((file) => {
      console.log(file)
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreviews.value.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  };
  
  const deleteFile = (index) => {
    // Remove the file from the files array
    files.value.splice(index, 1);
    // Remove the corresponding preview
    imagePreviews.value.splice(index, 1);
  };
  
  </script>
  
  
  <style scoped>
  .imageAligment{
    display: flex;
    flex-wrap: wrap;
  }
  .image-preview {
    width: 100px; 
    height: 100px; 
    margin: 10px;
  }
  .trash-button{
    font-size: 1.1rem;
    color: #ea5455;
    line-height: 2rem;
    font-size: 14px;
    text-align: center;
    display: block;
    cursor: pointer;
    border: none;
    padding-left: 40px;
  }
  
  </style>
  