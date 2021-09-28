<template>
  <div>
    <Add />
    <Sub />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Add from "@/components/Add.vue";
import Sub from "@/components/Sub.vue";
export default {
  data() {
    return {};
  },

  components: {
    Add,
    Sub,
    Header,
  },
};
</script>
<style scoped>
</style>