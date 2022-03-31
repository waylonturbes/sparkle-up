import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vueFrament from "./plugins/vueFragment";

import "./styles/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vueFrament,

  render: (h) => h(App),
}).$mount("#app");
