import { data } from "./data.mjs";

let sparkleUp = new Vue({
  el: "#sparkle-up",
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  }),
  data: {
    ...data,
  },
  methods: {
    submit() {
      this.$refs.sparklingWaterForm.validate();
    },
    clear() {
      this.$refs.sparklingWaterForm.reset();
    },
  },
});
