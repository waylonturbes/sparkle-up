<template>
  <div class="d-md-flex justify-space-around align-space-around">
    <sparkling-water-form />
    <sparkling-waters-list />
  </div>
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
