import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    page_title: "",
  },
  getters: {
    page_title: (state) => {
      return state.page_title;
    },
  },
  mutations: {
    set_title: (state, payload) => {
      state.page_title = payload;
    },
  },
  actions: {
    set_title: (context, payload) => {
      context.commit("set_title", payload);
    },
  },
  modules: {},
});
