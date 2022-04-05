<template>
  <v-container
    color="rgba(0, 0, 0, 0)"
    class="d-flex flex-column justify-space-around"
  >
    <v-row justify="center" class="mb-md-10 mb-0">
      <v-col cols="10" sm="6">
        <h1 class="text-h2 text-center">
          Find, create, rate & review sparkling waters
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-10 my-md-0">
      <v-col md="4" sm="5" cols="8" class="justify-center">
        <spinning-can-animation />
      </v-col>
      <v-col
        md="5"
        align-self="center"
        cols="10"
        class="text-center text-md-justify"
      >
        <h3 class="text-h4 mb-4">Start your spark</h3>
        <p class="mb-8 text-body1 text-justify">
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
    <v-divider class="my-10"></v-divider>
    <v-row justify="center" class="mt-10">
      <v-spacer
        v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
      ></v-spacer>
      <v-col cols="10" lg="5" xl="4" align-self="center">
        <h3 class="text-h5 mb-4 text-md-start text-center">
          Why is Sparking Water so good?
        </h3>
        <p class="text-body1 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut iusto
          praesentium officiis, ex nobis quaerat sit consequuntur perspiciatis,
          doloremque quibusdam eum dignissimos vitae. Voluptatum totam deleniti
          velit explicabo. Architecto iusto corporis atque, minus sequi porro
          animi tempore vel voluptate, ratione mollitia nihil beatae iste odio
          non ad provident? Molestiae saepe laudantium soluta totam explicabo.
          Laborum adipisci exercitationem similique veritatis quaerat quam nemo
          culpa pariatur. Architecto soluta aliquid ullam eveniet, quae sit,
          inventore quis, quidem explicabo maiores natus dignissimos! Culpa
          itaque dolore consectetur possimus cum? At laborum corporis ut iusto
          deleniti! Dolorum velit esse aperiam itaque iure est quasi cum maiores
          id. Amet voluptatibus et facilis consectetur adipisci quisquam! Ipsam,
          at. Atque, impedit id culpa nesciunt fugiat dolore illo facere odit
          repellat maiores laboriosam iste molestiae! Dolores culpa earum
          officiis magni, in obcaecati repellendus doloribus nihil
          reprehenderit.
        </p>
      </v-col>
      <v-spacer
        v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
      ></v-spacer>
      <v-col cols="12" lg="5" xl="4" align-self="center">
        <CarouselCard
          :images="sparklingWaterImages"
          :height="
            $vuetify.breakpoint.sm || $vuetify.breakpoint.md ? '600px' : '400px'
          "
        />
      </v-col>
      <v-spacer
        v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
      ></v-spacer>
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
