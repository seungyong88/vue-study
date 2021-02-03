import { createStore } from "vuex";
import axios from "axios";

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

const store = createStore({
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

// const unwatch = store.watch(
//   (state, getters) => {
//     console.log(getters)
//     return state.count;
//   },
//   (newVal, oldVal) => {
//     //처리
//     console.log(newVal, oldVal);
//   }
// );

export default store;
