import Doviz from "./src/components/Doviz.vue";

export default {
 install(Vue, options) {
  Vue.component("exchange", Doviz);
 }
};