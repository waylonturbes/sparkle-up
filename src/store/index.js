import Vue from "vue";
import Vuex from "vuex";

import { state, mutations } from "./data";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return state;
  },
  getters: {},
  mutations() {
    return mutations;
  },
  actions: {},
  modules: {},
});
