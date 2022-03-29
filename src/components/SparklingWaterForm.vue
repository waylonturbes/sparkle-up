<template>
  <v-form ref="sparklingWaterForm" v-model="valid" class="form" lazy-validation>
    <h3 class="text-h5 font-weight-medium text-center pb-4">
      &#129380; Add a sparkling water &#10024;
    </h3>
    <v-text-field
      filled
      v-model="flavor"
      :rules="flavorRules"
      label="Flavor"
      required
    ></v-text-field>

    <v-select
      filled
      v-model="sparklingWater.brand"
      :items="brands"
      :rules="brandRules"
      label="Brand"
      required
    ></v-select>

    <v-text-field
      v-if="sparklingWater.brand === 'Other'"
      filled
      v-model="sparklingWater.otherBrand"
      :rules="brandRules"
      label="Other Brand"
      required
    ></v-text-field>

    <v-select
      filled
      v-model.number="sparklingWater.rating"
      :items="scores"
      :rules="scoreRules"
      label="Score"
      required
    ></v-select>

    <v-textarea
      filled
      auto-grow
      rows="3"
      row-height="30"
      v-model="sparklingWater.review"
      :rules="reviewRules"
      label="Review"
      required
    ></v-textarea>

    <div class="button-group d-flex">
      <v-btn
        class="success"
        type="submit"
        :disabled="!valid"
        @click.prevent="submit"
      >
        <span v-if="formEditMode === true"> Update Sparkling Water </span>
        <span v-else> Add Sparkling Water </span>
      </v-btn>

      <v-btn color="info" @click.prevent="clear"> Reset </v-btn>
    </div>
    <v-btn
      v-show="formEditMode === true"
      class="info mt-4"
      @click.prevent="cancelEditDrink"
    >
      Cancel Edit
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SparklingWaterForm",
  data: function () {
    return {
      valid: true,
      sparklingWater: {
        flavor: "",
        brand: "",
        otherBrand: "",
        rating: null,
        review: "",
      },
      flavorRules: [
        (v) => !!v || "Flavor is required",
        (v) => (v && v.length < 100) || "Must be under 100 characters",
      ],
      scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      scoreRules: [(v) => !!v || "Score is required"],
      brands: [
        "La Croix",
        "bubly",
        "Polar",
        "Waterloo",
        "Schweppes",
        "Simply Balanced",
        "Spindrift",
        "Perrier",
        "Adirondack",
        "Perrier",
        "Other",
      ],
      brandRules: [(v) => !!v || "Brand is required"],
      reviewRules: [
        (v) => !!v || "Review is required",
        (v) => (v && v.length < 100) || "Must be under 100 characters",
      ],
    };
  },
  computed: mapState({
    formEditMode: (state) => state.editMode,
    updateForm(state) {
      if (state.editMode) {
        return (this.sparklingWater = state.editItem);
      }
    },
  }),
  methods: {
    submit() {
      let valid = this.$refs.sparklingWaterForm.validate();
      let updatedDrink = this.sparklingWater;
      if (valid === true) {
        if (this.$store.state.editMode === true) {
          this.$store.commit("updateSparklingWater", {
            ...this.$store.state.editItem,
            updatedDrink,
          });
          this.$store.commit("setEditItem", {
            index: null,
            flavor: "",
            brand: "",
            otherBrand: "",
            rating: null,
            review: "",
          });
          this.$store.commit("setEditMode", false);
          this.clear();
        } else {
          this.$store.commit("addSparklingWater", updatedDrink);
          this.clear();
        }
      }
    },
    cancelEditDrink() {
      this.$store.commit("cancelEdit");
      this.clear();
    },
    clear() {
      this.$refs.sparklingWaterForm.reset();
    },
  },
};
</script>
