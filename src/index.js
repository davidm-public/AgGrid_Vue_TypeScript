import Vue from "vue";
import forIn from "lodash-es/forIn";
import Vuex from "vuex";
import App from "./view/App";
import { AgGridVue } from "ag-grid-vue";
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/theme-dark.css";
import "ag-grid-enterprise/main";
import { LicenseManager } from "ag-grid-enterprise/main";


LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Key_Not_for_Production_100Devs24_January_2018__MTUxNjc1MjAwMDAwMA==9c12b8b51496ab050072d42a80743360");

Vue.config.devtools = true;
Vue.config.silent = false;

forIn(
  {
    App,
    AgGridVue
  },
  (value, key) => Vue.component(key, value)
);


(() => new Vue({ 
  el: '#app', 
  template: '<App>' 
  }))();



