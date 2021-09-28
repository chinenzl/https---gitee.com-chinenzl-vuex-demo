<template>
  <div class="add-box">
    <h2>{{ $store.getters.showNumb }}</h2>
    <button @click="btn_handle1">+1</button>
    <button @click="btn_handle2">+n</button>
    <button @click="btn_handle3">+1 Async</button>
    <button @click="btn_handle4">+n Async</button>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    btn_handle1() {
      this.$store.commit("increment");
    },
    btn_handle2() {
      this.$store.commit("incrementN", 3);
    },
    btn_handle3() {
      this.$store.dispatch("incrementAsync");
    },
    btn_handle4() {
      this.$store.dispatch("incrementAsyncN", 4000);
    },
  },
};
</script>
<style scoped>
.add-box {
  margin-bottom: 30px;
}
</style>