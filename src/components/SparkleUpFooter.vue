<template>
  <v-footer :absolute="false" outlined class="pa-0">
    <v-card
      :flat="true"
      :tile="true"
      class="text-center"
      width="100%"
      :style="{
        'background-color':
          this.$vuetify.theme.dark === false ? '#f5f5f5' : '#272727',
      }"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.svg"
          class="mx-4"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="30px"> {{ icon.svg }} </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0 text-body1">
        I hope you enjoyed using Sparkle Up as much as I enjoyed building it!
        This is my first project using Vue and Vuetify.
      </v-card-text>

      <v-card-text class="pt-0 text-body1">
        To see the projects source code, click on the little GitHub icon above. 
        Thank you for trying out my app!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text-h6">
        {{ new Date().getFullYear() }} — Sparkle Up
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
        {
          svg: "mdi-github",
          link: "https://github.com/waylonturbes/sparkle-up",
        },
      ],
    };
  },
};
</script>
