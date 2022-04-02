<template>
  <v-app>
    <sparkle-up-nav-bar />
    <v-main class="d-flex align-center">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <sparkle-up-footer />
  </v-app>
</template>

<script>
import SparkleUpFooter from "./components/SparkleUpFooter.vue";
import SparkleUpNavBar from "./components/SparkleUpNavBar.vue";

export default {
  components: { SparkleUpFooter, SparkleUpNavBar },
  name: "App",
  data: () => ({}),
};
</script>
