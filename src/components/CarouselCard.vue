<template>
  <v-card outlined class="pa-6" elevation="4">
    <v-carousel height="700px" hide-delimiters :cycle="true" progress>
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        :src="image.src"
      ></v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  props: {
    images: Array,
  },
};
</script>
