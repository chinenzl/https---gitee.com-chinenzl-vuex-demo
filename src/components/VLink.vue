<template>
  <a :href="href" :class="{ active: isActive }" :click="go"><slot></slot></a>
</template>

<script>
import routes from "@/router/index.js";

export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    },
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, routes[this.href], this.href);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
