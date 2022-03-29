export default {
  setEditMode(state, boolean) {
    state.editMode = boolean;
  },
  setEditItem(state, item) {
    state.editItem = item;
  },
  cancelEdit(state) {
    state.sparklingWaters.splice(state.editItem.index, 0, state.editItem);
    state.editMode = false;
    state.editItem = {
      index: null,
      flavor: "",
      brand: "",
      otherBrand: "",
      rating: null,
      review: "",
    };
  },
  updateSparklingWater(state, updatedWater) {
    state.sparklingWaters.splice(state.editItem.index, 0, {
      ...updatedWater,
    });
  },
  addSparklingWater(state, water) {
    state.sparklingWaters.push(water);
  },
  removeSparklingWater(state, index) {
    state.sparklingWaters.splice(index, 1);
  },
};
