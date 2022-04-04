<template>
  <v-app>
    <sparkle-up-nav-bar />
    <v-main
      class="d-flex align-center"
      :style="{ background: $vuetify.theme.themes[theme].background }"
    >
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
  data: () => ({
    currentTheme: window.localStorage.getItem("theme"),
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  beforeMount() {
    if (this.currentTheme) {
      this.$vuetify.theme.dark = this.currentTheme === "dark" ? true : false;
      return;
    } else {
      window.localStorage.setItem("theme", this.$vuetify);
    }
  },
};
</script>
