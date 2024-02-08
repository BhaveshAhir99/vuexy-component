
<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable';
// import flatPickr from 'vue-flatpickr-component';
// import 'flatpickr/dist/flatpickr.css';
// import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect/index.js'
// import 'flatpickr/dist/plugins/monthSelect/style.css'

interface Props {
  headers?: any[],
  items?: any[],
  resizeTable:string,
}


// Props
const props = withDefaults(defineProps<Props>(), {
  resizeTable: 'resize'
})

// Date picker temporary code
// const date = ref()

// const configs = reactive({
//   monthSelect: {
//     dateFormat: 'MM',
//     altInput: true,
//     altFormat: 'd/MM/Y',
//     allowInput: true,
//     wrap: true,
//     mode: 'range',
//         locale: {
//         rangeSeparator: ' - ',
//         },
//     plugins: [
//       new monthSelectPlugin({
//         shorthand: true,
//         dateFormat: "MM",
//       })
//     ]
//   }
// })

//  method
const makeColumnsResizable = () => {
  const tables = document.getElementsByClassName('resize-table')
  for (let i = 0; i < tables.length; i++) {
    resizableGrid(tables[i])
  }
}

const resizableGrid = (table: any)=>{
  const row = table.getElementsByTagName('tr')[0],
  cols = row ? row.children : undefined;
  if (!cols) return

  table.style.overflow = 'hidden';

  const tableHeight = table.offsetHeight;

  for (let i=0;i<cols.length - 1;i++){
    var div = createDiv(tableHeight);
    cols[i].appendChild(div);
    cols[i].style.position = 'relative';
    setListeners(div);
  }

  function setListeners(div: any){
    let pageX: number | undefined,curCol: { nextElementSibling: any; offsetWidth: number; style: { width: string; }; } | undefined,nxtCol: { offsetWidth: number; style: { width: string; }; } | undefined,curColWidth: number | undefined,nxtColWidth: number | undefined;

    div.addEventListener('mousedown', function (e: { target: { parentElement: any; }; pageX: any; }) {
      curCol = e.target.parentElement

    nxtCol = curCol.nextElementSibling
    pageX = e.pageX

    var padding = paddingDiff(curCol);

    curColWidth = curCol.offsetWidth - padding;
    if (nxtCol)
      nxtColWidth = nxtCol.offsetWidth - padding;
    });

    div.addEventListener('mouseover', function (e: { target: { style: { borderRight: string; }; }; }) {
    e.target.style.borderRight = '2px solid #0000ff';
    })

    div.addEventListener('mouseout', function (e: { target: { style: { borderRight: string; }; }; }) {
    e.target.style.borderRight = '';
    })

    document.addEventListener('mousemove', function (e) {
    if (curCol) {
      const diffX = e.pageX - pageX;
      if (nxtCol)
      nxtCol.style.width = (nxtColWidth - (diffX))+'px';

      curCol.style.width = (curColWidth + diffX)+'px';
    }
    });

    document.addEventListener('mouseup', function (e: any) {
      curCol = undefined;
      nxtCol = undefined;
      pageX = undefined;
      nxtColWidth = undefined;
      curColWidth = undefined
    });
  }

  function createDiv(height: string){
    var div = document.createElement('div');
    div.style.top = 0;
    div.style.right = 0;
    div.style.width = '2px';
    div.style.position = 'absolute';
    div.style.cursor = 'col-resize';
    div.style.userSelect = 'none';
    div.style.height = height + 'px';
    return div;
  }

  function paddingDiff(col: any){

    if (getStyleVal(col,'box-sizing') == 'border-box'){
      return 0;
    }
    var padLeft = getStyleVal(col,'padding-left');
    var padRight = getStyleVal(col,'padding-right');
    return (parseInt(padLeft) + parseInt(padRight));

  }

  function getStyleVal(elm: Element,css: string){
    return (window.getComputedStyle(elm, null).getPropertyValue(css))
  }
}


// hook
onMounted(() => {
    makeColumnsResizable()
})
</script>

<template>
  <!-- <div>
    <flat-pickr
      v-model="date"
      :config="configs.monthSelect"
      class="form-control"
      placeholder="Select date"
      name="date"
    />
  </div> -->
  <div>
    <v-data-table
    :headers="props.headers"
    :items="props.items"
    :item-key="itemKey"
    :class="props.resizeTable=== 'resize'? 'resize-table': ''"
    ></v-data-table>
  </div>

</template>

<style scoped lang="scss">
th, td {
  border-right: 1px solid grey;
}
</style>
