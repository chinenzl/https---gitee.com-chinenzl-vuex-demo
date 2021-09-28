<template>
  <div class="header-box">
    <VLink href="/" class="white">主页</VLink>
    <VLink href="#/about" class="white">功能页</VLink>
  </div>
</template>
<script>
import VLink from "@/components/VLInk.vue";
export default {
  components: {
    VLink,
  },
};
</script>
<style scoped>
.header-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  background-color: teal;
}
.white {
  margin: 10px;
  color: #fff;
  cursor: pointer;
}
.white:hover {
  margin: 10px;
  color: rgb(238, 146, 8);
  cursor: pointer;
}
</style>