<template>
  <v-footer app :fixed="false" class="d-flex">
    <v-card flat tile class="primary white--text text-center" width="100%">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.svg"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="30px"> {{ icon.svg }} </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 text-body1 font-weight-medium">
        I hope you enjoyed using Sparkle Up as much as I enjoyed building it!
        This app was built with Vue & Vuetify for experimenting purposes. If you
        want to, you can find me on the following platforms.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text text-h6">
        {{ new Date().getFullYear() }} — <strong>Sparkle Up</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "SparkleUpFooter",
  data() {
    return {
      icons: [
        {
          svg: "mdi-linkedin",
          link: "https://www.linkedin.com/in/waylon-turbes/",
        },
        { svg: "mdi-github", link: "https://github.com/waylonturbes" },
      ],
    };
  },
};
</script>
