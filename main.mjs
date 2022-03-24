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
      let valid = this.$refs.sparklingWaterForm.validate();
      if (valid === true) {
        this.sparklingWaters.push({
          flavor: this.flavor,
          brand: this.brand,
          rating: this.rating,
          review: this.review,
        });
        this.$refs.sparklingWaterForm.reset();
      }
    },
    clear() {
      this.$refs.sparklingWaterForm.reset();
    },
  },
});
