
<template>
  <div id="app">
    <FileInput
    :multipleFile="false"
    @addFileInput="addFileInput"
    @deleteFile="deleteFile"
     />
  </div>
</template>

<script setup lang="ts">

import FileInput from '@/components/FileInput/multi-file-inpute.vue';

function addFileInput(val) {
  console.log('val: ', val);
}
function deleteFile(val) {
  console.log('deleteval: ', val);

}
</script>