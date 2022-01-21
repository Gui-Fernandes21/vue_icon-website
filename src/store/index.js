import { createStore } from "vuex";

import rootActions from "./rootActions";
import rootGetters from "./rootGetters";
import rootMutations from "./rootMutations";

const store = createStore({
  state() {
    return {
      isMobile: false,
    };
  },
  actions: rootActions,
  mutations: rootMutations,
  getters: rootGetters,
});

export default store;
