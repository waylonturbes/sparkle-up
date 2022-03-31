<template>
  <fragment>
    <v-app-bar app :elevation="0">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h4 font-weight-medium pl-sm-0"
        >Sparkle Up</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-switch
        v-if="$vuetify.breakpoint.smAndUp"
        dense
        v-model="darkMode"
        @click="toggleDarkMode()"
        label="Toggle Theme"
        color="primary"
        :hide-details="true"
      ></v-switch>

      <template v-if="$vuetify.breakpoint.smAndUp" v-slot:extension>
        <v-tabs centered fixed-tabs>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
          <v-tab to="/sparkling-waters">Sparkling Waters</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Home </v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title> About </v-list-item-title>
          </v-list-item>

          <v-list-item to="/sparkling-waters">
            <v-list-item-icon>
              <v-icon>mdi-shimmer</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Sparkling Waters </v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item :inactive="true" :link="false">
            <v-list-item-icon>
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Toggle Theme </v-list-item-title>
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
    darkMode: window.localStorage.getItem("theme") === "dark" ? true : false,
  }),
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = this.darkMode;
      if (this.darkMode === true) {
        window.localStorage.setItem("theme", "dark");
      } else {
        window.localStorage.setItem("theme", "light");
      }
    },
  },
};
</script>
