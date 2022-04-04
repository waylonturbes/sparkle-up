<template>
  <v-container :elevation="0" color="rgba(0, 0, 0, 0)">
    <v-row no-gutters justify="center">
      <spinning-can-animation style="height: 320px; width: 320px" />
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <p class="text-center">
          Want to record sparkling waters, but don't want to write them all down
          by hand, on a sheet of paper? Well, Sparkle Up has what you need. With
          Sparkle Up, you can record and rate/review your favorite (or least
          favorite) sparkling waters in just seconds.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn
        color="primary"
        x-large
        v-text="'get started'"
        to="/sparkling-waters"
      ></v-btn>
    </v-row>
  </v-container>
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
