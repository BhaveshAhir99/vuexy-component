<!-- FileUpload.vue -->
<template>
    <div>
      <div class="dropzone" ref="myDropzone"></div>
      <div>
        <h2>Preview : </h2>
        <div v-for="(file, index) in files" :key="index">
          <img :src="file.preview" alt="preview - " style="max-width: 100px; max-height: 100px;">
          <button @click="removeFile(index)">Remove</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import 'dropzone/dist/dropzone.css';
  import Dropzone from 'dropzone';
  
  export default {
    data() {
      return {
        files: [],
      };
    },
    mounted() {
      this.initializeDropzone();
    },
    methods: {
      initializeDropzone() {
        const dropzoneElement = this.$refs.myDropzone;
        const options = {
          url: '/upload', // Specify your server endpoint for file upload
          autoProcessQueue: false,
          addRemoveLinks: true,
        };
  
        const dropzone = new Dropzone(dropzoneElement, options);
  
        dropzone.on('addedfile', (file) => {

        console.log(file)
          this.files.push(file.name);
        });
  
        dropzone.on('removedfile', (file) => {
          const index = this.files.indexOf(file);
          if (index !== -1) {
            this.files.splice(index, 1);
          }
        });
  
        dropzone.on('maxfilesexceeded', (file) => {
          // Handle max files exceeded
          console.log('Max files exceeded');
        });
      },
      removeFile(index) {
        this.files[index].previewElement.remove();
        this.files.splice(index, 1);
      },
      processQueue() {
        // You can manually process the queue when ready to upload
        this.$refs.myDropzone.processQueue();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  