
<template>
  <div id="app">
    <Dropzone
      :dropzoneFileData="dropzoneFileData"
      @addNewFile="addingNewFile"
      @deleteFIle="removeFile"
    />
  </div>
</template>

<script setup lang="ts">

import Dropzone from '@/components/FileInput/dropzone-file-input.vue';

const dropzoneFileData = [
  { size: 0.5, name: "XYZ.pdf", Urldata: 'https://www.gstatic.com/webp/gallery3/1.sm.png'},
  { size: 0.5, name: "ABCD.pdf", Urldata: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png'}
]

function addingNewFile(file: any) {
  console.log('fileJaychand', file)
}

function removeFile(val) {
  val.map((e) => {
    console.log('valJaychand', e.name);
  })

}

</script>