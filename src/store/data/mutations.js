export default {
  setEditMode(state, boolean) {
    state.editMode = boolean;
  },
  setEditItem(state, item) {
    state.editItem = item;
  },
  cancelEdit(state) {
    state.sparklingWaters.splice(state.editItemIndex, 0, state.editItem);
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
  updateSparklingWater(state, sparklingWater) {
    state.sparklingWaters.splice(state.editItem.index, 0, sparklingWater);
  },
  addSparklingWater(state, sparklingWater) {
    state.sparklingWaters.push(sparklingWater);
  },
  removeSparklingWater(state, index) {
    state.sparklingWaters.splice(index, 1);
  },
};
