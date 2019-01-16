import HelloWorld from "./components/HelloWorld.vue";
import TestingHyphen from "./components/TestingHyphen.vue";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

export default {
  install(Vue) {
    Vue.use(Vuetify);
    Vue.component("hello-world", HelloWorld);
    Vue.component("t-hyphen", TestingHyphen);
  }
};
