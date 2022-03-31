<template>
  <v-card
    :elevation="0"
    color="rgba(0, 0, 0, 0)"
    class="d-flex flex-wrap justify-space-around mx-auto"
    max-width="1600px"
  >
    <sparkling-water-form />
    <sparkling-waters-list />
  </v-card>
</template>

<script>
import SparklingWaterForm from "../components/SparklingWaterForm.vue";
import SparklingWatersList from "../components/SparklingWatersList.vue";

export default {
  name: "SparklingWatersView",
  components: {
    SparklingWaterForm,
    SparklingWatersList,
  },
};
</script>
