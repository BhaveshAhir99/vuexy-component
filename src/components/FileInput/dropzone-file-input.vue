<script setup lang="ts">
import vueDropzone from '../../../node_modules/dropzone-vue3'

// Interface
interface Props {
  dropzoneFileData?: any[],
  maxFiles?: number,
  uploadMultiple?: boolean,
  parallelUploads?: number,
  thumbnailWidth?: number,
  maxFilesize?: number,
  addRemoveLinks?: boolean
}

interface Emit {
  (e: 'addNewFile', value: any): void
  (e: 'deleteFile', value: any): void
}

// Props
const props = withDefaults(defineProps<Props>(), {
  maxFiles: 25,
  uploadMultiple: false,
  parallelUploads: 100,
  thumbnailWidth: 150,
  maxFilesize: 10,
  addRemoveLinks: true,

})

// Emits
const emit = defineEmits<Emit>()

const myVueDropzone = ref('')
const pdfFile = ref([])
const removeFileVal = ref([])

const dropzoneOptions = {
  url: 'https://httpbin.org/post',
  maxFiles: props.maxFiles,
  uploadMultiple: props.uploadMultiple,
  parallelUploads: props.parallelUploads,
  thumbnailWidth: props.thumbnailWidth,
  maxFilesize: props.maxFilesize,
  addRemoveLinks: props.addRemoveLinks,
  headers: { "My-Awesome-Header": "header value" }
}

const handleFileAdding = (file: any) => {
  if (file.status == 'success') {
    pdfFile.value.push(file)
    emit('addNewFile', pdfFile.value)
  }
}

function getTaskDetails() {

  // myVueDropzone.value.manuallyAddFile(file, url)
  console.log('myVueDropzone.value', props.dropzoneFileData?.length);
  if (props.dropzoneFileData?.length) {
    props.dropzoneFileData?.forEach((item: any) => {
      const file = {
                  size: item.size,
                  name: item.name,
                }
      myVueDropzone.value.manuallyAddFile(file, item.Urldata)
    })
  }

}

const removeFile = (file: any) =>{
  removeFileVal.value.push(file)
  emit('deleteFile',removeFileVal.value )
}
</script>

<template>
  <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    :options="dropzoneOptions"
    @vdropzone-success="handleFileAdding"
    @vdropzone-mounted="getTaskDetails"
    @vdropzone-removed-file="removeFile"
  />
</template>