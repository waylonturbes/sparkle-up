<template>
  <v-container :elevation="0" color="rgba(0, 0, 0, 0)">
    <v-row>
      <v-card outlined>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(image, i) in sparklingWaterImages"
            :key="i"
            :src="image.src"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-row>
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
