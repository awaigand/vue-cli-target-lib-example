<template>
    <div>
        <h1>Testing</h1>
        <h1>{{msg}}</h1>
        <h1 class="orange-h1">{{setInMounted}}</h1>
        <sub-component></sub-component>>
    </div>
</template>

<script>
import SubComponent from "./sub-component/SubComponent";

export default {
  name: "testing",
  components: {
    SubComponent
  },
  data() {
    return {
      msg: "This is internal state",
      setInMounted: ""
    };
  },
  mounted() {
    this.setInMounted = "I Hope it was set!";
  }
};
</script>

<style>
.orange-h1 {
  color: orange;
}
</style>
