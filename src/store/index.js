import Vue from "vue";
import Vuex from "vuex";

import { state, mutations } from "./data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: function () {
    return state;
  },
  getters: {},
  mutations,
  actions: {},
  modules: {},
});
