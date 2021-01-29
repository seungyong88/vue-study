import { createStore } from "vuex";
import axios from 'axios';
// import moduleA from "./a.js";
// import moduleB from "./b.js";

const myModule = {
  namespaced: true,
  state() {
    return {
      entries: []
    };
  },
  mutations: {
    set(state, payload) {
      state.entries = payload;
    }
  },
  actions: {
    load({ commit }, file) {
      axios.get(file).then(response => {
        console.log(file, response);
        commit("set", response.data);
      });
    }
  }
};

export default createStore({
  modules: {
    moduleA: myModule,
    moduleB: myModule
  },
  mutations: {
    update() {
      console.log("mutation: update");
    }
  },
  actions: {
    update() {
      console.log("action: update");
    }
  }
});
