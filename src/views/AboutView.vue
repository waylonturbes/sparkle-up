<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <h1 class="text-h2 text-center">About Sparkle Up</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <CarouselCard :images="sparklingWaterImages" height="600px" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CarouselCard from "../components/CarouselCard.vue";

import raspberryLemonWater from "../assets/raspberry-lemon-sparkling-water.jpg";
import lemonWater from "../assets/lemon-sparkling-water.jpg";
import shinyWater from "../assets/shiny-sparkling-water.jpg";

export default {
  name: "AboutView",
  components: {
    CarouselCard,
  },
  data: function () {
    return {
      sparklingWaterImages: [
        { src: raspberryLemonWater },
        { src: lemonWater },
        { src: shinyWater },
      ],
    };
  },
};
</script>
