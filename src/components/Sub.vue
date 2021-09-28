<template>
  <div>
    <h2>{{ showNumb }}</h2>
    <button @click="btn_handle1">-1</button>
    <button @click="btn_handle2">-n</button>
    <button @click="btn_handle3">-1 Async</button>
    <button @click="btn_handle4">-n Async</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNumb"]),
  },
  methods: {
    ...mapMutations(["sub", "subN"]),
    ...mapActions(["subAsync", "subAsyncN"]),
    btn_handle1() {
      this.sub();
    },
    btn_handle2() {
      this.subN(3);
    },
    btn_handle3() {
      this.subAsync();
    },
    btn_handle4() {
      this.subAsyncN(4000);
    },
  },
};
</script>
<style scoped>
</style>