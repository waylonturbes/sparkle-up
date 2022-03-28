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
      v-model="selectBrand"
      :items="brands"
      :rules="brandRules"
      label="Brand"
      required
    ></v-select>

    <v-text-field
      v-if="selectBrand === 'Other'"
      filled
      v-model="otherBrand"
      :rules="brandRules"
      label="Other Brand"
      required
    ></v-text-field>

    <v-select
      filled
      v-model.number="selectScore"
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
      v-model="review"
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
        <span v-if="editMode === true"> Update Sparkling Water </span>
        <span v-else> Add Sparkling Water </span>
      </v-btn>

      <v-btn color="info" @click.prevent="clear"> Reset </v-btn>
    </div>
    <v-btn
      v-show="editMode === true"
      class="info mt-4"
      @click.prevent="cancelEditDrink"
    >
      Cancel Edit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "SparklingWaterForm",
};
</script>
