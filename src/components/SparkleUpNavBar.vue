<template>
  <fragment>
    <v-app-bar app :elevation="0" dark color="primary">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h4 font-weight-bold"
        >Sparkle Up</v-toolbar-title
      >
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item @click="goTo('/')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Home </v-list-item-title>
          </v-list-item>

          <v-list-item @click="goTo('/about')">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title> About </v-list-item-title>
          </v-list-item>

          <v-list-item @click="goTo('/sparkling-waters')">
            <v-list-item-icon>
              <v-icon>mdi-shimmer</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Sparkling Waters </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "SparkleUpNavBar",
  components: { Fragment },
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    goTo(string) {
      if (this.$router.history.current.fullPath === string) {
        return;
      } else {
        this.$router.push(string);
      }
    },
  },
};
</script>
