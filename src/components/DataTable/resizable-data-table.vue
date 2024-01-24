
<template>
  <v-app id="inspire">
    <v-data-table
    :headers="headers"
    :items="items"
    :item-key="itemKey"
    :footer-props="footerProps"
    :loading="loading"
    :no-data-text="noDataText"
    :no-results-text="noResultsText"
    :items-per-page="itemsPerPage"
    :server-items-length="serverItemsLength"
    :loading-text="loadingText"
    :select-all="selectAll"
    :total-items="totalItems"
    :expand="expand"
    :multi-sort="multiSort"
    :show-expand="showExpand"
    :single-select="singleSelect"
    :item-actions="itemActions"
    :search="search"
    :custom-filter="customFilter"
    :disable-pagination="disablePagination"
    :filter="filter"
    :items-per-page-options="itemsPerPageOptions"
    :must-sort="mustSort"
    :sort-by="sortBy"
    :sort-direction="sortDirection"
    class="elevation-1"
    ></v-data-table>
  </v-app>
</template>

<style scoped>
th, td {
  border-right: 1px solid grey;
}
</style>

<script>
import { VDataTable } from 'vuetify/labs/VDataTable';

export default {
  components:{
    VDataTable
  },
  data() {
    return {
      headers: [
        { title: 'Dessert (100g serving)', sortable: false, value: 'name'},
        { title: 'Calories', sortable: false, value: 'calories' },
        { title: 'Fat (g)', sortable: false, value: 'fat' },
        { title: 'Carbs (g)', sortable: false, value: 'carbs' },
        { title: 'Protein (g)', sortable: false, value: 'protein' },
        { title: 'Iron (%)', sortable: false, value: 'iron' },
      ],
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    };
  },
  mounted() {
    this.makeColumnsResizable();
  },
  methods: {
    makeColumnsResizable() {
      var tables = document.getElementsByTagName('table');
      for (var i = 0; i < tables.length; i++) {
        this.resizableGrid(tables[i]);
      }
    },
    resizableGrid(table) {
      var row = table.getElementsByTagName('tr')[0],
      cols = row ? row.children : undefined;
      if (!cols) return;
      
      table.style.overflow = 'hidden';
      
      var tableHeight = table.offsetHeight;
      
      for (var i=0;i<cols.length;i++){
        var div = createDiv(tableHeight);
        cols[i].appendChild(div);
        cols[i].style.position = 'relative';
        setListeners(div);
      }

      function setListeners(div){
        var pageX,curCol,nxtCol,curColWidth,nxtColWidth;

        div.addEventListener('mousedown', function (e) {
        curCol = e.target.parentElement;
        nxtCol = curCol.nextElementSibling;
        pageX = e.pageX; 
      
        var padding = paddingDiff(curCol);
      
        curColWidth = curCol.offsetWidth - padding;
        if (nxtCol)
          nxtColWidth = nxtCol.offsetWidth - padding;
        });

        div.addEventListener('mouseover', function (e) {
        e.target.style.borderRight = '2px solid #0000ff';
        })

        div.addEventListener('mouseout', function (e) {
        e.target.style.borderRight = '';
        })

        document.addEventListener('mousemove', function (e) {
        if (curCol) {
          var diffX = e.pageX - pageX;
      
          if (nxtCol)
          nxtCol.style.width = (nxtColWidth - (diffX))+'px';

          curCol.style.width = (curColWidth + diffX)+'px';
        }
        });

        document.addEventListener('mouseup', function (e) { 
        curCol = undefined;
        nxtCol = undefined;
        pageX = undefined;
        nxtColWidth = undefined;
        curColWidth = undefined
        });
      }
      
      function createDiv(height){
        var div = document.createElement('div');
        div.style.top = 0;
        div.style.right = 0;
        div.style.width = '5px';
        div.style.position = 'absolute';
        div.style.cursor = 'col-resize';
        div.style.userSelect = 'none';
        div.style.height = height + 'px';
        return div;
      }
      
      function paddingDiff(col){
      
        if (getStyleVal(col,'box-sizing') == 'border-box'){
        return 0;
        }
      
        var padLeft = getStyleVal(col,'padding-left');
        var padRight = getStyleVal(col,'padding-right');
        return (parseInt(padLeft) + parseInt(padRight));

      }

      function getStyleVal(elm,css){
        return (window.getComputedStyle(elm, null).getPropertyValue(css))
      }    },
        },
};
</script>
