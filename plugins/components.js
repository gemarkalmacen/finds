import Vue from "vue";
import BreadCrumbs from "../components/template/BreadCrumbs.vue";
import Pxcard from "../components/template/Pxcard.vue";
import Stepper from "~/components/template/Stepper.vue"
import Timeline from "~/components/template/Timeline.vue";

const components = { BreadCrumbs, Pxcard, Stepper, Timeline };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});


