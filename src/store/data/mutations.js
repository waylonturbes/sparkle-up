export default {
  setEditMode(state, boolean) {
    state.editMode = boolean;
  },
  setEditItem(state, item) {
    state.editItem = item;
  },
  setEditItemIndex(state, index) {
    state.editItemIndex = index;
  },
  cancelEdit(state) {
    state.sparklingWaters.splice(state.editItemIndex, 0, state.editItem);
    state.editItemIndex = null;
    state.editMode = false;
    state.editItem = {
      flavor: "",
      brand: "",
      rating: null,
      review: "",
    };
  },
  updateSparklingWater(state, sparklingWater) {
    state.sparklingWaters.splice(state.editItemIndex, 0, sparklingWater);
  },
  addSparklingWater(state, sparklingWater) {
    state.sparklingWaters.push(sparklingWater);
  },
  removeSparklingWater(state, newList) {
    state.sparklingWaters = newList;
  },
};
