<template>
  <v-container
    color="rgba(0, 0, 0, 0)"
    class="d-flex flex-column justify-space-around"
  >
    <sparkling-water-form />
    <sparkling-waters-list />
  </v-container>
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
