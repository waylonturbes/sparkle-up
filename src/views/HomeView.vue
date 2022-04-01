<template>
  <div ref="spinningCan" style="width: 300px; height: 300px"></div>
</template>

<script>
import lottieWeb from "lottie-web";

export default {
  name: "HomeView",
  methods: {
    spinningCanAnimation() {
      lottieWeb.loadAnimation({
        container: this.$refs.spinningCan,
        path: "/can.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: "Spinning Can",
      });
    },
  },
  mounted: function () {
    this.spinningCanAnimation();
  },
};
</script>
