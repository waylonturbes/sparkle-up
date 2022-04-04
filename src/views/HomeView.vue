<template>
  <v-card
    :elevation="0"
    color="rgba(0, 0, 0, 0)"
    class="d-flex flex-wrap justify-space-around align-content-center flex-column"
  >
    <spinning-can-animation style="height: 320px; width: 320px" />
  </v-card>
</template>

<script>
import SpinningCanAnimation from "../components/SpinningCanAnimation.vue";

export default {
  name: "HomeView",
  components: {
    SpinningCanAnimation,
  },
};
</script>
