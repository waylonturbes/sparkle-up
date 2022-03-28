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
  editSparklingWater(state, sparklingWater) {
    state.sparklingWaters.splice(state.editItemIndex, 0, sparklingWater);
  },
  addSparklingWater(state, sparklingWater) {
    state.sparklingWaters.push(sparklingWater);
  },
  removeSparklingWater(state, index) {
    state.sparklingWaters.splice(index, 1);
  },
};
