import Vue from "vue";
import BreadCrumbs from "../components/template/BreadCrumbs.vue";
import Pxcard from "../components/template/Pxcard.vue";

const components = { BreadCrumbs, Pxcard };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
