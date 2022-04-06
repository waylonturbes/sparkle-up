<template>
  <v-col
    align-self="center"
    cols="10"
    sm="8"
    md="5"
    lg="4"
    xl="3"
    class="mb-10 mb-lg-0"
  >
    <v-form ref="sparklingWaterForm" v-model="valid" lazy-validation>
      <h3 class="text-h5 font-weight-medium text-center pb-4">
        &#129380; Add a sparkling water &#10024;
      </h3>
      <v-text-field
        filled
        v-model="sparklingWater.flavor"
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

      <div class="d-flex flex-wrap justify-space-between">
        <v-btn
          color="success"
          type="submit"
          :disabled="!valid"
          @click.prevent="submit"
        >
          <span v-if="formEditMode === true"> Update Sparkling Water </span>
          <span v-else> Add Sparkling Water </span>
        </v-btn>

        <v-btn color="info" @click.prevent="clear"> Reset </v-btn>
        <v-btn
          v-show="formEditMode === true"
          width="100%"
          class="mt-4"
          color="info"
          @click.prevent="cancelEditDrink(editItem)"
        >
          Cancel Edit
        </v-btn>
      </div>
    </v-form>
  </v-col>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SparklingWaterForm",
  data: function () {
    return {
      valid: true,
      sparklingWater: {
        index: null, // this is for editing a new sparkling water later
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
  computed: {
    ...mapState({
      formEditMode: (state) => state.editMode,
      editItem: (state) => state.editItem,
      sparklingWaters: (state) => state.sparklingWaters,
    }),
  },
  watch: {
    editItem() {
      this.sparklingWater = { ...this.editItem };
    },
  },
  methods: {
    submit() {
      const valid = this.$refs.sparklingWaterForm.validate();
      if (valid === true) {
        if (this.formEditMode) {
          this.$store.commit("updateSparklingWater", {
            ...this.sparklingWater,
            index: this.editItem.index,
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
          this.$store.commit("addSparklingWater", {
            ...this.sparklingWater,
          });
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
