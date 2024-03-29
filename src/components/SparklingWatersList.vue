<template>
  <v-col align-self="center" cols="10" md="6" lg="7" xl="6">
    <v-card
      outlined
      elevation="3"
      class="overflow-y-auto align-self-center justify-self-center"
      height="600px"
    >
      <v-banner :sticky="true" color="primary" class="white--text">
        <span class="text-h5 font-weight-medium">Sparkling Waters</span>
      </v-banner>
      <v-list three-line>
        <v-list-item
          v-if="sparklingWaterList.length === 0"
          inactive
          :ripple="false"
        >
          <v-list-item-content>
            <v-list-item-title class="pb-1">
              There are currently no sparkling waters saved.
            </v-list-item-title>

            <v-list-item-subtitle class="text--primary">
              To add a new sparkling water, use the "Add a sparkling water"
              form.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-group
          v-else
          v-for="(water, index) in sparklingWaterList"
          :key="index"
        >
          <v-list-item inactive :ripple="false">
            <v-list-item-content>
              <v-list-item-title
                class="pb-1"
                v-text="water.brand"
              ></v-list-item-title>

              <v-list-item-subtitle class="text--primary pb-1"
                >{{ water.flavor }}&nbsp; - &nbsp;{{ water.rating }} /
                10</v-list-item-subtitle
              >

              <v-list-item-subtitle>{{ water.review }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action class="d-flex flex-row ma-auto">
              <v-tooltip v-if="listEditMode === false" bottom color="primary">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon class="mr-1">
                    <v-icon
                      v-on="on"
                      v-bind="attrs"
                      color="grey darken-1"
                      @click.prevent="editDrink(index)"
                    >
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                </template>
                <div class="text-center">Edit</div>
              </v-tooltip>

              <v-tooltip v-else bottom color="info">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    :ripple="false"
                    plain
                    icon
                    class="mr-1"
                  >
                    <v-icon> mdi-pencil-off </v-icon>
                  </v-btn>
                </template>
                <div class="text-center">
                  You're already editing<br />
                  a sparkling water
                </div>
              </v-tooltip>

              <v-tooltip bottom color="error">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon class="ml-1">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      color="grey darken-1"
                      @click.prevent="deleteDrink(index)"
                      >mdi-delete</v-icon
                    >
                  </v-btn>
                </template>
                <div class="text-center">Delete</div>
              </v-tooltip>
            </v-list-item-action>
          </v-list-item>

          <v-divider
            v-if="index < sparklingWaterList.length - 1"
            :key="index"
          ></v-divider>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SparklingWatersList",
  data: function () {
    return {};
  },
  computed: mapState({
    listEditMode: (state) => state.editMode,
    sparklingWaterList: (state) => state.sparklingWaters,
  }),
  methods: {
    deleteDrink(index) {
      this.$store.commit("removeSparklingWater", index);
    },
    editDrink(index) {
      const [sparklingWater] = this.sparklingWaterList.splice(index, 1);
      this.$store.commit("setEditItem", { ...sparklingWater, index });
      this.$store.commit("setEditMode", true);
    },
  },
};
</script>
