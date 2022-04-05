<template>
  <v-container
    :elevation="0"
    color="rgba(0, 0, 0, 0)"
    class="d-flex flex-column justify-space-around my-10"
  >
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <h1 class="text-h2 text-center">
          Find, create, rate & review sparkling waters.
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-10 mb-md-0">
      <v-col md="4" cols="8" class="justify-center">
        <spinning-can-animation />
      </v-col>
      <v-col md="4" align-self="center" cols="8">
        <h3 class="text-h4 mb-4">Start your spark</h3>
        <p class="mb-8">
          Want to record sparkling waters, but don't want to write them all down
          by hand, on a sheet of paper? Well, Sparkle Up has what you need. With
          Sparkle Up, you can record and rate/review your favorite (or least
          favorite) sparkling waters in just seconds.
        </p>
        <v-btn
          color="primary"
          x-large
          v-text="'get started'"
          to="/sparkling-waters"
        ></v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <CarouselCard :images="sparklingWaterImages" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CarouselCard from "../components/CarouselCard.vue";

import SpinningCanAnimation from "../components/SpinningCanAnimation.vue";
import laCroixWater from "../assets/la-croix-sparkling-water.jpg";
import bublyWater from "../assets/bubly-sparkling-water.jpg";
import dogWithWater from "../assets/dog-with-sparkling-water.jpg";
import mineraguaWater from "../assets/mineragua-sparkling-water.jpg";
import sanzoWater from "../assets/sanzo-sparkling-water.jpg";
import plantWater from "../assets/plant-sparkling-water.jpg";

export default {
  name: "HomeView",
  components: {
    SpinningCanAnimation,
    CarouselCard,
  },
  data: function () {
    return {
      sparklingWaterImages: [
        { src: laCroixWater },
        { src: sanzoWater },
        { src: dogWithWater },
        { src: mineraguaWater },
        { src: bublyWater },
        { src: plantWater },
      ],
    };
  },
};
</script>
