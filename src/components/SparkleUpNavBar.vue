<template>
  <fragment>
    <v-app-bar app outlined :elevation="0">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-app-bar-title
        v-text="'Sparkle Up'"
        class="font-weight-medium text-uppercase pl-sm-0"
        style="letter-spacing: 0.1rem"
      ></v-app-bar-title>

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
    <v-navigation-drawer v-model="drawer" app temporary>
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
        </v-list-item-group>

        <v-divider></v-divider>

        <v-list-item
          input-value=""
          :link="false"
          @click="
            () => {
              this.darkMode = !this.darkMode;
              toggleDarkMode();
            }
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-list-item-icon>
          <v-list-item-title> Toggle Theme </v-list-item-title>
        </v-list-item>
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
      window.localStorage.setItem(
        "theme",
        this.darkMode === true ? "dark" : "light"
      );
    },
  },
};
</script>
