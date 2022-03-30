import data from "./data.js";

var app = new Vue({
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
  data: data,
  methods: {
    submit() {
      let valid = this.$refs.sparklingWaterForm.validate();
      if (valid === true) {
        if (this.editMode === true) {
          let updatedDrink = {
            flavor: this.flavor,
            brand:
              this.selectBrand === "Other" ? this.otherBrand : this.selectBrand,
            rating: this.selectScore,
            review: this.review,
          };
          this.sparklingWaters.splice(this.editItemIndex, 0, updatedDrink);
          this.editItemIndex = null;
          this.editItem = {
            flavor: "",
            brand: "",
            rating: null,
            review: "",
          };
          this.editMode = false;
          this.clear();
        } else {
          this.sparklingWaters.push({
            flavor: this.flavor,
            brand:
              this.selectBrand === "Other" ? this.otherBrand : this.selectBrand,
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
      this.selectScore = this.editItem.rating;
      this.review = this.editItem.review;
      for (let brand of this.brands) {
        if (brand === this.editItem.brand) {
          this.selectBrand = brand;
          this.otherBrand = "";
          return;
        } else {
          this.selectBrand = "Other";
          this.otherBrand = this.editItem.brand;
        }
      }
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
