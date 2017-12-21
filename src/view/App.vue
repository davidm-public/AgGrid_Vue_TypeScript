<template>
	<div>
    <ag-grid-vue
        class="ag-dark"            
        style="width: 500px; height: 300px"
        :rowData="rowData"
        :gridOptions="gridOptions"
        :columnDefs="columnDefs"
        >
    </ag-grid-vue>
	</div>
</template>

<script lang="ts">
	// You must use a namespace import with Vue (when using TypeScript)
	import * as Vue from 'vue';
	import { Component } from 'vue-property-decorator';

	@Component({})
  class App extends Vue {
		get gridOptions():GridOptions {

    }

    get columnDefs(): Array<ColDef>{
      return [
        {
          headerName  : 'User Name',
          field       : 'username',        
          suppressMenu: true,
          width       : 200,
        }
      ]
    }

    get rowData(){
      return [
        {username: 'fred'},
        {username: 'dave'}
      ]
    }

	}

	export default App;
</script>

<style lang="scss">
  $bg: white;

	body {
		background: $bg;
		margin-top: 30px;
	}
</style>
