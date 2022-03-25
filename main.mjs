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
        if (this.editMode === true) {
          this.sparklingWaters.splice(this.editItemIndex, 0, this.editItem);
          this.editMode = false;
          this.clear();
        } else {
          this.sparklingWaters.push({
            flavor: this.flavor,
            brand: this.selectBrand,
            rating: this.selectScore,
            review: this.review,
          });
          this.clear();
        }
      }
    },
    clear() {
      this.$refs.sparklingWaterForm.reset();
    },
    deleteDrink(index) {
      this.sparklingWaters.splice(index, 1);
    },
    editDrink(index) {
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.sparklingWaters.splice(index, 1)[0];
      this.flavor = this.editItem.flavor;
      this.selectBrand = this.editItem.brand;
      this.selectScore = this.editItem.rating;
      this.review = this.editItem.review;
    },
    cancelEditDrink() {
      this.sparklingWaters.splice(this.editItemIndex, 0, this.editItem);
      this.editItemIndex = null;
      this.editMode = false;
      this.editItem = {
        flavor: "",
        brand: "",
        rating: null,
        review: "",
      };
      this.clear();
    },
  },
});
