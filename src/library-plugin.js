import HelloWorld from "./components/HelloWorld.vue";
import TestingHyphen from "./components/TestingHyphen.vue";

export default {
  install(Vue) {
    Vue.component("hello-world", HelloWorld);
    Vue.component("t-hyphen", TestingHyphen);
  }
};
