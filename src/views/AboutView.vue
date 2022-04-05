<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <h1 class="text-h2 text-center">About Sparkle Up</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <CarouselCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CarouselCard from "../components/CarouselCard.vue";

export default {
  name: "AboutView",
  components: {
    CarouselCard,
  },
  data: function () {
    return {};
  },
};
</script>
