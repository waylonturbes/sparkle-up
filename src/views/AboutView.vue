<template>
  <v-container
    color="rgba(0, 0, 0, 0)"
    class="d-flex flex-column justify-space-around my-10"
  >
    <v-row justify="center" class="mb-10">
      <v-col cols="10" sm="8">
        <h1 class="text-h2 text-center">
          About
          <br v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" />
          Sparkle Up
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="5">
        <CarouselCard
          :images="sparklingWaterImages"
          :height="
            $vuetify.breakpoint.sm || $vuetify.breakpoint.md ? '600px' : '400px'
          "
        />
      </v-col>
      <v-col cols="12" lg="5" align-self="center">
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
